import { forwardTo } from 'prisma-binding'

export default {
  event: forwardTo('db'),
  events: forwardTo('db'),
}
