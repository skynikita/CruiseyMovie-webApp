import React, { useState } from "react"
import { useQuery } from "@apollo/client"
import MovieList from "./MovieList"
import Loading from "./Loading"
import { Input } from "antd"
import { GET_MOVIES_QUERY } from "../queries/moviequieries"
import { SearchMovies } from "../models/movies"

const { Search } = Input

const SearchMovie = () => {
  const [isSearch, setIsSearch] = useState(false)

  const onSearch = (input: string) => {
    input &&
      refetch({
        movieName: input
      })
    setIsSearch(true)
  }

  const {
    loading: loadingBySearch,
    error: errorBySearch,
    data: dataBySearch,
    refetch
  } = useQuery<SearchMovies>(GET_MOVIES_QUERY, {
    variables: { movieName: "The Last Samurai" }
  })

  if (errorBySearch) {
    return null
  }
  if (loadingBySearch) {
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
        <Search
          style={{ width: "30%", margin: 15 }}
          placeholder='Search your movies here'
          enterButton
          onSearch={onSearch}
        />
      </div>

      {isSearch && dataBySearch && (
        <MovieList movies={dataBySearch.searchMovies} />
      )}
    </>
  )
}

export default SearchMovie
