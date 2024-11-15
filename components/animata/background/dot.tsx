interface DotProps {
    /**
     * Color of the dot
     */
    color?: string;
  
    /**
     * Size of the dot in pixels
     */
    size?: number;
  
    /**
     * Spacing between dots
     */
    spacing?: number;
  
    /**
     * Content of the component
     */
    children?: React.ReactNode;
  
    /**
     * Class name
     */
    className?: string;
  
    style?: React.CSSProperties;
  }
  
  function Placeholder() {
    return (
      <div className="flex h-screen w-screen  items-center justify-center">
      </div>
    );
  }
  
  export default function Dot({
    color = "#fcff00",
    size = 1,
    spacing = 10,
    children,
    className,
    style = {
      backgroundColor: "black",
    },
  }: DotProps) {
    return (
      <div
        style={{
          ...style,
          backgroundImage: `radial-gradient(${color} ${size}px, transparent ${size}px)`,
          backgroundSize: `calc(${spacing} * ${size}px) calc(${spacing} * ${size}px)`,
        }}
        className={className}
      >
        {children ?? <Placeholder />}
      </div>
    );
  }
  