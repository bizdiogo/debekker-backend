import { forwardTo } from 'prisma-binding'

export default {
  budgetLine:  {
    subscribe: forwardTo('db')
  }
}
