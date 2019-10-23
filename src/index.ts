import "reflect-metadata";
import * as Express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema, Resolver, Query } from "type-graphql";

@Resolver()
class HelloResolver {
  @Query(() => String)
  async hello() {
    return "Hello World!";
  }
}

const bootstrap = async () => {
  const schema = await buildSchema({
    resolvers: [HelloResolver]
  });

  const apolloServer = new ApolloServer({ schema });
  const app = Express();

  apolloServer.applyMiddleware({ app });
  app.listen(4000, () => {
    console.log("server started on http://localhost:4000/graphql");
  });
};

bootstrap();
