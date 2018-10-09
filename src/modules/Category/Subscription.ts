import { forwardTo } from 'prisma-binding'

export default {
  category: {
    subscribe: forwardTo('db')
  }
}
