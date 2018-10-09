import { forwardTo } from 'prisma-binding'

export default {
  category: forwardTo('db'),
  categories: forwardTo('db'),
  categoriesConnection: forwardTo('db')
}
