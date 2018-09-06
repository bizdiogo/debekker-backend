import { forwardTo } from 'prisma-binding'

export default {
  employeeEstimation: forwardTo('db'),
  employeeEstimations: forwardTo('db'),
  employeeEstimationsConnection: forwardTo('db'),
}
