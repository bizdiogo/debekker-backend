import { forwardTo } from 'prisma-binding'

export default {
  clientContact: forwardTo('db'),
  clientContacts: forwardTo('db'),
}
