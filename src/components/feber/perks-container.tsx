interface PerksProps {
    className?: string
}

export default function PerksContainer ({className}:PerksProps) {

    return (
        <div className={className}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
        </div>
    )
}