import React from 'react';
import { useQuery, gql } from '@apollo/client';

interface SearchMovies {
  id: number;
  title: string;
  releaseDate:Date;
  poster: {
    small: string;
  }
}



export const GET_MOVIES_QUERY = gql`
  query($movieName: String!) {
    searchMovies(query: $movieName, page: 1) {
      id
      title
      releaseDate
      poster {
        small
      }
    }
  }
`
