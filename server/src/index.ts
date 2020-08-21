import { ApolloServer } from "apollo-server-express";
import { findAndParseConfig } from "@graphql-mesh/config";
import { getMesh } from "@graphql-mesh/runtime";
import express from "express";
import cors from "cors";

async function main() {
  const app = express();
  app.use(cors({ origin: "http://localhost:3000", credentials: true }));
  const meshConfig = await findAndParseConfig();
  const { schema, contextBuilder } = await getMesh(meshConfig);

  const apolloServer = new ApolloServer({
    schema,
    context: contextBuilder,
  });
  apolloServer.applyMiddleware({
    app,
    cors: false,
  });
  app.listen(4000);
  console.info(`🚀 Server ready at port 4000`);
}

main().catch((err) => console.error(err));
