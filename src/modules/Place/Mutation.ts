import { forwardTo } from 'prisma-binding'

export default {
  createPlace: forwardTo('db'),
  updatePlace: forwardTo('db'),
  deletePlace: forwardTo('db')
}
