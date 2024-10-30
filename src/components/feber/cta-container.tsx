import React from "react"
import classes from "./cta-container.module.css"


interface CtaProps {
    className?: string
}

export default function CtaContainer({ className }: CtaProps) {
    return (
        <div className={className}>
            <a href="">Spela nu</a>
        </div>
    )
}