import React from "react";
import { Button, Card, Rate } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;
// Card to display the movies title and details====================================================
const MovieCard = ({ id, posterUrl, title, description, rating }) => (
  <Card hoverable cover={<img alt="example" src={posterUrl} />}>
    <Meta title={title} description={description.slice(0, 100)} />
    <div>
      <Rate disabled defaultValue={rating} />
    </div>
    <Link to={`${id}`}>
      <Button className=" mt-4">Trailer</Button>
    </Link>
  </Card>
);
export default MovieCard;
