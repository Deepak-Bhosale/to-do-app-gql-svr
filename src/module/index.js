import { mergeTypeDefs } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';
import path from 'path';

import * as user from './user';
import * as list from './list';
import * as card from './card';

const __dirname = path.dirname(__filename);

const typesArray = loadFilesSync(path.join(__dirname, "./**/*.graphql"));
export const typeDefs = mergeTypeDefs(typesArray);

export const resolvers = {
  Query: {
    ...user.Query,
    ...list.Query,
  },
  Mutation: {
    ...user.Mutation,
    ...list.Mutation,
    ...card.Mutation,
  },
  Subscription: {
    ...user.Subscription,
  },
};
