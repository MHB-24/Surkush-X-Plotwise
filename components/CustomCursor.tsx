"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const innerRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let outerX = 0;
    let outerY = 0;

    const updatePosition = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (innerRef.current) {
        innerRef.current.style.left = `${mouseX}px`;
        innerRef.current.style.top = `${mouseY}px`;
      }
    };

    const animate = () => {
      outerX += (mouseX - outerX) * 0.15;
      outerY += (mouseY - outerY) * 0.15;

      if (outerRef.current) {
        outerRef.current.style.left = `${outerX}px`;
        outerRef.current.style.top = `${outerY}px`;
      }

      requestAnimationFrame(animate);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, .cursor-hover-target")) {
        outerRef.current?.classList.add("cursor-hover");
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, .cursor-hover-target")) {
        outerRef.current?.classList.remove("cursor-hover");
      }
    };

    window.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    animate();

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      <div ref={innerRef} className="cursor-inner" />
      <div ref={outerRef} className="cursor-outer" />
    </>
  );
}
