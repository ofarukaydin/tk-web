import { devtoolsExchange } from "@urql/devtools";
import { Cache, QueryInput, cacheExchange } from "@urql/exchange-graphcache";
import { dedupExchange, fetchExchange, Exchange } from "urql";
import { getToken } from "util/auth";
import { LoginMutation, MeQuery, MeDocument } from "generated/graphql";
import Router from "next/router";
import { pipe, tap } from "wonka";
import { withUrqlClient, NextUrqlClientConfig } from "next-urql";

const errorExchange: Exchange = ({ forward }) => (ops$) => {
  return pipe(
    forward(ops$),
    tap(({ error }) => {
      if (
        error?.message.includes("Could not invoke operation") &&
        !error.message.includes("getuserdetails")
      ) {
        Router.replace("/login");
      }
    })
  );
};

export const createUrqlClient: NextUrqlClientConfig = (ssrExchange, ctx) => {
  return {
    url: "http://localhost:4000/graphql",
    exchanges: [
      dedupExchange,
      cacheExchange({
        updates: {
          Mutation: {
            login: (result, args, cache, info) => {
              betterUpdateQuery<LoginMutation, MeQuery>(
                cache,
                {
                  query: MeDocument,
                },
                result,
                (result, query) => {
                  if (!result.postApiV1AuthenticationValidateuser?.result) {
                    return query;
                  } else {
                    const me: MeQuery = {
                      getApiV1AuthenticationGetuserdetails: {
                        response: {
                          ...result.postApiV1AuthenticationValidateuser
                            .response,
                        },
                      },
                    } as MeQuery;

                    return me;
                  }
                }
              );
            },
          },
        },
      }),
      errorExchange,
      ssrExchange,
      fetchExchange,
      devtoolsExchange,
    ],
    fetchOptions: () => {
      const token = getToken();
      return {
        headers: {
          Authorization: ctx
            ? `Bearer ${ctx?.req?.headers?.Authorization ?? ""}`
            : token ?? "",
        },
      };
    },
  };
};

const betterUpdateQuery = <Result, Query>(
  cache: Cache,
  qi: QueryInput,
  result: any,
  fn: (r: Result, q: Query) => Query
) => {
  return cache.updateQuery(qi, (data) => fn(result, data as any) as any);
};

export const withUrql = withUrqlClient(createUrqlClient);
export const withUrqlSsr = withUrqlClient(createUrqlClient, { ssr: true });
