import { forwardTo } from 'prisma-binding'

export default {
  placeContact: forwardTo('db'),
  placeContacts: forwardTo('db'),
  placeContactsConnection: forwardTo('db'),
}
