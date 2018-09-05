import { forwardTo } from 'prisma-binding'

export default {
  event:  {
    subscribe: forwardTo('db')
  }
}
