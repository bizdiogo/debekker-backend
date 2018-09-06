import { forwardTo } from 'prisma-binding'

export default {
  sectionItem: forwardTo('db'),
  sectionItems: forwardTo('db'),
  sectionItemsConnection: forwardTo('db'),
}
