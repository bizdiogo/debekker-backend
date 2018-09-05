import { forwardTo } from 'prisma-binding'

export default {
  offer:  {
    subscribe: forwardTo('db')
  }
}
