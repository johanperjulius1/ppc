import classes from "./bonus-container.module.css"

interface BonusProps {
    className?: string
}

export default function BonusContainer({ className }: BonusProps) {
    return (
        <>
            <h3 className={classes.h3}>LeoVegas</h3>
            <div className={classes.bonus}>2500 bonus</div>
            <div className={classes.freespins}>Casino och betting</div>
            <div className={classes["bonus-wagering"]}>
                <div className={classes["bonus-turnover"]}>
                    <svg width="20" height="20" stroke="currentColor" stroke-width="1" className="lucide-icon lucide lucide-gauge-circle " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M15.6 2.7a10 10 0 1 0 5.7 5.7"></path><circle cx="12" cy="12" r="2"></circle><path d="M13.4 10.6 19 5"></path></svg>
                    Omsättningskrav på bonus:
                </div>
                <div className={classes["freespins-turnover"]}>
                    <svg width="20" height="20" stroke="currentColor" stroke-width="1" className="lucide-icon lucide lucide-badge-dollar-sign " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 18V6"></path></svg>
                    Omsättningskrav på freespins:
                </div>
            </div>
        </>
    )
}
