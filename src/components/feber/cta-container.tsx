import React from "react"
import Rating from "./rating"
import classes from "./cta-container.module.css"


interface RatingProps {
    rating: number
    className?: string
  }

export default function CtaContainer ({rating, className}: RatingProps) {
    return (
        <div className={className}>
            <a href="">Hello</a>
            <Rating rating={rating}  />
        </div>
    )
}