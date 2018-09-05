import { forwardTo } from 'prisma-binding'

export default {
  tax: forwardTo('db'),
  taxes: forwardTo('db'),
}
