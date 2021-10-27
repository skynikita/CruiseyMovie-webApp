import React, { useState } from "react"
import { PEOPLE_MOVIE_QUERY } from "../queries/peopleQueries"
import { useQuery } from "@apollo/client"
import MovieList from "./MovieList"
import Loading from "./Loading"
import { SearchPeople } from "../models/movies"

const MoviePage = () => {
  const { loading, error, data } = useQuery<SearchPeople>(PEOPLE_MOVIE_QUERY)

  if (error) {
    return null
  }
  if (loading) {
    return <Loading />
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center"
        }}
      ></div>

      {data && (
        <MovieList
          movies={data.searchPeople[0].workedOn.filter(
            (item) => item.__typename === "Movie"
          )}
        />
      )}
    </>
  )
}

export default MoviePage
