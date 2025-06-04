import React, {useState, useEffect} from "react";
import styled, {css, keyframes} from "styled-components";
import theme from "../../scss/theme";
import Mouse from "../../assets/image/work/mouse.png";
import {CSSTransition} from "react-transition-group";

// styled-components

const Gradient = keyframes`
0% {
  background-position: 0% 50%;
}
50% {
  background-position: 100% 50%;
}
100% {
  background-position: 0% 50%;
}`;

const showTopText = keyframes`
  0% { transform: translate3d(0, 100%, 0); }
  40%, 60% { transform: translate3d(0, 50%, 0); }
  100% { transform: translate3d(0, 0, 0); }
`;

const showBottomText = keyframes`
  0% { transform: translate3d(0, -100%, 0); }
  100% { transform: translate3d(0, 0, 0); }
`;

const scrollAnim = keyframes`
0% {
  transform: translateY(0);
  opacity: 1;
}
50% {
  transform: translateY(10px);
  opacity: 0.5;
}
100% {
  transform: translateY(0);
  opacity: 1;
}

`;

const fadeIn = keyframes`
  to {
    opacity: 1;
  }
`;

const Main = styled.article`
  width: 100%;
  overflow: hidden;
  display: block;
  position: relative;
  height: 100vh;
  display: block;
	background: #fff;
  background-blend-mode: normal,color-burn;
	background-size: 400% 400%;
	animation: ${Gradient} 15s ease infinite;
	height: 100vh;
  margin-bottom: 120px;

}

`;

const AnimatedTitleWrapper = styled.div`
  height: 100%;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100vmin;

  ${(props) =>
    props.isAnimated &&
    css`
      .text-top div {
        animation: ${showTopText} 1s;
        animation-delay: 0.5s;
        animation-fill-mode: forwards;
      }
      .text-bottom div {
        animation: ${showBottomText} 0.8s;
        animation-delay: 2.5s;
        animation-fill-mode: forwards;
      }
    `}
  @media ${theme.lg} {
    padding: 0 ${theme.padding.md};
  }
  @media ${theme.md} {
    width: 100%;
  }
`;

const AnimatedTitleContainer = styled.div`
  color: ${({theme}) => theme.black};
  height: 100%;
  width: 100%;
  position: relative;
`;

const TextSegment = styled.div`
  height: 55%;
  overflow: hidden;
  position: absolute;
  width: 100%;

  div {
    position: absolute;

    b {
      display: block;
      line-height: 160%;
      height: 100%;
      position: relative;
    }
  }

  &.text-top {
    border-bottom: 0.5rem solid ${theme.black};
    top: -10px;

    div {
      bottom: 0;
      padding-bottom: 20px;
      transform: translate(0, 100%);
    }

    .design {
      position: relative;
      width: 100%;
      height: auto;
      font-weight: 700;
      font-size: 5.5rem;
      font-style: normal;
      @media ${theme.lg} {
        font-size: 4.5rem;
      }
      @media ${theme.md} {
        font-size: 3.5rem;
      }
      @media ${theme.sm} {
        font-size: 2.5rem;
      }
    }
  }
`;
const TextSegment2 = styled.div`
  height: 45%;
  overflow: hidden;
  position: absolute;
  width: 100%;

  &.text-bottom {
    bottom: 0px;
    div {
      padding-top: 10px;
      font-size: 3.5rem;
      // line-height: 200%;
      font-weight: 400;
      position: absolute;
      top: 0;
      transform: translate(0, -100%);
      @media ${theme.lg} {
        font-size: 3rem;
      }
      @media ${theme.sm} {
        font-size: 2rem;
      }
      b {
        font-weight: 700;
        font-size: 4rem;
        @media ${theme.lg} {
          font-size: 3.5rem;
        }
        @media ${theme.sm} {
          font-size: 2.5rem;
        }
      }
    }
  }
`;

const drawLine = keyframes`
  0% {
    width: 0%;
    opacity: 0;
  }
  100% {
    width: 76%;
    opacity: 100%; 
    
  }
`;

// 마우스 이미지 이동 애니메이션
const moveMouse = keyframes`
0% {
  left: 0%;
  opacity: 0%;
}

100% {
  left: 74%;
  opacity: 100%;
}
`;

// 마우스와 라인 컨테이너 (디자인하고 텍스트 위)
const MouseWrapper = styled.div`
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  position: absolute;
  top: 40%;
  transform: translate(0, -50%) !important;
  height: 100%;
  width: 100%;
`;

// 마우스 이미지
const MouseImage = styled.img`
  bottom: -12% !important;
  position: absolute;
  width: 8vmin;
  height: auto;
  opacity: 0%;

  ${(props) =>
    props.animate &&
    css`
      animation: ${moveMouse} 0.5s forwards;
      animation-delay: 0.7s;
    `}
`;

const Line = styled.div.attrs((props) => ({
  animate: props.animate,
}))`
  position: absolute !important;
  background: #ededed;
  left: 0;
  bottom: 40% !important;
  height: 40px;
  z-index: -1;
  opacity: 0;
  width: 0%;
  @media ${theme.sm} {
    bottom: 40% !important;
    height: 20px;
  }
  ${(props) =>
    props.animate &&
    css`
      animation: ${drawLine} 0.5s forwards !important;
      animation-delay: 0.7s !important;
    `}
`;

const typewriter = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const blinkingCursor = keyframes`
  from { border-right-color: rgba(255,255,255,1); }
  to { border-right-color: transparent; }
`;

const Cursor = styled.b`
  font-weight: 700;
  font-size: 5rem;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  animation: ${typewriter} 1.5s steps(20) 0.5s 1 normal both,
    ${blinkingCursor} 0.5s steps(1) infinite normal;
  @media ${theme.lg} {
    font-size: 4em;
  }
  @media ${theme.md} {
    font-size: 3.2rem;
  }
  @media ${theme.sm} {
    font-size: 2.5rem;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-size: 12px;
  color: #777;
  font-weight: 500;
  opacity: 0.9;
  opacity: 0;
  animation: ${fadeIn} 2s ease forwards;
  animation-delay: 3s;
`;

const ScrollLine = styled.div`
  font-size: 20px;
  margin-top: 4px;
  display: block;
  animation: ${scrollAnim} 1.2s infinite ease-in-out;
`;
const Section1_1 = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    console.log("애니메이션", isAnimated);
  }, [isAnimated]);
  return (
    <Main>
      <AnimatedTitleWrapper isAnimated={isAnimated}>
        <AnimatedTitleContainer>
          <TextSegment className="text-top">
            <div>
              <b className="design">
                <MouseWrapper animate={isAnimated}>
                  <Line animate={isAnimated} />
                  <MouseImage src={Mouse} animate={isAnimated} />
                </MouseWrapper>
                문제를 디자인하고
              </b>
              <Cursor>&lt;해답을 코드로 구현하는&gt;</Cursor>
            </div>
          </TextSegment>
          <TextSegment2 className="text-bottom">
            <div>
              디퍼블리셔, <b>원선영</b>입니다.
            </div>
          </TextSegment2>
        </AnimatedTitleContainer>
      </AnimatedTitleWrapper>
      <ScrollIndicator>
        <span>scroll</span>
        <ScrollLine>&#8595;</ScrollLine>
      </ScrollIndicator>
    </Main>
  );
};

export default Section1_1;
