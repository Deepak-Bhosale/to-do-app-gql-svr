import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import http from "http";
import cors from "cors";
import { typeDefs, resolvers } from "./module/index.js";
import { CardAPI, ListAPI, UserAPI } from "./datasource/index.js";

export class Server {
  constructor(config) {
    this.app = express();
    this.httpServer = http.createServer(this.app);
    this.config = config;
    this.server;
  }

  async setUpApollo() {
    this.server = new ApolloServer({
      typeDefs,
      resolvers,
      plugins: [
        ApolloServerPluginDrainHttpServer({ httpServer: this.httpServer }),
      ],
    });

    await this.server.start();

    this.app.use(
      "/graphql",
      cors(),
      express.json(),
      expressMiddleware(this.server, {
        context: async ({ req }) => {
          const Authorization = req.headers.authorization;
          return {
            dataSources: {
              userAPI: new UserAPI({ Authorization }),
              listAPI: new ListAPI({ Authorization }),
              cardAPI: new CardAPI({ Authorization }),
            },
          };
        },
      })
    );

    this.httpServer.listen(this.config.port, () => {
      console.log(
        `🚀 Server running at http://localhost:${this.config.port}/graphql`
      );
    });
  }
}
