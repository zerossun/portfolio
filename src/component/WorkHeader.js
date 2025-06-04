import React from "react";
import {Link} from "react-router-dom";
import {ReactComponent as BackArrow} from "../assets/BackArrow.svg";
import styled from "styled-components";
import theme from "../scss/theme";

const Header = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #999;
  height: 64px;
  top: 0;
  width: 100%;
  max-width: 1280px;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
  @media ${theme.md} {
    width: calc(100% - 32px);
  }
`;
const Type = styled.h3`
  font-size: 1rem;
  font-weight: 400;
  color: ${({theme}) => theme.disabled};
`;
const Type2 = styled.h3`
  font-size: 1rem;
  font-weight: 400;
  color: ${({theme}) => theme.disabled};
`;
export default function MainHeader_1() {
  return (
    <Header>
      <Type>SunYoung Portfolio</Type>
      <Type2>SunYoung</Type2>
    </Header>
  );
}
