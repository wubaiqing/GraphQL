import "reflect-metadata";
import * as Express from "express";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server-express";

const bootstrap = async () => {
  const schema = await buildSchema({
    resolvers: [__dirname + "/resolvers/**/*.ts"]
  });

  const apolloServer = new ApolloServer({ schema });
  const app = Express();

  apolloServer.applyMiddleware({ app });
  app.listen(4000, () => {
    console.log("server started on http://localhost:4000/graphql");
  });
};

bootstrap();
