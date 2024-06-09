import React, {useState, useEffect} from "react";
import Hello from "../../component/Hello";
import styled, {keyframes} from "styled-components";
import LottifileRight from "../../component/LottifileRight";
import LottifileLeft from "../../component/LottifileLeft";
import theme from "../../scss/theme";
// styled-components
const Main = styled.article`
  width: 100%;
  overflow: hidden;
  display: block;
  position: relative;
  height: 100dvh;
  display: block;
  @media ${theme.md} {
    margin: ${theme.padding.lg} 0;
  }
`;
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
const Text = styled.h2`
  color: ${({theme}) => theme.main};
  font-weight: 400;
  line-height: 150%;
  font-size: 1.25rem;
  padding: 0 64px;
  width: 100%;
  text-align: center;
  position: absolute;
  top: calc(50% + 120px);
  left: 50%;

  transform: translate(-50%, -50%);
  opacity: ${({isVisible}) => (isVisible ? "1" : "0")};
  transition: opacity 0.5s ease-in-out;
  animation: ${({isVisible}) => (isVisible ? fadeIn : "none")} 1s ease-in-out;
  @media ${theme.md} {
    top: 60%;
    padding: 0 12px;
    padding-top: 0px;
    font-size: 1.125rem;
    top: calc(50% + 60px);
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

  return (
    <section>
      <Main>
        <Left>
          <LottifileLeft />
        </Left>
        <Hello />
        <div>
          <Text isVisible={isVisible}>
            직관적이고 효율적인 인터페이스를 제공하는
            <br />
            원선영입니다.
          </Text>
        </div>
        <Right>
          <LottifileRight />
        </Right>
      </Main>
    </section>
  );
};

export default Section1;
