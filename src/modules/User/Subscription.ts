import { forwardTo } from 'prisma-binding'

export default {
  user:  {
    subscribe: forwardTo('db')
  }
}
