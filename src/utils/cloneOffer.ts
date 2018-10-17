import * as moment from 'moment'
import { StatusOffer } from '../enums/status'

const cloneBudgetLines = budgetLines => {
  if (!!budgetLines && !!budgetLines.length) {
    return budgetLines.map(budget => {
      budget.tax = {
        connect: {
          id: !!budget.tax ? budget.tax.id : undefined
        }
      }

      delete budget.id
      return budget
    })
  }

  return []
}

const cloneSectionItems = sectionItems => {
  if (!!sectionItems && !!sectionItems.length) {
    return sectionItems.map(item => {
      if (!!item.items.length) {
        item.items = {
          connect: [item.plats.map(plat => ({ id: plat.id }))]
        }
      }

      delete item.id
      return item
    })
  }

  return []
}

const cloneEmployeeEstimations = employeeEstimations => {
  if (!!employeeEstimations && !!employeeEstimations.length) {
    return employeeEstimations.map(employee => {
      employee.job = {
        connect: {
          id: !!employee.job ? employee.job.id : undefined
        }
      }

      delete employee.id
      return employee
    })
  }

  return []
}

const getConnect = arg => ({
  connect: {
    id: arg
  }
})

export default offer => {
  const clone = {
    budgetLines: {
      create: cloneBudgetLines(offer.budgetLines)
    },
    sectionItems: {
      create: cloneSectionItems(offer.sectionItems)
    },
    employeeEstimations: {
      create: cloneEmployeeEstimations(offer.employeeEstimations)
    },
    client: !!offer.client ? getConnect(offer.client.id) : undefined,
    clientContact: !!offer.clientContact
      ? getConnect(offer.clientContact.id)
      : undefined,
    place: !!offer.place ? getConnect(offer.place.id) : undefined,
    eventType: !!offer.eventType ? getConnect(offer.eventType.id) : undefined,
    language: !!offer.language ? offer.language : undefined,
    name: !!offer.name ? offer.name : undefined,
    address: !!offer.address ? offer.address : undefined,
    city: !!offer.city ? offer.city : undefined,
    postalCode: !!offer.postalCode ? offer.postalCode : undefined,
    startTime: !!offer.startTime ? offer.startTime : undefined,
    endTime: !!offer.endTime ? offer.endTime : undefined,
    gmtOffset: !!offer.gmtOffset ? offer.gmtOffset : undefined,
    maxPersons: !!offer.maxPersons ? offer.maxPersons : 0,
    minPersons: !!offer.minPersons ? offer.minPersons : 0,
    rev: !!offer.rev ? offer.rev : undefined,
    version: !!offer.version ? offer.version : 1,
    status: StatusOffer.Pending,
    id: undefined
  }

  if (!!clone.rev) {
    clone.version = clone.version + 1
  } else {
    clone.version = 1
  }

  return clone
}
