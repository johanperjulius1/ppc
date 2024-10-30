interface PerksProps {
    className?: string
    perks: {
        perks1?: string | number
        perks2?: string | number
        perks3?: string | number
        perks4?: string | number
        perks5?: string | number
        perks6?: string | number
    }
}

export default function PerksContainer({ className, perks }: PerksProps) {
    const { perks1, perks2, perks3, perks4, perks5, perks6 } = perks
    console.log("hello from perks 1",perks1)

    return (
        <div className={className}>
            <div>
                <span>OMS.KRAB PÅ INSÄTTNING</span>
                <span>hello {perks1}</span>
            </div>
            <div>
                <span>OMS.KRAB PÅ INSÄTTNING</span>
                <span>35x</span>
            </div>
            <div>
                <span>OMS.KRAB PÅ INSÄTTNING</span>
                <span>35x</span>
            </div>
            <div>
                <span>OMS.KRAB PÅ INSÄTTNING</span>
                <span>35x</span>
            </div>
            <div>
                <span>OMS.KRAB PÅ INSÄTTNING</span>
                <span>35x</span>
            </div>
            <div>
                <span>OMS.KRAB PÅ INSÄTTNING</span>
                <span>35x</span>
            </div>
        </div>
    )
}