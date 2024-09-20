import React from "react"
import Rating from "./rating"

interface RatingProps {
    rating: number;
  }

export default function CtaContainer ({rating}: RatingProps) {
    return (
        <div>
            <a href=""></a>
            <Rating rating={rating}  />
        </div>
    )
}