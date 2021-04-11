import React from "react";
import StarsRating from "stars-rating";
import ReactStars from "react-rating-stars-component";

function Rating({ setRate }) {
  const ratingChanged = (value) => {
    setRate(value);
  };
  return (
    
    <div>
      <ReactStars
        count={5}
        onChange={ratingChanged}
        size={24}
        activeColor="#ffd700"
        value={1}
      />
    </div>
  );
}

export default Rating;
