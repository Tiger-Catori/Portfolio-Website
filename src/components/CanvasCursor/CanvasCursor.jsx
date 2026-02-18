import useCanvasCursor from "../../hooks/useCanvasCursor";

const CanvasCursor = () => {
  useCanvasCursor();

  return <canvas id="canvas" className="pointer-events-none fixed inset-0" />;
};

export default CanvasCursor;
