import { forwardTo } from 'prisma-binding'
import { Context, clearEmpties } from '../../utils'

export default {
  createSectionItem: forwardTo('db'),
  updateSectionItem: async (
    parent,
    { where: { id }, data: { ...args } },
    ctx: Context,
    info
  ) =>
    ctx.db.mutation.updateSectionItem(
      { where: { id }, data: clearEmpties(args) },
      info
    ),
  deleteSectionItem: forwardTo('db')
}
