import { forwardTo } from 'prisma-binding'

export default {
  vehicle: forwardTo('db'),
  vehicles: forwardTo('db'),
}
