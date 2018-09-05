import { forwardTo } from 'prisma-binding'

export default {
  createEmployee: forwardTo('db'),
  updateEmployee: forwardTo('db'),
  deleteEmployee: forwardTo('db')
}
