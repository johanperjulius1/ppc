import React from "react"
import classes from "./cta-container.module.css"


interface CtaProps {
    className?: string
  }

export default function CtaContainer ({rating, className}: CtaProps) {
    return (
        <div className={className}>
            <a href="">Hello</a>
        </div>
    )
}