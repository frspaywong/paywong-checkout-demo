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
  numeric: number;
  timestamptz: string;
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

/** Streaming cursor of the table "Country" */
export type CountryStreamcursorinput = {
  /** Stream column input with initial value */
  initialValue: CountryStreamcursorvalueinput;
  /** cursor ordering */
  ordering?: InputMaybe<Cursorordering>;
};

/** Initial value of the column from where the streaming should start */
export type CountryStreamcursorvalueinput = {
  dialCode?: InputMaybe<Scalars['String']>;
  emoji?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to filter rows from the table "Currency". All fields are combined with a logical 'AND'. */
export type CurrencyBoolExp = {
  _and?: InputMaybe<Array<CurrencyBoolExp>>;
  _not?: InputMaybe<CurrencyBoolExp>;
  _or?: InputMaybe<Array<CurrencyBoolExp>>;
  id?: InputMaybe<StringComparisonExp>;
  isFiat?: InputMaybe<BooleanComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  priceUSD?: InputMaybe<NumericComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** Ordering options when selecting data from "Currency". */
export type CurrencyOrderBy = {
  id?: InputMaybe<OrderBy>;
  isFiat?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  priceUSD?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** select columns of table "Currency" */
export enum CurrencySelectColumn {
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

/** Streaming cursor of the table "Currency" */
export type CurrencyStreamcursorinput = {
  /** Stream column input with initial value */
  initialValue: CurrencyStreamcursorvalueinput;
  /** cursor ordering */
  ordering?: InputMaybe<Cursorordering>;
};

/** Initial value of the column from where the streaming should start */
export type CurrencyStreamcursorvalueinput = {
  id?: InputMaybe<Scalars['String']>;
  isFiat?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  priceUSD?: InputMaybe<Scalars['numeric']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** ordering argument of a cursor */
export enum Cursorordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC',
}

/** Boolean expression to filter rows from the table "Network". All fields are combined with a logical 'AND'. */
export type NetworkBoolExp = {
  _and?: InputMaybe<Array<NetworkBoolExp>>;
  _not?: InputMaybe<NetworkBoolExp>;
  _or?: InputMaybe<Array<NetworkBoolExp>>;
  chainId?: InputMaybe<NumericComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  currency?: InputMaybe<CurrencyBoolExp>;
  currencyId?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  isTestnet?: InputMaybe<BooleanComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  tokens?: InputMaybe<TokenBoolExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** Ordering options when selecting data from "Network". */
export type NetworkOrderBy = {
  chainId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  currency?: InputMaybe<CurrencyOrderBy>;
  currencyId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  isTestnet?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  tokens_aggregate?: InputMaybe<TokenAggregateOrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** select columns of table "Network" */
export enum NetworkSelectColumn {
  /** column name */
  ChainId = 'chainId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CurrencyId = 'currencyId',
  /** column name */
  Id = 'id',
  /** column name */
  IsTestnet = 'isTestnet',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** Streaming cursor of the table "Network" */
export type NetworkStreamcursorinput = {
  /** Stream column input with initial value */
  initialValue: NetworkStreamcursorvalueinput;
  /** cursor ordering */
  ordering?: InputMaybe<Cursorordering>;
};

/** Initial value of the column from where the streaming should start */
export type NetworkStreamcursorvalueinput = {
  chainId?: InputMaybe<Scalars['numeric']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  currencyId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  isTestnet?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
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
  avg?: InputMaybe<TokenAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<TokenMaxOrderBy>;
  min?: InputMaybe<TokenMinOrderBy>;
  stddev?: InputMaybe<TokenStddevOrderBy>;
  stddev_pop?: InputMaybe<TokenStddevPopOrderBy>;
  stddev_samp?: InputMaybe<TokenStddevSampOrderBy>;
  sum?: InputMaybe<TokenSumOrderBy>;
  var_pop?: InputMaybe<TokenVarPopOrderBy>;
  var_samp?: InputMaybe<TokenVarSampOrderBy>;
  variance?: InputMaybe<TokenVarianceOrderBy>;
};

/** order by avg() on columns of table "Token" */
export type TokenAvgOrderBy = {
  decimals?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "Token". All fields are combined with a logical 'AND'. */
export type TokenBoolExp = {
  _and?: InputMaybe<Array<TokenBoolExp>>;
  _not?: InputMaybe<TokenBoolExp>;
  _or?: InputMaybe<Array<TokenBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  currency?: InputMaybe<CurrencyBoolExp>;
  currencyId?: InputMaybe<StringComparisonExp>;
  decimals?: InputMaybe<NumericComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  networkId?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** order by max() on columns of table "Token" */
export type TokenMaxOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  currencyId?: InputMaybe<OrderBy>;
  decimals?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  networkId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "Token" */
export type TokenMinOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  currencyId?: InputMaybe<OrderBy>;
  decimals?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  networkId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "Token". */
export type TokenOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  currency?: InputMaybe<CurrencyOrderBy>;
  currencyId?: InputMaybe<OrderBy>;
  decimals?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  networkId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** select columns of table "Token" */
export enum TokenSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CurrencyId = 'currencyId',
  /** column name */
  Decimals = 'decimals',
  /** column name */
  Id = 'id',
  /** column name */
  NetworkId = 'networkId',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** order by stddev() on columns of table "Token" */
export type TokenStddevOrderBy = {
  decimals?: InputMaybe<OrderBy>;
};

/** order by stddev_pop() on columns of table "Token" */
export type TokenStddevPopOrderBy = {
  decimals?: InputMaybe<OrderBy>;
};

/** order by stddev_samp() on columns of table "Token" */
export type TokenStddevSampOrderBy = {
  decimals?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "Token" */
export type TokenStreamcursorinput = {
  /** Stream column input with initial value */
  initialValue: TokenStreamcursorvalueinput;
  /** cursor ordering */
  ordering?: InputMaybe<Cursorordering>;
};

/** Initial value of the column from where the streaming should start */
export type TokenStreamcursorvalueinput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  currencyId?: InputMaybe<Scalars['String']>;
  decimals?: InputMaybe<Scalars['numeric']>;
  id?: InputMaybe<Scalars['String']>;
  networkId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** order by sum() on columns of table "Token" */
export type TokenSumOrderBy = {
  decimals?: InputMaybe<OrderBy>;
};

/** order by var_pop() on columns of table "Token" */
export type TokenVarPopOrderBy = {
  decimals?: InputMaybe<OrderBy>;
};

/** order by var_samp() on columns of table "Token" */
export type TokenVarSampOrderBy = {
  decimals?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "Token" */
export type TokenVarianceOrderBy = {
  decimals?: InputMaybe<OrderBy>;
};

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'ascNullsFirst',
  /** in ascending order, nulls last */
  AscNullsLast = 'ascNullsLast',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'descNullsFirst',
  /** in descending order, nulls last */
  DescNullsLast = 'descNullsLast',
}

export type CurrencyFragment = {
  __typename?: 'Currency';
  id: string;
  isFiat: boolean;
  name: string;
  priceUSD?: number | null | undefined;
  updatedAt: string;
};

export type NetworkFragment = {
  __typename?: 'Network';
  id: string;
  currencyId: string;
  isTestnet: boolean;
  name: string;
  chainId: number;
};

export type TokenFragment = {
  __typename?: 'Token';
  id: string;
  currencyId: string;
  decimals: number;
  networkId: string;
};

export type GetNetworksQueryVariables = Exact<{[key: string]: never}>;

export type GetNetworksQuery = {
  __typename?: 'query_root';
  Network: Array<{__typename?: 'Network'} & NetworkFragment>;
};

export const CurrencyFragmentDoc = gql`
  fragment Currency on Currency {
    id
    isFiat
    name
    priceUSD
    updatedAt
  }
`;
export const NetworkFragmentDoc = gql`
  fragment Network on Network {
    id
    currencyId
    isTestnet
    name
    chainId
  }
`;
export const TokenFragmentDoc = gql`
  fragment Token on Token {
    id
    currencyId
    decimals
    networkId
  }
`;
export const GetNetworksDocument = gql`
  query getNetworks {
    Network {
      ...Network
    }
  }
  ${NetworkFragmentDoc}
`;

export function useGetNetworksQuery(
  options?: Omit<Urql.UseQueryArgs<GetNetworksQueryVariables>, 'query'>
) {
  return Urql.useQuery<GetNetworksQuery>({
    query: GetNetworksDocument,
    ...options,
  });
}
