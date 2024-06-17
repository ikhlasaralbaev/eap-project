// src/components/StarRating.tsx
import React from "react";
import Star from "../star/star";

interface StarRatingProps {
  rating: number;
  totalStars?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, totalStars = 5 }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex">
        {[...Array(totalStars)].map((_, index) => (
          <Star key={index} filled={index < rating} />
        ))}
      </div>
    </div>
  );
};

export default StarRating;
