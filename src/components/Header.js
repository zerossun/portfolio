import React from "react";
import logo from "../assets/logo.png";
import styled from "styled-components";
import {Link} from "react-router-dom";
const Logo = styled.header`
  width: 350px;
  margin: 0 auto;
  padding: 16px 0;
  height: 160px;
  @media (max-width: 768px) {
    max-width: 280px;
    width: 65%;
    height: 134px;
  }
`;
const Header = () => {
  return (
    <>
      <Link to={`/`}>
        <Logo>
          <img src={logo} alt="포켓몬 로고" />
        </Logo>
      </Link>
    </>
  );
};

export default Header;
