interface IconProps {
  className?: string;
  paths: string[];
  width?: number;
  height?: number;
  viewBox?: string;
  fillCurrentColor?: boolean;
}

const Icon: React.FC<IconProps> = ({
  className,
  paths,
  width = 23,
  height = 23,
  viewBox = "0 0 23 23",
  fillCurrentColor = false, 
}) => (
  <svg
    width={width}
    height={height}
    viewBox={viewBox}
    fill={fillCurrentColor ? "currentColor" : "none"}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {paths.map((d: string, index) => (
      <path
        key={index}
        d={d}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ))}
  </svg>
);

export default Icon;
