import React from "react"
import { Card } from "antd"
import { MovieParam } from "../models/movies"
// @ts-ignore
import Noimage from "../assets/Noimage.png"

const { Meta } = Card

const MovieCard = ({ movie }: MovieParam) => {
  return movie.poster ? (
    <Card
      hoverable
      style={{ margin: 20, width: 280 }}
      cover={<img src={movie.poster.small} alt={movie.title} />}
    >
      <Meta
        style={{ fontSize: 10 }}
        title={movie.title}
        description={movie.releaseDate ? movie.releaseDate : "unknown"}
      />
    </Card>
  ) : (
      <Card
        hoverable
        style={{ margin: 20, width: 280 }}
        cover={<img src={Noimage} alt={movie.title} />}
      >
        <Meta
          style={{ fontSize: 10 }}
          title={movie.title}
          description={movie.releaseDate ? movie.releaseDate : "unknown"}
        />
      </Card>
    )
}

export default MovieCard
