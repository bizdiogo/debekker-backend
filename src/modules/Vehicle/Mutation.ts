import { forwardTo } from 'prisma-binding'

export default {
  createVehicle: forwardTo('db'),
  updateVehicle: forwardTo('db'),
  deleteVehicle: forwardTo('db')
}
