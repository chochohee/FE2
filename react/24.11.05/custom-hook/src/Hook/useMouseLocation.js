import { useState, useEffect } from "react";

const useMouseLocation = () => {
  const [mouseLocation, setmouseLocation] = useState({
    x: null,
    y: null,
  });

  useEffect(() => {
    window.addEventListener("mousemove", (event) => {
      setmouseLocation({
        x: event.x,
        y: event.y,
      });
    });
  }, []);
  return mouseLocation;
};

export default useMouseLocation;
