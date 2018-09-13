import { GraphQLServer } from 'graphql-yoga'
import { join } from 'path'
import { Prisma } from './generated/prisma'
import resolvers from './modules'
import { getTypes } from './utils'
import permissions from './middlewares/permissions'

const typeDefs = getTypes(join(__dirname, "./modules/**/*.graphql"))

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  middlewares: [permissions],
  resolverValidationOptions: {
    requireResolversForResolveType: false
  },
  context: req => ({
    ...req,
    db: new Prisma({
      endpoint: process.env.PRISMA_ENDPOINT, // the endpoint of the Prisma API (value set in `.env`)
      debug: true, // log all GraphQL queries & mutations sent to the Prisma API
      secret: process.env.PRISMA_SECRET, // only needed if specified in `database/prisma.yml` (value set in `.env`)
    }),
  }),
})
server.start(() => console.log(`Server is running on http://localhost:4000`))