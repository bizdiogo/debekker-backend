import * as moment from 'moment'
import { StatusOffer } from '../enums/status'

const cloneBudgetLines = (budgetLines) => {
  if (!!budgetLines && !!budgetLines.length) {
    return budgetLines.map(budget => {
      budget.tax = {
        connect: {
          id: !!budget.tax ? budget.tax.id : undefined
        }
      }

      delete budget.id
      return budget
    });
  }

  return []
}

const cloneSectionItems = (sectionItems) => {
  if (!!sectionItems && !!sectionItems.length) {
    return sectionItems.map(item => {
      if (!!item.items.length) {
        item.items = {
          connect: [
            item.plats.map(plat => ({id: plat.id}))
          ]
        }
      }

      delete item.id
      return item
    });
  }

  return []
}

const cloneEmployeeEstimations = (employeeEstimations) => {
  if (!!employeeEstimations && !!employeeEstimations.length) {
    return employeeEstimations.map(employee => {
      employee.job = {
        connect: {
          id: !!employee.job ? employee.job.id : undefined
        }
      }

      delete employee.id
      return employee
    });
  }

  return []
}

const getConnect = (arg) => ({
  connect: {
    id: arg
  }
})

export default (offer) => {
  return {
    budgetLines: {
      create: cloneBudgetLines(offer.budgetLines)
    },
    sectionItems: {
      create: cloneSectionItems(offer.sectionItems)
    },
    employeeEstimations: {
      create: cloneEmployeeEstimations(offer.employeeEstimations)
    },
    client: getConnect(!!offer.client ? offer.client.id : undefined),
    clientContact: getConnect(!!offer.clientContact ? offer.clientContact.id : undefined),
    place: getConnect(!!offer.place ? offer.place.id : undefined),
    language: getConnect(!!offer.language ? offer.language.id : undefined),
    eventType: getConnect(!!offer.eventType ? offer.eventType.id : undefined),
    version: !!offer.version ? offer.version : 1,
    name: !!offer.name ? offer.name : undefined,
    address: !!offer.address ? offer.address : undefined,
    city: !!offer.city ? offer.city : undefined,
    postalCode: !!offer.postalCode ? offer.postalCode : undefined,
    startTime: !!offer.startTime ? offer.startTime : moment(),
    endTime: !!offer.endTime ? offer.endTime : moment(),
    gmtOffset: !!offer.gmtOffset ? offer.gmtOffset : moment().format('Z'),
    maxPersons: !!offer.maxPersons ? offer.maxPersons : 0,
    minPersons: !!offer.minPersons ? offer.minPersons : 0,
    status: StatusOffer.Pending,
  }
}
