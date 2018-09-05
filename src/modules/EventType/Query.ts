import { forwardTo } from 'prisma-binding'

export default {
  eventType: forwardTo('db'),
  eventTypes: forwardTo('db'),
}
