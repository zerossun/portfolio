import React, {useState, useEffect} from "react";
import Hello from "../../component/Hello";
import styled, {keyframes, css} from "styled-components";
import LottifileRight from "../../component/LottifileRight";
import LottifileLeft from "../../component/LottifileLeft";
import theme from "../../scss/theme";
import {CSSTransition} from "react-transition-group";

// styled-components

const Left = styled.div`
  position: absolute;
  left: 0;
  top: 16px;
  cursor: alias;
`;
const Right = styled.div`
  position: absolute;
  right: -4%;
  bottom: 0;
  cursor: alias;
`;
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// 텍스트 컴포넌트 스타일링
// const Text = styled.h2`
//   color: ${({theme}) => theme.main};
//   font-weight: 400;
//   line-height: 150%;
//   font-size: 1.25rem;
//   padding: 0 64px;
//   width: 100%;
//   text-align: center;
//   position: absolute;
//   top: calc(50% + 120px);
//   left: 50%;

//   transform: translate(-50%, -50%);
//   opacity: ${({isVisible}) => (isVisible ? "1" : "0")};
//   transition: opacity 0.5s ease-in-out;
//   animation: ${({isVisible}) => (isVisible ? fadeIn : "none")} 1s ease-in-out;
//   @media ${theme.md} {
//     top: 60%;
//     padding: 0 12px;
//     padding-top: 0px;
//     font-size: 1.125rem;
//     top: calc(50% + 60px);
//   }
// `;

export const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  max-width: 1920px;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
`;

// export const MainText = styled.h1`
//   font-size: 2.5rem;
//   font-weight: 700;
//   color: #d94e3b;
//   z-index: 10;
//   position: relative;
//   top: 50%;
//   transform: translateY(-50%);
//   cursor: default;
//   text-align: center;

//   @media (min-width: 640px) {
//     font-size: 3rem;
//   }

//   @media (min-width: 768px) {
//     font-size: 4rem;
//   }

//   @media (min-width: 1024px) {
//     font-size: 5rem;
//   }
// `;

// Text가 위로 올라오며 나타나는 애니메이션
const slideInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px); /* 아래에서 위로 살짝 올라오는 효과 */
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Hello가 아래로 사라지는 애니메이션 (CSSTransition의 exit 클래스에 적용될 스타일)
// HelloContainer의 스타일로 사용
const fadeOutDownAndMove = keyframes`
  to {
    opacity: 0;
    transform: translateY(100%); /* 아래로 완전히 사라지도록 이동 */
  }
`;

const MainContainer = styled.div`
  margin-bottom: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  position: relative;
  overflow: hidden; /* 애니메이션 중 요소가 밖으로 나가지 않도록 */
`;

// Hello 컴포넌트의 Wrapper (사라지는 애니메이션을 제어하기 위함)
const HelloWrapper = styled.div`
  /* Hello 컴포넌트가 위치할 중앙 정렬 스타일 */
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 600px;
  text-align: center;
  z-index: 10; /* 다른 요소 위에 오도록 */

  @media (max-width: 768px) {
    width: 60%;
  }

  // CSSTransition을 위한 클래스 정의

  &.hello-exit {
    opacity: 1;
    transform: translate(-50%, -50%); /* 초기 상태 */
  }
  &.hello-exit-active {
    opacity: 0;
    transform: translate(-50%, 100%); /* 아래로 사라지면서 이동 */
    transition: all 0.8s ease-out; /* 사라지는 애니메이션 시간 (0.8초) */
  }
`;

const TextContainer = styled.div`
  opacity: 0; /* 초기 숨김 */
  position: absolute;
  top: 45%; /* Hello와 같은 시작 위치, Hello 사라진 후 이 위치로 올라옴 */
  left: 50%;
  transform: translate(-50%, 50px); /* 초기 위치를 Hello 아래로 설정 */
  text-align: center;
  z-index: 5; /* Hello 아래 */

  // CSSTransition을 위한 클래스 정의
  &.text-enter {
    opacity: 0;
    transform: translate(-50%, 50px); /* 진입 전 위치 */
  }
  &.text-enter-active {
    opacity: 1;
    transform: translate(-50%, -50%); /* 최종 중앙 위치 */
    transition: all 2s ease-out; /* 올라오는 애니메이션 시간 */
  }
  &.text-enter-done {
    opacity: 1;
    transform: translate(-50%, -50%); /* 애니메이션 완료 후 최종 상태 유지 */
  }
`;

const MainText = styled.h1`
  font-size: 2em;
  color: #555;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 1.2em;
  }
`;

const positions = [
  {top: "5%", left: "5%"},
  {top: "10%", right: "15%"},
  {top: "30%", left: "20%"},
  {bottom: "20%", left: "10%"},
  {bottom: "10%", right: "10%"},
  {bottom: "30%", left: "50%"},
  {top: "40%", right: "5%"},
  {top: "60%", left: "30%"},
  {bottom: "40%", right: "20%"},
  {top: "20%", left: "60%"},
  {bottom: "15%", left: "40%"},
];

export const BlurText = styled.span`
  position: absolute;
  color: #f2f2f2;
  filter: blur(1.8px);
  cursor: default;
  transition: all 0.3s ease;
  white-space: nowrap;

  ${({$index}) => {
    const pos = positions[$index % positions.length];
    return css`
      ${pos.top && `top: ${pos.top};`}
      ${pos.bottom && `bottom: ${pos.bottom};`}
      ${pos.left && `left: ${pos.left};`}
      ${pos.right && `right: ${pos.right};`}
    `;
  }}

  ${({$fontSize}) =>
    css`
      font-size: ${$fontSize};
    `}

  &:hover {
    filter: blur(0);
    color: #ededed;
    font-weight: 600;
  }

  @media (min-width: 768px) {
    ${({$fontSize}) =>
      css`
        font-size: calc(${$fontSize} + 0.3rem);
      `}
  }

  @media (min-width: 1024px) {
    ${({$fontSize}) =>
      css`
        font-size: calc(${$fontSize} + 0.6rem);
      `}
  }
`;
const Section1 = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  const blurTexts = [
    "깔끔한 코드를 추구하는",
    "흐름을 고려하는",
    "트렌드를 읽는",
    "사용자에 집중하는",
    "경험을 디자인하는",
    "감각을 구현하는",
    "디자인을 이해하는",
    "완성도를 높이는",
    "픽셀을 다듬는",
    "결과물에 책임지는",
    "디테일에 강한",
  ];

  const fontSizes = ["1rem", "1.2rem", "1.4rem", "1.6rem", "1.8rem"];

  const [showHello, setShowHello] = useState(true); // Hello 표시 여부
  const [showText, setShowText] = useState(false); // Text 표시 여부

  const helloAnimationDuration = 200; // Hello 컴포넌트 SCSS 애니메이션 시간 (4초)
  const helloExitDuration = 400; // Hello 사라지는 애니메이션 시간 (HelloWrapper에서 설정)
  const textEnterDuration = 100; // Text 나타나는 애니메이션 시간 (TextContainer에서 설정)

  useEffect(() => {
    // 1단계: Hello 글씨 써지는 애니메이션 시작 (즉시)
    // Hello 컴포넌트는 자신의 SCSS 애니메이션에 따라 4초간 동작합니다.

    // 2단계: 4초 후 Hello 사라지는 애니메이션 시작
    // 3단계: 2단계와 동시에 Text 나타나는 애니메이션 시작
    const timer = setTimeout(() => {
      setShowHello(false); // Hello를 사라지게 함 (CSSTransition의 exit 시작)
      setShowText(true); // Text를 나타나게 함 (CSSTransition의 enter 시작)
    }, helloAnimationDuration); // Hello의 글씨 써지는 애니메이션 시간과 동일하게 설정

    return () => clearTimeout(timer);
  }, []); // 컴포넌트 마운트 시 한 번만 실행

  return (
    <section>
      <MainContainer>
        {/* <Left>
          <LottifileLeft />
        </Left>
        <CSSTransition
          in={showHello} // showHello 상태에 따라 진입/퇴장 애니메이션 트리거
          timeout={helloExitDuration} // Hello 사라지는 애니메이션 시간
          classNames="hello"
          unmountOnExit // Hello가 완전히 사라지면 DOM에서 제거
        >
          <HelloWrapper>
            <b>HELLO</b>
          </HelloWrapper>
        </CSSTransition>
        <CSSTransition
          in={showText} // showText 상태에 따라 진입/퇴장 애니메이션 트리거
          timeout={textEnterDuration} // Text 나타나는 애니메이션 시간
          classNames="text"
          unmountOnExit={false} // Text는 계속 표시되어야 하므로 unmount하지 않음
        >
          <TextContainer>
            <MainText>
              직관적이고 효율적인 인터페이스를 제공하는
              <br />
              퍼블리셔 원선영입니다.
            </MainText>
          </TextContainer>
        </CSSTransition>
        <Right>
          <LottifileRight />
        </Right> */}
        {blurTexts.map((text, index) => (
          <BlurText
            key={index}
            $index={index}
            $fontSize={fontSizes[index % fontSizes.length]}
          >
            {text}
          </BlurText>
        ))}
        <MainText>디퍼블리셔 원선영입니다.</MainText>
      </MainContainer>
    </section>
  );
};

export default Section1;
