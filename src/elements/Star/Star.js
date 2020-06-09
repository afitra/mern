import React from "react";

import propTypes from "prop-types";
import "./Star.scss";
export default function Star({ className, value, height, width, spacing }) {
  const decimals = Number(value) % 1;
  const star = [];
  let leftPos = 0;
  for (let i = 0; i < 5 && i < value - decimals; i++) {
    // const element = array[i];
    leftPos = leftPos + width;
    star.push(
      <div
        className="star"
        key={`start-${i}`}
        style={{
          left: i * width,
          height: height,
          width: width,
          marginRight: spacing,
        }}
      ></div>
    );
  }

  if (decimals > 0 && value <= 5) {
    star.push(
      <div
        className="star"
        key={`starWithDecimal`}
        style={{
          left: leftPos,
          height: height,
          width: decimals * width - spacing,
        }}
      ></div>
    );
  }
  const starPlaceHolder = [];
  for (let j = 0; j < 5; j++) {
    // const element = array[j];
    starPlaceHolder.push(
      <div
        className="star placeholder"
        key={`starPlaceholder-${j}`}
        style={{
          left: j * width,
          height: height,
          width: width,
          marginRight: spacing,
        }}
      ></div>
    );
  }
  return (
    <>
      <div
        className={["stars", className].join(" ")}
        style={{ height: height }}
      >
        {starPlaceHolder}
        {star}
      </div>
    </>
  );
}
Star.prototype = {
  className: propTypes.className,
  value: propTypes.value,
  width: propTypes.width,
  height: propTypes.height,
  spacing: propTypes.spacing,
};
