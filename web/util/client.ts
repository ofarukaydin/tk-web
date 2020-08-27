/* eslint-disable @typescript-eslint/naming-convention */
import { devtoolsExchange } from '@urql/devtools';
import { Cache, QueryInput, cacheExchange } from '@urql/exchange-graphcache';
import { dedupExchange, fetchExchange, Exchange } from 'urql';
import { getToken } from 'util/auth';
import { LoginMutation, MeQuery, MeDocument } from 'generated/graphql';
import Router from 'next/router';
import { pipe, tap } from 'wonka';
import { withUrqlClient, NextUrqlClientConfig } from 'next-urql';
import { isServer } from 'util/is-server';

const errorExchange: Exchange = ({ forward }) => (ops$) => {
  return pipe(
    forward(ops$),
    tap(({ error }) => {
      if (
        error?.message.includes('Could not invoke operation') &&
        !error.message.includes('getuserdetails')
      ) {
        Router.replace('/login');
      }
    }),
  );
};

export const createUrqlClient: NextUrqlClientConfig = (ssrExchange, ctx) => {
  return {
    url: 'http://localhost:4000/graphql',
    exchanges: [
      devtoolsExchange,
      dedupExchange,
      cacheExchange({
        updates: {
          Mutation: {
            postApiV1AuthenticationValidateuser: (result, args, cache, info) => {
              betterUpdateQuery<LoginMutation, MeQuery>(
                cache,
                {
                  query: MeDocument,
                },
                result,
                (_result, query) => {
                  if (_result?.postApiV1AuthenticationValidateuser?.response) {
                    const {
                      token,
                      tokenExpireDate,
                      refreshToken,
                      __typename,
                      ...meResponse
                    } = _result.postApiV1AuthenticationValidateuser.response;
                    const me: MeQuery = {
                      getApiV1AuthenticationGetuserdetails: {
                        response: {
                          ...meResponse,
                        },
                      },
                    };

                    return me;
                  }

                  return query;
                },
              );
            },
          },
        },
      }),
      errorExchange,
      ssrExchange,
      fetchExchange,
    ],
    fetchOptions: () => {
      const token = getToken();

      return {
        headers: {
          Authorization: `Bearer ${isServer() ? ctx?.req?.headers?.Authorization : token}`,
        },
      };
    },
  };
};

const betterUpdateQuery = <Result, Query>(
  cache: Cache,
  qi: QueryInput,
  result: any,
  fn: (r: Result, q: Query) => Query,
): void => {
  return cache.updateQuery(qi, (data) => fn(result, data as any) as any);
};

export const withUrql = withUrqlClient(createUrqlClient);
export const withUrqlSsr = withUrqlClient(createUrqlClient, { ssr: true });
