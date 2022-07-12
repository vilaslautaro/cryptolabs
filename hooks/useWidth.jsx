import { useEffect, useState } from "react";

export const useWidth = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const actualizarWidth = () => {
      const width = document.body.clientWidth;
      setWidth(width);
    };
    actualizarWidth();
    window.addEventListener("resize", actualizarWidth);

    return () => {
      window.removeEventListener("resize", actualizarWidth);
    };
  }, []);

  return {width};
};
