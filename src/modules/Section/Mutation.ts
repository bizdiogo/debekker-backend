import { forwardTo } from 'prisma-binding'

export default {
  createSection: forwardTo('db'),
  updateSection: forwardTo('db'),
  deleteSection: forwardTo('db')
}
