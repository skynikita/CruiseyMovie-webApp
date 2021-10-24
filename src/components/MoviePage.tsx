import React, { useState } from "react"
import { PEOPLE_MOVIE_QUERY } from "../queries/peopleQueries"
import { useQuery } from "@apollo/client"
import MovieList from "./MovieList"
import Loading from "./Loading"
import { Button, Input } from "antd"
import {GET_MOVIES_QUERY} from "../queries/moviequieries";

const { Search } = Input

interface SearchMovies {
  searchMovies: Array<Movie>
};

export interface Movie {
  id: number;
  title: string;
  releaseDate:Date;
  poster: {
    small: string;
  }
}

interface MovieAndTV extends Movie{
  __typename: string;
}


interface SearchPeople {
  searchPeople: Array<{
    id: number;
    name: string;
    workedOn: Array<MovieAndTV>
  }>
};

const MoviePage = () => {
  const [isSearch, setIsSearch] = useState(false)

  const onSearch = (input: string) => {
    input &&
    refetch({
      movieName: input
    })
    setIsSearch(true)
  }

  const onClick = () => {
    setIsSearch(false)
  }

  const {
    loading: loadingBySearch,
    error: errorBySearch,
    data: dataBySearch,
    refetch
  } = useQuery<SearchMovies>(GET_MOVIES_QUERY, {
    variables: { movieName: "The Last Samurai" }
  })

  const { loading, error, data } = useQuery<SearchPeople>(PEOPLE_MOVIE_QUERY)

  if (error || errorBySearch) {
    return null
  }
  if (loading || loadingBySearch) {
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
      >
        <Button style={{ margin: 15 }} onClick={onClick} disabled={!isSearch}>
          Back to Tom Cruise's movies
        </Button>
        <Search
          style={{ width: "30%", margin: 15 }}
          placeholder='Search your movies here'
          enterButton
          onSearch={onSearch}
        />
      </div>

      {isSearch ? (
        dataBySearch && <MovieList movies={dataBySearch.searchMovies} />
      ) : (
        data && <MovieList
          movies={data.searchPeople[0].workedOn.filter(
            (item) => item .__typename === "Movie"
          )}
        />
      )}
    </>
  )
}

export default MoviePage
