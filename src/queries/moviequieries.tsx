import React from 'react';
import {  gql } from '@apollo/client';

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
