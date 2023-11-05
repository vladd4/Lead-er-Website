import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const useAnimate = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      setIsAnimated(true);
    }
  }, [inView]);
  return { ref, isAnimated };
};
export default useAnimate;
