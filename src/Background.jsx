import React, { useRef, useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { animate } from "framer-motion";
import { easeQuadOut } from "d3-ease";
import { Color } from "three";

import { colors } from "./data";
import { useStore } from "./store";

import { BackgroundMaterial } from "./BackgroundMaterial";

function Background() {
  const [index, setIndex] = useState(0);
  const isDragging = useRef(false);
  const touchStart = useRef({ x: 0, y: 0 });

  const play = useStore((s) => s.play);

  const material = useRef();
  const meshRef = useRef();

  const {
    viewport: { width, height },
  } = useThree();

  const handleClick = () => {
    if (play) {
      index === colors.length - 1 ? setIndex(0) : setIndex(index + 1);
    }
  };

  const handleTouchStart = (e) => {
    isDragging.current = true;
    touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;

    const deltaX = e.touches[0].clientX - touchStart.current.x;
    const deltaY = e.touches[0].clientY - touchStart.current.y;

    meshRef.current.position.x += deltaX * 0.01;
    meshRef.current.position.y -= deltaY * 0.01;

    touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    animate(0, 1, {
      onUpdate(v) {
        if (!material.current) return;

        material.current.u_progress = v;
      },
      duration: 2,
      ease: easeQuadOut,
    });
  }, [index]);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    material.current.u_time = time;
  });

  return (
    <mesh
      ref={meshRef}
      onClick={handleClick}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <planeGeometry args={[width, height]} />
      <backgroundMaterial
        ref={material}
        key={BackgroundMaterial.key}
        u_aspect={width / height}
        u_color={new Color(colors[index])}
      />
    </mesh>
  );
}

export default Background;
