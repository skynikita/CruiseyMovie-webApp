import { gql } from "@apollo/client"

export const PEOPLE_MOVIE_QUERY = gql`
  query {
    searchPeople(query: "tom cruise") {
      id
      name
      workedOn {
        __typename
        ... on Movie {
          id
          title
          releaseDate
          poster {
            small
          }
        }
      }
    }
  }
`
