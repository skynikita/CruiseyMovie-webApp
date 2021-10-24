import { gql } from "@apollo/client"

interface SearchPeople {
  id: number;
  name: string;
  workedOn:{
    __typename: string;
  id: number;
  title: string;
  releaseDate: Date;
  poster:{
    small: string;
  }

}
}

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
