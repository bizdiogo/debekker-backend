import { forwardTo } from 'prisma-binding'

export default {
  createCommunication: forwardTo('db'),
  updateCommunication: forwardTo('db'),
  deleteCommunication: forwardTo('db')
}
