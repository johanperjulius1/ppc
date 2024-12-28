import React from "react"
import classes from "./cta-container.module.css"


interface CtaProps {
    className?: string
    affiliateLink: string
    termsLink: string
}

export default function CtaContainer({ className, affiliateLink, termsLink }: CtaProps) {
    return (
        <div className={className}>
            <a className={classes["play-now"]} href={affiliateLink} target="_blank" rel="noopener noreferrer">Spela nu</a>
            <a className={classes["review"]} href={termsLink} target="_blank" rel="noopener noreferrer">Läs recension</a>
        </div>
    )
}