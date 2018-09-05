import { forwardTo } from 'prisma-binding'

export default {
  createClient: forwardTo('db'),
  updateClient: forwardTo('db'),
  deleteClient: forwardTo('db')
}
