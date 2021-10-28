import React from "react"
import MovieCard from "./MovieCard"
import { List } from "antd"
import { MovieListParam } from "../models/movies"

const MovieList = ({ movies }: MovieListParam) => (
  <List
    grid={{
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 4,
      lg: 4,
      xl: 5,
      xxl: 6
    }}
    dataSource={movies}
    renderItem={(item) => (
      <List.Item>
        <MovieCard movie={item} />
      </List.Item>
    )}
  />
)

export default MovieList
