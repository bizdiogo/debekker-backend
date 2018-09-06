import { forwardTo } from 'prisma-binding'

export default {
  client: forwardTo('db'),
  clients: forwardTo('db'),
  clientsConnection: forwardTo('db'),
}
