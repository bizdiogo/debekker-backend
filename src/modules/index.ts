import { join } from 'path'
import { fileLoader, mergeResolvers } from 'merge-graphql-schemas'

const mutations = fileLoader(join(__dirname, './**/Mutation.ts'))
const queries = fileLoader(join(__dirname, './**/Query.ts'))
const subscriptions = fileLoader(join(__dirname, './**/Subscription.ts'))

export default {
  Query: mergeResolvers(queries),
  Mutation: mergeResolvers(mutations),
  Subscription: mergeResolvers(subscriptions)
}
