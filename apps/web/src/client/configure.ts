import {
  createClient,
  dedupExchange,
  fetchExchange,
  Exchange,
  makeOperation,
  subscriptionExchange,
} from 'urql';
import {retryExchange} from '@urql/exchange-retry';
import {refocusExchange} from '@urql/exchange-refocus';
import {cacheExchange} from '@urql/exchange-graphcache';
import {createClient as createWSClient} from 'graphql-ws';
import {requestPolicyExchange} from '@urql/exchange-request-policy';
import {authExchange} from '@urql/exchange-auth';
import schema from './schema.json';

type AuthState = {
  token: string;
};

export const makeClient = (url: string, token?: string) => {
  const wsClient = createWSClient({
    url: url.replace('https', 'wss').replace('http', 'ws'),
    lazy: true,
  });

  const exchanges: Exchange[] = [
    dedupExchange,
    requestPolicyExchange({}),
    refocusExchange(),
    cacheExchange({
      // @ts-ignore
      schema,
      keys: {},
      updates: {},
    }),
    retryExchange({
      initialDelayMs: 1000,
      maxDelayMs: 15000,
      randomDelay: true,
      maxNumberAttempts: 2,
      retryIf: error => {
        return !!(error.graphQLErrors.length > 0 || error.networkError);
      },
    }),
    authExchange<AuthState>({
      addAuthToOperation: ({authState, operation}) => {
        if (!authState || !authState.token) {
          return operation;
        }

        const fetchOptions =
          typeof operation.context.fetchOptions === 'function'
            ? operation.context.fetchOptions()
            : operation.context.fetchOptions || {};

        return makeOperation(operation.kind, operation, {
          ...operation.context,
          fetchOptions: {
            ...fetchOptions,
            headers: {
              ...fetchOptions.headers,
              Authorization: `Bearer ${authState.token}`,
            },
          },
        });
      },
      willAuthError: ({operation, authState}) => {
        if (!authState) {
          return !(
            operation.kind === 'mutation' &&
            operation.query.definitions.some(definition => {
              return (
                definition.kind === 'OperationDefinition' &&
                definition.selectionSet.selections.some(node => {
                  return node.kind === 'Field' && node.name.value === 'login';
                })
              );
            })
          );
        }
        return false;
      },
      didAuthError: ({error}) => {
        return error.graphQLErrors.some(
          e => e.extensions?.code === 'invalid-jwt'
        );
      },
      getAuth: async ({authState, mutate}) => {
        if (!authState) {
          return token ? {token} : null;
        }

        return null;
      },
    }),
    fetchExchange,
    subscriptionExchange({
      forwardSubscription(operation) {
        return {
          subscribe: sink => {
            const dispose = wsClient.subscribe(operation, sink);
            return {
              unsubscribe: dispose,
            };
          },
        };
      },
    }),
  ];

  return createClient({
    url,
    suspense: false,
    exchanges,
  });
};
