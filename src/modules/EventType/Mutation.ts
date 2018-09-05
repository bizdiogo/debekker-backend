import { forwardTo } from 'prisma-binding'

export default {
  createEventType: forwardTo('db'),
  updateEventType: forwardTo('db'),
  deleteEventType: forwardTo('db')
}
