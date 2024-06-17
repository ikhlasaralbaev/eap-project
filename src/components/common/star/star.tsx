// src/components/Star.tsx
import { StarFull, StarGray } from "assets/images";
import React from "react";

interface StarProps {
  filled: boolean;
}

const Star: React.FC<StarProps> = ({ filled }) => {
  const starSrc = filled ? StarFull : StarGray;
  return (
    <img
      src={starSrc}
      alt={filled ? "filled star" : "unfilled star"}
      className="h-[12px] w-[12px]"
    />
  );
};

export default Star;
