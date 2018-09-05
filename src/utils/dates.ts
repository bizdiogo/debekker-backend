import * as moment from 'moment'

export const isBefore = (startTime, endTime) => {
  return !!startTime && !!endTime ? moment(startTime).isBefore(moment(endTime)) : false
}