import gql from 'graphql-tag'

export default gql`
  query {
    id
    name
    quantity
    events {
      startTime
      endTime
    }
  }
`