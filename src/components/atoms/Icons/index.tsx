interface IconProps {
    className?: string,
    width?: number,
    height?: number
}

const OpenInNew: React.FC<IconProps> = ({ height, width, className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={height} viewBox="0 96 960 960" width={width} className={className}>
            <path
                d="M180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h279v60H180v600h600V597h60v279q0 24-18 42t-42 18H180Zm202-219-42-43 398-398H519v-60h321v321h-60V319L382 717Z" />
        </svg>
    )
}

const Icon = {
    OpenInNew
}

export default Icon