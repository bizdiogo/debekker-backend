import { forwardTo } from 'prisma-binding'

export default {
  createJob: forwardTo('db'),
  updateJob: forwardTo('db'),
  deleteJob: forwardTo('db')
}
