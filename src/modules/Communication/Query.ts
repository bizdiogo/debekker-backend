import { forwardTo } from 'prisma-binding'

export default {
  communication: forwardTo('db'),
  communications: forwardTo('db'),
}
