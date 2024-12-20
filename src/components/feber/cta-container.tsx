import React from "react"
import classes from "./cta-container.module.css"


interface CtaProps {
    className?: string
}

export default function CtaContainer({ className }: CtaProps) {
    return (
        <div className={className}>
            <a className={classes["play-now"]} href="">Spela nu</a>
            <a className={classes["review"]} href="">Läs recension</a>
        </div>
    )
}