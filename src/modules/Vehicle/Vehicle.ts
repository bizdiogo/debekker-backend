import gql from 'graphql-tag'

export default gql`
  query {
    id
    name
    plate
    description
    color
    year
    events {
      startTime
      endTime
    }
  }
`