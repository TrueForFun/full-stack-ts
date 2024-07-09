import queryTwitterResolvers from './resolvers/Query';
import { Resolvers } from './resolvers-types.generated';
import Db, { DbTweet, DbUser } from './db';
import tweetTwitterResolver from './resolvers/Tweet';
import userTwitterResolver from './resolvers/User';
import mutationTwitterResolver from './resolvers/Mutation';
import TwitterTrendResolver from './resolvers/Trend';
import trendTwitterResolver from './resolvers/Trend';

export interface TwitterResolverContext {
  db: Db;
  dbTweetCache: Record<string, DbTweet>;
  dbUserCache: Record<string, DbUser>;
  dbTweetToFavoriteCountMap: Record<string, number>;
}

const resolvers: Resolvers<TwitterResolverContext> = {
  Query: queryTwitterResolvers,
  Mutation: mutationTwitterResolver,
  Tweet: tweetTwitterResolver,
  User: userTwitterResolver,
  Trend: trendTwitterResolver,
};
export default resolvers;
