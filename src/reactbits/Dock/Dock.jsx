import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { Children, cloneElement, useEffect, useMemo, useRef, useState } from "react";

function DockItem({ children, className = "", onClick, mouseX, spring, distance, magnification, baseItemSize, theme }) {
  const ref = useRef(null);
  const isHovered = useMotionValue(0);

  const mouseDistance = useTransform(mouseX, (val) => {
    const rect = ref.current?.getBoundingClientRect() ?? { x: 0, width: baseItemSize };
    return val - rect.x - baseItemSize / 2;
  });

  const targetSize = useTransform(mouseDistance, [-distance, 0, distance], [baseItemSize, magnification, baseItemSize]);
  const size = useSpring(targetSize, spring);

  return (
    <motion.div
      ref={ref}
      style={{ width: size, height: size }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onClick={(event) => {
        onClick();
        event.currentTarget.blur(); // Fix focus issue
      }}
      className={`relative inline-flex items-center justify-center rounded-full shadow-md border-2 ${className} ${
        theme === "dark" ? "bg-[#060606] text-white border-neutral-700" : "bg-black text-white border-neutral-800"
      }`}
      tabIndex={0}
      role="button"
    >
      {Children.map(children, (child) => cloneElement(child, { isHovered }))}
    </motion.div>
  );
}

export default function Dock({ items, className = "", theme = "light", spring = { mass: 0.1, stiffness: 150, damping: 12 }, magnification = 70, distance = 200, panelHeight = 64 }) {
  const mouseX = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);

  const heightRow = useTransform(isHovered, [0, 1], [panelHeight, magnification + magnification / 2 + 4]);
  const height = useSpring(heightRow, spring);

  return (
    <motion.div style={{ height }} className="mx-2 flex max-w-full items-center">
      <motion.div
        onMouseMove={({ pageX }) => {
          isHovered.set(1);
          mouseX.set(pageX);
        }}
        onMouseLeave={() => {
          isHovered.set(0);
          mouseX.set(Infinity);
        }}
        className={`${className} absolute bottom-2 left-1/2 transform -translate-x-1/2 flex items-end w-fit gap-4 rounded-2xl border-2 pb-2 px-4`}
      >
        {items.map((item, index) => (
          <DockItem key={index} onClick={item.onClick} theme={theme}>
            {item.icon}
          </DockItem>
        ))}
      </motion.div>
    </motion.div>
  );
}