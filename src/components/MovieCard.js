import React from "react";
import { Card, Button } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import Data from './Data'
function MovieCard({ movie }) {
  return (
    <div>
         <Link to={`/MoviePage/${movie.id}`}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.Image} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <Button variant="primary">Trailer</Button>
        </Card.Body>
        <Card.Footer>
          <ReactStars
            count={5}
            edit={false}
            size={24}
            activeColor="#ffd700"
            value={movie.rate}
          />
        </Card.Footer>
       
      </Card></Link>
    </div>
  );
}

export default MovieCard;
