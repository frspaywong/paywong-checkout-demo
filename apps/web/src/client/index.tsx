import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends {[key: string]: unknown}> = {[K in keyof T]: T[K]};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  json: any;
  numeric: number;
  timestamptz: string;
  uuid: string;
};

/** Boolean expression to filter rows from the table "Account". All fields are combined with a logical 'AND'. */
export type AccountBoolExp = {
  _and?: InputMaybe<Array<AccountBoolExp>>;
  _not?: InputMaybe<AccountBoolExp>;
  _or?: InputMaybe<Array<AccountBoolExp>>;
  apps?: InputMaybe<PaymentAppBoolExp>;
  id?: InputMaybe<StringComparisonExp>;
  publicAddress?: InputMaybe<StringComparisonExp>;
};

/** Ordering options when selecting data from "Account". */
export type AccountOrderBy = {
  appsAggregate?: InputMaybe<PaymentAppAggregateOrderBy>;
  id?: InputMaybe<OrderBy>;
  publicAddress?: InputMaybe<OrderBy>;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type BooleanComparisonExp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to filter rows from the table "Chain". All fields are combined with a logical 'AND'. */
export type ChainBoolExp = {
  _and?: InputMaybe<Array<ChainBoolExp>>;
  _not?: InputMaybe<ChainBoolExp>;
  _or?: InputMaybe<Array<ChainBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  currency?: InputMaybe<CurrencyBoolExp>;
  currencyId?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  isLive?: InputMaybe<BooleanComparisonExp>;
  isTestnet?: InputMaybe<BooleanComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  tokens?: InputMaybe<TokenBoolExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** Ordering options when selecting data from "Chain". */
export type ChainOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  currency?: InputMaybe<CurrencyOrderBy>;
  currencyId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  isLive?: InputMaybe<OrderBy>;
  isTestnet?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  tokensAggregate?: InputMaybe<TokenAggregateOrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** select columns of table "Chain" */
export enum ChainSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CurrencyId = 'currencyId',
  /** column name */
  Id = 'id',
  /** column name */
  IsLive = 'isLive',
  /** column name */
  IsTestnet = 'isTestnet',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** Boolean expression to filter rows from the table "ContactType". All fields are combined with a logical 'AND'. */
export type ContactTypeBoolExp = {
  _and?: InputMaybe<Array<ContactTypeBoolExp>>;
  _not?: InputMaybe<ContactTypeBoolExp>;
  _or?: InputMaybe<Array<ContactTypeBoolExp>>;
  id?: InputMaybe<StringComparisonExp>;
};

/** Ordering options when selecting data from "ContactType". */
export type ContactTypeOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** select columns of table "ContactType" */
export enum ContactTypeSelectColumn {
  /** column name */
  Id = 'id',
}

/** Boolean expression to filter rows from the table "Country". All fields are combined with a logical 'AND'. */
export type CountryBoolExp = {
  _and?: InputMaybe<Array<CountryBoolExp>>;
  _not?: InputMaybe<CountryBoolExp>;
  _or?: InputMaybe<Array<CountryBoolExp>>;
  dialCode?: InputMaybe<StringComparisonExp>;
  emoji?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
};

/** Ordering options when selecting data from "Country". */
export type CountryOrderBy = {
  dialCode?: InputMaybe<OrderBy>;
  emoji?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** select columns of table "Country" */
export enum CountrySelectColumn {
  /** column name */
  DialCode = 'dialCode',
  /** column name */
  Emoji = 'emoji',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
}

/** Boolean expression to filter rows from the table "Currency". All fields are combined with a logical 'AND'. */
export type CurrencyBoolExp = {
  _and?: InputMaybe<Array<CurrencyBoolExp>>;
  _not?: InputMaybe<CurrencyBoolExp>;
  _or?: InputMaybe<Array<CurrencyBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  isFiat?: InputMaybe<BooleanComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  priceUSD?: InputMaybe<NumericComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** Ordering options when selecting data from "Currency". */
export type CurrencyOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  isFiat?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  priceUSD?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** select columns of table "Currency" */
export enum CurrencySelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsFiat = 'isFiat',
  /** column name */
  Name = 'name',
  /** column name */
  PriceUsd = 'priceUSD',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** ordering argument of a cursor */
export enum CursorOrdering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC',
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type NumericComparisonExp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  Asc = 'ASC',
  /** in ascending order, nulls first */
  AscNullsFirst = 'ASC_NULLS_FIRST',
  /** in ascending order, nulls last */
  AscNullsLast = 'ASC_NULLS_LAST',
  /** in descending order, nulls first */
  Desc = 'DESC',
  /** in descending order, nulls first */
  DescNullsFirst = 'DESC_NULLS_FIRST',
  /** in descending order, nulls last */
  DescNullsLast = 'DESC_NULLS_LAST',
}

/** order by aggregate values of table "PaymentApp" */
export type PaymentAppAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PaymentApp_Max_Order_By>;
  min?: InputMaybe<PaymentApp_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "PaymentApp". All fields are combined with a logical 'AND'. */
export type PaymentAppBoolExp = {
  _and?: InputMaybe<Array<PaymentAppBoolExp>>;
  _not?: InputMaybe<PaymentAppBoolExp>;
  _or?: InputMaybe<Array<PaymentAppBoolExp>>;
  account?: InputMaybe<AccountBoolExp>;
  accountId?: InputMaybe<StringComparisonExp>;
  homepage?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  isEnabled?: InputMaybe<BooleanComparisonExp>;
  logoUrl?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  tokens?: InputMaybe<PaymentAppTokenBoolExp>;
};

/** Ordering options when selecting data from "PaymentApp". */
export type PaymentAppOrderBy = {
  account?: InputMaybe<AccountOrderBy>;
  accountId?: InputMaybe<OrderBy>;
  homepage?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  isEnabled?: InputMaybe<OrderBy>;
  logoUrl?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  tokensAggregate?: InputMaybe<PaymentAppTokenAggregateOrderBy>;
};

/** select columns of table "PaymentApp" */
export enum PaymentAppSelectColumn {
  /** column name */
  AccountId = 'accountId',
  /** column name */
  Homepage = 'homepage',
  /** column name */
  Id = 'id',
  /** column name */
  IsEnabled = 'isEnabled',
  /** column name */
  LogoUrl = 'logoUrl',
  /** column name */
  Name = 'name',
}

/** order by aggregate values of table "PaymentAppToken" */
export type PaymentAppTokenAggregateOrderBy = {
  avg?: InputMaybe<PaymentAppToken_Avg_Order_By>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PaymentAppToken_Max_Order_By>;
  min?: InputMaybe<PaymentAppToken_Min_Order_By>;
  stddev?: InputMaybe<PaymentAppToken_Stddev_Order_By>;
  stddev_pop?: InputMaybe<PaymentAppToken_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<PaymentAppToken_Stddev_Samp_Order_By>;
  sum?: InputMaybe<PaymentAppToken_Sum_Order_By>;
  var_pop?: InputMaybe<PaymentAppToken_Var_Pop_Order_By>;
  var_samp?: InputMaybe<PaymentAppToken_Var_Samp_Order_By>;
  variance?: InputMaybe<PaymentAppToken_Variance_Order_By>;
};

/** Boolean expression to filter rows from the table "PaymentAppToken". All fields are combined with a logical 'AND'. */
export type PaymentAppTokenBoolExp = {
  _and?: InputMaybe<Array<PaymentAppTokenBoolExp>>;
  _not?: InputMaybe<PaymentAppTokenBoolExp>;
  _or?: InputMaybe<Array<PaymentAppTokenBoolExp>>;
  app?: InputMaybe<PaymentAppBoolExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  token?: InputMaybe<TokenBoolExp>;
  tokenId?: InputMaybe<StringComparisonExp>;
};

/** Ordering options when selecting data from "PaymentAppToken". */
export type PaymentAppTokenOrderBy = {
  app?: InputMaybe<PaymentAppOrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  token?: InputMaybe<TokenOrderBy>;
  tokenId?: InputMaybe<OrderBy>;
};

/** select columns of table "PaymentAppToken" */
export enum PaymentAppTokenSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  TokenId = 'tokenId',
}

/** order by avg() on columns of table "PaymentAppToken" */
export type PaymentAppToken_Avg_Order_By = {
  id?: InputMaybe<OrderBy>;
};

/** order by max() on columns of table "PaymentAppToken" */
export type PaymentAppToken_Max_Order_By = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  tokenId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "PaymentAppToken" */
export type PaymentAppToken_Min_Order_By = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  tokenId?: InputMaybe<OrderBy>;
};

/** order by stddev() on columns of table "PaymentAppToken" */
export type PaymentAppToken_Stddev_Order_By = {
  id?: InputMaybe<OrderBy>;
};

/** order by stddev_pop() on columns of table "PaymentAppToken" */
export type PaymentAppToken_Stddev_Pop_Order_By = {
  id?: InputMaybe<OrderBy>;
};

/** order by stddev_samp() on columns of table "PaymentAppToken" */
export type PaymentAppToken_Stddev_Samp_Order_By = {
  id?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "PaymentAppToken" */
export type PaymentAppToken_StreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: PaymentAppToken_StreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type PaymentAppToken_StreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  tokenId?: InputMaybe<Scalars['String']>;
};

/** order by sum() on columns of table "PaymentAppToken" */
export type PaymentAppToken_Sum_Order_By = {
  id?: InputMaybe<OrderBy>;
};

/** order by var_pop() on columns of table "PaymentAppToken" */
export type PaymentAppToken_Var_Pop_Order_By = {
  id?: InputMaybe<OrderBy>;
};

/** order by var_samp() on columns of table "PaymentAppToken" */
export type PaymentAppToken_Var_Samp_Order_By = {
  id?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "PaymentAppToken" */
export type PaymentAppToken_Variance_Order_By = {
  id?: InputMaybe<OrderBy>;
};

/** order by max() on columns of table "PaymentApp" */
export type PaymentApp_Max_Order_By = {
  accountId?: InputMaybe<OrderBy>;
  homepage?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  logoUrl?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "PaymentApp" */
export type PaymentApp_Min_Order_By = {
  accountId?: InputMaybe<OrderBy>;
  homepage?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  logoUrl?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

export type PostPaymentInput = {
  chainId: Scalars['numeric'];
  txHash: Scalars['String'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** order by aggregate values of table "Token" */
export type TokenAggregateOrderBy = {
  avg?: InputMaybe<Token_Avg_Order_By>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<Token_Max_Order_By>;
  min?: InputMaybe<Token_Min_Order_By>;
  stddev?: InputMaybe<Token_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Token_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Token_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Token_Sum_Order_By>;
  var_pop?: InputMaybe<Token_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Token_Var_Samp_Order_By>;
  variance?: InputMaybe<Token_Variance_Order_By>;
};

/** Boolean expression to filter rows from the table "Token". All fields are combined with a logical 'AND'. */
export type TokenBoolExp = {
  _and?: InputMaybe<Array<TokenBoolExp>>;
  _not?: InputMaybe<TokenBoolExp>;
  _or?: InputMaybe<Array<TokenBoolExp>>;
  chain?: InputMaybe<ChainBoolExp>;
  chainId?: InputMaybe<IntComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  currency?: InputMaybe<CurrencyBoolExp>;
  currencyId?: InputMaybe<StringComparisonExp>;
  decimals?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  isEnable?: InputMaybe<BooleanComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** Ordering options when selecting data from "Token". */
export type TokenOrderBy = {
  chain?: InputMaybe<ChainOrderBy>;
  chainId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  currency?: InputMaybe<CurrencyOrderBy>;
  currencyId?: InputMaybe<OrderBy>;
  decimals?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  isEnable?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** select columns of table "Token" */
export enum TokenSelectColumn {
  /** column name */
  ChainId = 'chainId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CurrencyId = 'currencyId',
  /** column name */
  Decimals = 'decimals',
  /** column name */
  Id = 'id',
  /** column name */
  IsEnable = 'isEnable',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** order by avg() on columns of table "Token" */
export type Token_Avg_Order_By = {
  chainId?: InputMaybe<OrderBy>;
  decimals?: InputMaybe<OrderBy>;
};

/** order by max() on columns of table "Token" */
export type Token_Max_Order_By = {
  chainId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  currencyId?: InputMaybe<OrderBy>;
  decimals?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "Token" */
export type Token_Min_Order_By = {
  chainId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  currencyId?: InputMaybe<OrderBy>;
  decimals?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** order by stddev() on columns of table "Token" */
export type Token_Stddev_Order_By = {
  chainId?: InputMaybe<OrderBy>;
  decimals?: InputMaybe<OrderBy>;
};

/** order by stddev_pop() on columns of table "Token" */
export type Token_Stddev_Pop_Order_By = {
  chainId?: InputMaybe<OrderBy>;
  decimals?: InputMaybe<OrderBy>;
};

/** order by stddev_samp() on columns of table "Token" */
export type Token_Stddev_Samp_Order_By = {
  chainId?: InputMaybe<OrderBy>;
  decimals?: InputMaybe<OrderBy>;
};

/** order by sum() on columns of table "Token" */
export type Token_Sum_Order_By = {
  chainId?: InputMaybe<OrderBy>;
  decimals?: InputMaybe<OrderBy>;
};

/** order by var_pop() on columns of table "Token" */
export type Token_Var_Pop_Order_By = {
  chainId?: InputMaybe<OrderBy>;
  decimals?: InputMaybe<OrderBy>;
};

/** order by var_samp() on columns of table "Token" */
export type Token_Var_Samp_Order_By = {
  chainId?: InputMaybe<OrderBy>;
  decimals?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "Token" */
export type Token_Variance_Order_By = {
  chainId?: InputMaybe<OrderBy>;
  decimals?: InputMaybe<OrderBy>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type UuidComparisonExp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _isNull?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type GetPaymentQueryVariables = Exact<{
  id: Scalars['String'];
}>;

export type GetPaymentQuery = {
  __typename?: 'query_root';
  paymentByPk?:
    | {
        __typename?: 'Payment';
        id: string;
        status?: string | null | undefined;
        receiverAddress: string;
        fiatPrice?: number | null | undefined;
        fiatCurrencyId?: string | null | undefined;
        cryptoPrice?: number | null | undefined;
        cryptoTokenId?: string | null | undefined;
        isFiatSource: boolean;
        transactionId?: string | null | undefined;
        txHash?: string | null | undefined;
        app: {
          __typename?: 'PaymentApp';
          logoUrl?: string | null | undefined;
          name?: string | null | undefined;
          tokens: Array<{
            __typename?: 'PaymentAppToken';
            token: {
              __typename?: 'Token';
              currencyId: string;
              decimals: number;
              chain: {__typename?: 'Chain'; name: string};
              currency: {
                __typename?: 'Currency';
                priceUSD?: number | null | undefined;
                name: string;
              };
            };
          }>;
        };
        fiatCurrency?:
          | {
              __typename?: 'Currency';
              id: string;
              name: string;
              priceUSD?: number | null | undefined;
            }
          | null
          | undefined;
        token?:
          | {
              __typename?: 'Token';
              id: string;
              currency: {
                __typename?: 'Currency';
                name: string;
                priceUSD?: number | null | undefined;
                id: string;
              };
              chain: {
                __typename?: 'Chain';
                name: string;
                id: number;
                isTestnet: boolean;
              };
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export const GetPaymentDocument = gql`
  query getPayment($id: String!) {
    paymentByPk(id: $id) {
      id
      app {
        logoUrl
        name
        tokens {
          token {
            currencyId
            chain {
              name
            }
            currency {
              priceUSD
              name
            }
            decimals
          }
        }
      }
      status
      receiverAddress
      fiatPrice
      fiatCurrency {
        id
        name
        priceUSD
      }
      token {
        id
        currency {
          name
          priceUSD
          id
        }
        chain {
          name
          id
          isTestnet
        }
      }
      fiatCurrencyId
      cryptoPrice
      cryptoTokenId
      isFiatSource
      transactionId
      txHash
    }
  }
`;

export function useGetPaymentQuery(
  options: Omit<Urql.UseQueryArgs<GetPaymentQueryVariables>, 'query'>
) {
  return Urql.useQuery<GetPaymentQuery>({
    query: GetPaymentDocument,
    ...options,
  });
}
