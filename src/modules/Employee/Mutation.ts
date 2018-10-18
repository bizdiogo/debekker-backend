import { forwardTo } from 'prisma-binding'
import { Context, clearEmpties } from '../../utils'

export default {
  createEmployee: forwardTo('db'),
  updateEmployee: async (
    parent,
    { where: { id }, data: { ...args } },
    ctx: Context,
    info
  ) =>
    ctx.db.mutation.updateEmployee(
      { where: { id }, data: clearEmpties(args) },
      info
    ),
  deleteEmployee: forwardTo('db')
}
