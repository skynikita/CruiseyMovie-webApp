import React from "react"
import { Card } from "antd"
import {Movie} from "./MoviePage";
// @ts-ignore
import Noimage from "../assets/Noimage.png"

const { Meta } = Card

interface MovieParam {
  movie: Movie
}

const MovieCard = ( param : MovieParam) => {
  return param.movie.poster ? (
    <Card
      hoverable
      style={{ margin: 20, width: 280 }}
      cover={<img src={param.movie.poster.small} alt={param.movie.title} />}
    >
      <Meta
        style={{ fontSize: 10 }}
        title={param.movie.title}
        description={param.movie.releaseDate ? param.movie.releaseDate : "unknown"}
      />
    </Card>
  ) : (
    <Card
      hoverable
      style={{ margin: 20, width: 280 }}
      cover={<img src={Noimage} alt={param.movie.title} />}
    >
      <Meta
        style={{ fontSize: 10 }}
        title={param.movie.title}
        description={param.movie.releaseDate ? param.movie.releaseDate : "unknown"}
      />
    </Card>
  )
}

export default MovieCard
