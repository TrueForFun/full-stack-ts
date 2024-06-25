import queryTwitterResolvers from './resolvers/Query';
import { Resolvers } from './resolvers-types.generated';
import Db, { DbTweet, DbUser } from './db';
export interface TwitterResolverContext {
  db: Db;
  dbTweetCache: Record<string, DbTweet>;
  dbUserCache: Record<string, DbUser>;
  dbTweetToFavoriteCountMap: Record<string, number>;
}

const resolvers: Resolvers<TwitterResolverContext> = {
  Query: queryTwitterResolvers,
};
export default resolvers;
