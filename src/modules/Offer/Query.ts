import { forwardTo } from 'prisma-binding'

export default {
  offer: forwardTo('db'),
  offers: forwardTo('db'),
}
