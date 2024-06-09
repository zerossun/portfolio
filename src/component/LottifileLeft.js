import React from "react";
import Lottie from "react-lottie";
import lottifileLeft from "../animations/lottifileLeft.json";

const LottifileLeft = ({height = 400, width = 400}) => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: lottifileLeft,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={height} width={width} />
    </div>
  );
};

export default LottifileLeft;
