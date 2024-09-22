import React from "react"
import Rating from "./rating"

interface RatingProps {
    rating: number
    className?: string
  }

export default function CtaContainer ({rating, className}: RatingProps) {
    return (
        <div className={className}>
            <a href=""></a>
            <Rating rating={rating}  />
        </div>
    )
}