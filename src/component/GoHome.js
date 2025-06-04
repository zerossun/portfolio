import React from "react";
import {Link} from "react-router-dom";
import {ReactComponent as BackArrow} from "../assets/BackArrow.svg";
import styled from "styled-components";
import theme from "../scss/theme";
import Backarrow from "../assets/Backarrow.png";

const Back = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #999;
  height: 64px;
  top: 0;
  width: 100%;
  max-width: 1280px;
  padding: 0 1.5rem;
  z-index: 100;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  .BackBtn {
    align-items: center;
    border: 1px solid;
    border-radius: 3rem;
    display: inline-flex;
    font-size: 0.5rem;
    font-weight: 700;
    gap: 0.2rem;
    height: 3rem;
    justify-content: center;
    line-height: 150%;
    overflow: hidden;
    padding: 0 1rem 0 0.5rem;
  }
  img {
    width: 1.5rem;
  }
`;
const Type = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({theme}) => theme.disabled};
`;

export default function GoHome() {
  return (
    <Back>
      <Link to={`/`} className="BackBtn">
        <img src={Backarrow} alt="Back" />
        <Type>Go Home</Type>
      </Link>
      <Type>SunYoung Portfolio</Type>
    </Back>
  );
}
