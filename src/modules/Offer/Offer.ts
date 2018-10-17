import gql from 'graphql-tag'

export default gql`
  query {
    id
    version
    rev
    name
    maxPersons
    minPersons
    startTime
    endTime
    status
    gmtOffset
    client {
      id
    }
    clientContact {
      id
    }
    language
    eventType {
      id
    }
    place {
      id
    }
    address
    city
    postalCode
    sectionItems {
      content
      startTime
      endTime
      title
      persons
      price
      items {
        id
        categories {
          id
          name
        }
        itemTranslations {
          id
          name
          description
          internalDescription
          language
        }
      }
      h
      i
      isDraggable
      isResizable
      maxH
      maxW
      minH
      minW
      moved
      static
      type
      w
      x
      y
    }
    budgetLines {
      description
      quantity
      unitPrice
      value
      tax {
        id
      }
    }
    employeeEstimations {
      estimatedEndAt
      estimatedStartAt
      number
      pricePerHour
      total
      job {
        id
      }
    }
  }
`
