import React from "react";
import theme from "../scss/theme";
import styled from "styled-components";
import "animate.css";

const Foot = styled.footer`
  min-height: 100vh;
  padding: 100px 12px;
  text-align: center;
  width: 100%;
  position: relative;
`;

const Contact = styled.h1`
  width: fit-content;
  height: 100%;
  display: inline-block;
  color: ${({theme}) => theme.sub1};
  border-bottom: 7px solid ${({theme}) => theme.sub1};
  font-size: 2.5rem;
  line-height: 1;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 60px;
  @media ${theme.md} {
    margin: ${theme.padding.lg} 0;
    margin-bottom: 40px;
    font-size: 1.5rem;
  }
`;
const TxtDiv = styled.div``;
const Txt = styled.p``;

const Mail = styled.strong`
  font-size: 4rem;
  font-weight: 700;
  padding: 16px 64px;
  display: block;
  line-height: 150%;
  position: absolute;
  top: 50%;
  left: 0%;
  width: 100%;
  transform: translate(-50%, -0%);
  white-space: normal;
  word-wrap: break-word;
  @media ${theme.md} {
    font-size: 2rem;
    word-break: break-all;
    padding: 0 12px;
  }
`;
const Copy = styled.small`
  position: absolute;
  bottom: 16px;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
  font-size: 0.625rem;
  color: ${({theme}) => theme.disabled};
  &::after {
    border-top: 1px dashed ${theme.disabled};
    content: "";
    display: block;
    height: 100%;
    position: absolute;
    left: 50%;
    top: -8px;
    transform: translateX(-50%);
    width: calc(100% - 32px);
  }
`;
function Footer() {
  return (
    <Foot>
      <Contact>Contact</Contact>
      <TxtDiv>
        <Txt>
          나누고 싶은 말씀이 계시다면 편하게 메일 주세요!
          <br />
          메일 보내주시면 1~2일 내로 회신드립니다 :-)
        </Txt>
        <Mail data-aos="fade-up" className="animate__animated animate__bounce">
          wonsunyoung0703@gmail.com
        </Mail>
      </TxtDiv>
      <Copy>© Copyright 2022 - 2024 SunYoung Won.</Copy>
    </Foot>
  );
}

export default Footer;
