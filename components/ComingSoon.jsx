"use client";
import { useEffect, useRef, useState } from "react";
import { motion, stagger, useAnimation } from "framer-motion";

const ComingSoon = () => {
  const firstPart = "Coming";
  const secondPart = "Soon!";
  let firstLetters = firstPart.split("");
  let secondLetters = secondPart.split("");
  secondPart.split("");
  const min = -150;
  const max = 500;
  const controls = useAnimation();
  const scope = useRef(null);
  const [col, setCol] = useState("");

  const changeColor = () => {
    const color = `hsl(${Math.random() * 360}, 100%, 50%)`;

    setCol(color);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeColor();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  let first = firstLetters.map((letter, index) => {
    return (
      <motion.span
        key={index}
        initial={{
          opacity: 0,
          y: Math.floor(Math.random() * (max - min + 1)) + min,

          color: col,
          fontSize: "56px",
          letterSpacing: "10px",
        }}
        animate={{
          opacity: 1,
          y: 0,
          rotate: 0,
          color: `hsl(${Math.random() * 360}, 100%, 50%)`,
          transition: { duration: 2 },
          // type: "spring",
          // damping: 10,
          // stiffness: 100,
        }}
        transition={{ delay: stagger(index * 0.1, { from: "last" }) }}
      >
        {" " + letter}
      </motion.span>
    );
  });

  let second = secondLetters.map((letter, index) => {
    return (
      <motion.span
        key={index}
        initial={{
          opacity: 0,
          y: Math.floor(Math.random() * (max - min + 1)) + min,

          color: col,
          fontSize: "56px",
          letterSpacing: "10px",
        }}
        animate={{
          opacity: 1,
          y: 0,
          rotate: 0,
          color: `hsl(${Math.random() * 360}, 100%, 50%)`,
          transition: { duration: 2 },
          // type: "spring",
          // damping: 10,
          // stiffness: 100,
        }}
        transition={{ delay: stagger(index * 0.1, { from: "last" }) }}
      >
        {" " + letter}
      </motion.span>
    );
  });

  return (
    <div
      style={{ display: "flex", justifyContent: "center" }}
      ref={scope}
      className="font-special"
    >
      ${first} ' ' ${second}
    </div>
  );
};

export default ComingSoon;
