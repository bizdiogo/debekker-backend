import { forwardTo } from 'prisma-binding'

export default {
  createEmployeeEstimation: forwardTo('db'),
  updateEmployeeEstimation: forwardTo('db'),
  deleteEmployeeEstimation: forwardTo('db')
}
