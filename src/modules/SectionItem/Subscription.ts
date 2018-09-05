import { forwardTo } from 'prisma-binding'

export default {
  sectionItem:  {
    subscribe: forwardTo('db')
  }
}
