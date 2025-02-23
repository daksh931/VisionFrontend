import { useState, useRef } from "react";

const HoverBorderCircle = () => {
  const [borderPosition, setBorderPosition] = useState({ x: "50%", y: "50%", opacity: "0" });
  const wrapperRef = useRef(null);
  const circleRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!wrapperRef.current || !circleRef.current) return;

    const { left, top, width, height } = circleRef.current.getBoundingClientRect();
    const offsetX = e.clientX - left;
    const offsetY = e.clientY - top;

    const x = (offsetX / width) * 100 + "%";
    const y = (offsetY / height) * 100 + "%";

    setBorderPosition({ x, y, opacity: "1" });
  };

  const handleMouseLeave = () => {
    setBorderPosition({ x: "50%", y: "50%", opacity: "0" });
  };

  return (
    <div
      ref={wrapperRef}
      className="relative flex items-center justify-center w-80 h-80"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main Circle */}
      <div
        ref={circleRef}
        className="relative flex items-center justify-center w-64 h-64 rounded-full bg-white shadow-md text-center text-xl font-semibold"
      >
        {/* Border Effect */}
        <div
          className="absolute inset-0 rounded-full border-2 border-transparent transition-opacity duration-300 pointer-events-none"
          style={{
            maskImage: `radial-gradient(circle at ${borderPosition.x} ${borderPosition.y}, rgba(0, 0, 0, ${borderPosition.opacity}) 30%, rgba(0, 0, 0, 0) 50%)`,
            WebkitMaskImage: `radial-gradient(circle at ${borderPosition.x} ${borderPosition.y}, rgba(0, 0, 0, ${borderPosition.opacity}) 30%, rgba(0, 0, 0, 0) 50%)`,
            borderColor: "teal",
          }}
        ></div>

        School Education
      </div>
    </div>
  );
};

export default HoverBorderCircle;
