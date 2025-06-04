import React from "react";
import {Link} from "react-router-dom";
import {ReactComponent as BackArrow} from "../assets/BackArrow.svg";
import styled from "styled-components";
import theme from "../scss/theme";

const Header = styled.header`
  position: fixed;
  display: flex;
  justify-content: flex-end;
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
  // @media ${theme.md} {
  //   width: calc(100% - 32px);
  // }
`;
const Type = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({theme}) => theme.disabled};
`;

export default function MainHeader_1() {
  return (
    <Header>
      <Type>SunYoung Portfolio</Type>
    </Header>
  );
}
