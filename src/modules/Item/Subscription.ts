import { forwardTo } from 'prisma-binding'

export default {
  item: {
    subscribe: forwardTo('db')
  }
}
