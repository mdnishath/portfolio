"use client";
import { Typewriter } from "react-simple-typewriter";
import React from "react";

const Type = ({
  className,
  text,
  loop,
  cursorStyle,
  typeSpeed,
  deleteSpeed,
  delaySpeed,
}) => {
  return (
    <Typewriter
      words={text}
      loop={loop}
      cursor
      cursorStyle={cursorStyle}
      typeSpeed={typeSpeed}
      deleteSpeed={deleteSpeed}
      delaySpeed={delaySpeed}
      // onLoopDone={handleDone}
      // onType={handleType}
    />
  );
};

export default Type;
