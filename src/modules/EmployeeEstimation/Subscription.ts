import { forwardTo } from 'prisma-binding'

export default {
  employeeEstimation:  {
    subscribe: forwardTo('db')
  }
}
