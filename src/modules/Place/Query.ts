import { forwardTo } from 'prisma-binding'

export default {
  place: forwardTo('db'),
  places: forwardTo('db'),
  placesConnection: forwardTo('db'),
}
