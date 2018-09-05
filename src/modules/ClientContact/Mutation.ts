import { forwardTo } from 'prisma-binding'

export default {
  createClientContact: forwardTo('db'),
  updateClientContact: forwardTo('db'),
  deleteClientContact: forwardTo('db')
}
