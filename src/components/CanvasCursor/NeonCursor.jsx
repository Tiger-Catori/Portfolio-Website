// import React, { useEffect, useRef } from "react";
// import "../../css/NeonCursor.css"; // adjust path if needed

// const NeonCursor = () => {
//   const dotRef = useRef(null);
//   const circleRef = useRef(null);

//   useEffect(() => {
//     const dot = dotRef.current;
//     const circle = circleRef.current;

//     if (!dot || !circle) return;

//     const handleMouseMove = (e) => {
//       const x = e.clientX;
//       const y = e.clientY;

//       dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
//       circle.style.transform = `translate3d(${x}px, ${y}px, 0)`;
//     };

//     document.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       document.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <>
//       <div ref={dotRef} className="cursor-dot"></div>
//       <div ref={circleRef} className="cursor-circle"></div>
//     </>
//   );
// };

// export default NeonCursor;
