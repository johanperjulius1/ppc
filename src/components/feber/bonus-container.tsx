import classes from "./bonus-container.module.css"

interface BonusProps {
    className?: string
}

export default function BonusContainer({ className }: BonusProps) {
    return (
        <div className={className}>
            <h3 className={classes.h3}>LeoVegas</h3>
            <div className={classes.bonus}>2500 bonus</div>
            <div className={classes.freespins}>Casino och betting</div>
            <div className={classes["bonus-wagering"]}></div>
        </div>
    )
}