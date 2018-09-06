import { forwardTo } from 'prisma-binding'

export default {
  employee: forwardTo('db'),
  employees: forwardTo('db'),
  employeesConnection: forwardTo('db'),
}
