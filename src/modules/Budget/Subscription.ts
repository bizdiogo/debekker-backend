import { forwardTo } from 'prisma-binding'

export default {
  budget:  {
    subscribe: forwardTo('db')
  }
}
