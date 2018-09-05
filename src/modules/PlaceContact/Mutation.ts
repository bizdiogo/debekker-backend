import { forwardTo } from 'prisma-binding'

export default {
  createPlaceContact: forwardTo('db'),
  updatePlaceContact: forwardTo('db'),
  deletePlaceContact: forwardTo('db')
}
