import { forwardTo } from 'prisma-binding'

export default {
  item: forwardTo('db'),
  items: forwardTo('db'),
  itemsConnection: forwardTo('db'),
}
