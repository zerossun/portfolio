import React from "react";
import Lottie from "react-lottie";
import lottifileRight from "../animations/lottifileRight.json";

const LottifileRight = ({height = 400, width = 400, strokeWidth = 3}) => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: lottifileRight,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const lottieStyle = {
    overflow: "hidden",
    strokeWidth: strokeWidth, // Set the stroke width
  };
  return (
    <div>
      <Lottie
        options={defaultOptions}
        height={height}
        width={width}
        style={lottieStyle}
      />
    </div>
  );
};

export default LottifileRight;
