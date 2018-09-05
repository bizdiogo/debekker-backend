import { forwardTo } from 'prisma-binding'

export default {
  stuff: forwardTo('db'),
  stuffs: forwardTo('db'),
}
