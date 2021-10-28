
export interface Movie {
  id: number
  title: string
  releaseDate: Date
  poster: {
    small: string
  }
}

export interface SearchMovies {
  searchMovies: Array<Movie>
}

export interface MovieAndTV extends Movie {
  __typename: string
}

export interface SearchPeople {
  searchPeople: Array<{
    id: number
    name: string
    workedOn: Array<MovieAndTV>
  }>
}

export interface MovieListParam {
  movies: Movie[]
}

export interface MovieParam {
  movie: Movie
}
