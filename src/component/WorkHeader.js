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
  background: ${({theme}) => theme.white};
  height: 64px;
  top: 0;
  width: calc(100% - 128px);
  max-width: 1152px;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
  @media ${theme.md} {
    width: calc(100% - 32px);
  }
`;
const Type = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({theme}) => theme.disabled};
`;

export default function WorkHeader() {
  return (
    <Header>
      <Link to={`/`}>
        <BackArrow />
      </Link>
      <Type>SunYoung Portfolio</Type>
    </Header>
  );
}
