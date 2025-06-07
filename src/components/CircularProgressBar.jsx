const CircularProgressBar = ({
    percent = 0,
    size = 3,
    strokeWidth = 0.25,
    strokeColor = "green",
}) => {
    const mediaQuery = window.matchMedia("(max-width: 639px)");
    if (mediaQuery.matches) {
        size = 8;
        strokeWidth = 0.5;
    }
    const radius = size / 2 - strokeWidth;
    const center = size / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percent / 100) * circumference;

    return (
        <div>
            <svg
                viewBox={`0 0 ${size} ${size}`}
                width="100%"
                height="100%"
                style={{ width: `${size}vw`, height: `${size}vw` }}
            >
                <circle
                    r={radius}
                    cx={center}
                    cy={center}
                    stroke="white"
                    strokeWidth={strokeWidth}
                    fill="black"
                />
                <circle
                    r={radius}
                    cx={center}
                    cy={center}
                    stroke={strokeColor}
                    fill="none"
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    transform={`rotate(-90 ${center} ${center})`}
                    strokeLinecap="round"
                />
                <text
                    x={center}
                    y={center}
                    fill="white"
                    fontSize={size * 0.4}
                    alignmentBaseline="middle"
                    textAnchor="middle"
                    className="max-sm:text-[1vw]"
                    dominantBaseline="middle"
                >
                    {percent}
                </text>
            </svg>
        </div>
    );
};
export default CircularProgressBar;
