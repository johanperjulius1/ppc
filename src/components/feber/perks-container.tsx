interface PerksProps {
    className?: string
}

export default function PerksContainer ({className}:PerksProps) {

    return (
        <div className={className}>
            <div>OMS.KRAB PÅ INSÄTTNING</div>
            <div>UTTAGSFÖRSÖK 1</div>
            <div>UTTAGSFÖRSÖK 2</div>
            <div>HITTA STARBURST</div>
            <div>GENOMSNITTLIG SVARSTID</div>
            <div>RANK PÅ ANDRA SIDOR</div>
        </div>
    )
}