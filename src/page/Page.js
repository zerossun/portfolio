import React, {useState, useEffect} from "react";
import theme from "../scss/theme";
import styled from "styled-components";
import Section1 from "./section/Section1";
import Section1_1 from "./section/Section1_1";
import Section2 from "./section/Section2";
import Section2_1 from "./section/Section2_1";
import Section3 from "./section/Section3";
import Section3_1 from "./section/Section3_1";
import Section4 from "./section/Section4";
import Footer from "./Footer";

import MainHeader_1 from "../component/MainHeader_1";
// styled-components

const Section1Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: block;
  margin: 0 auto;
  @media ${theme.md} {
    margin-bottom: 120px;
    height: 100%;
  }
`;

const Max = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: 0 32px;
  margin: 0 auto;
  box-sizing: border-box;
  @media ${theme.md} {
    padding: 0 ${theme.padding.md};
  }
`;
const Page = () => {
  return (
    <>
      {/* <Section1 /> */}
      {/* <MainHeader /> */}
      <MainHeader_1 />
      <Section1_1 />
      <Max>
        <Section1Wrapper>
          <Section2 />
        </Section1Wrapper>
        <Section1Wrapper>
          <Section3_1 />
        </Section1Wrapper>
        <Section1Wrapper>
          <Section4 />
        </Section1Wrapper>
        <Section1Wrapper>
          <Section2_1 />
        </Section1Wrapper>
      </Max>
      <Footer />
    </>
  );
};

export default Page;
