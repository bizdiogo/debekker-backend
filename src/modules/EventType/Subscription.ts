import { forwardTo } from 'prisma-binding'

export default {
  eventType:  {
    subscribe: forwardTo('db')
  }
}
