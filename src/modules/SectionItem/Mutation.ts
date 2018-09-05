import { forwardTo } from 'prisma-binding'

export default {
  createSectionItem: forwardTo('db'),
  updateSectionItem: forwardTo('db'),
  deleteSectionItem: forwardTo('db')
}
