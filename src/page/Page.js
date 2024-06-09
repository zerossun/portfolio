import React, {useState, useEffect} from "react";
import theme from "../scss/theme";
import styled from "styled-components";
import Section1 from "./section/Section1";
import Section2 from "./section/Section2";
import Section3 from "./section/Section3";

// styled-components

const Section1Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: inline-block;
  margin: 100px auto;
  @media ${theme.md} {
    margin: ${theme.padding.md} 0;
  }
`;

const Max = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: 0 32px;
  margin: 0 auto;
  @media ${theme.md} {
    padding: 0 ${theme.padding.md};
  }
`;
const Page = () => {
  return (
    <>
      <Section1 />
      <Max>
        <Section1Wrapper>
          <Section2 />
        </Section1Wrapper>
        <Section1Wrapper>
          <Section3 />
        </Section1Wrapper>
      </Max>
    </>
  );
};

export default Page;
