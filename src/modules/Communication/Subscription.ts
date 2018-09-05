import { forwardTo } from 'prisma-binding'

export default {
  communication:  {
    subscribe: forwardTo('db')
  }
}
