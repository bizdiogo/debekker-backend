import { forwardTo } from 'prisma-binding'

export default {
  tax: {
    subscribe: forwardTo('db')
  }
}
