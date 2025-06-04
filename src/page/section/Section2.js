import React, {useState, useEffect} from "react";
import theme from "../../scss/theme";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import Me from "../../assets/image/Me.jpeg";

// styled-components

const Main2 = styled.div`
  width: 100%;
  margin: 120px auto 240px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${theme.md} {
    height: auto;
  }
`;

const Image = styled.div`
  position: relative;
  margin-bottom: 120px;
  @media ${theme.md} {
    // border: 2px solid ${theme.sub2};
    margin-bottom: 80px;
  }
`;

const About = styled.b`
  position: absolute;
  left: 0%;
  top: -50%;
  font-size: 12rem;
  color: #f9f9f9;
  @media ${theme.md} {
    font-size: 6rem;
    top: -10%;
  }
  @media ${theme.sm} {
    display: none;
  }
`;

const Me_txt = styled.b`
  position: absolute;
  right: 7%;
  bottom: -34%;
  font-size: 12rem;
  color: #f9f9f9;
  opacity: 100%;
  @media ${theme.md} {
    font-size: 6rem;
    bottom: -20%;
  }
  @media ${theme.sm} {
    display: none;
  }
`;

const Picture = styled.picture`
  position: relative;
  display: block;
  margin: auto;
  width: 400px;
  &::after {
    border: 2px solid ${theme.sub2};
    content: "";
    display: block;
    border-radius: 16px;
    height: 100%;
    position: absolute;
    right: -30px;
    top: 30px;
    width: calc(100% - 30px);
    z-index: -1;
  }
  @media ${theme.md} {
    width: 60%;
  }
`;

const Img = styled.img`
  border-radius: 16px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  vertical-align: top;
`;

// const Name = styled.strong`
//   font-family: "YEONGJUSeonbiTTF";
//   font-size: 1.5rem;
//   color: ${({theme}) => theme.sub3};
// `;

const Ul = styled.ul``;

const LiRound = styled.div`
  padding: 6px;
  box-sizing: border-box;
  border-radius: 8px;
  width: fit-content;
  // border: 1px dashed ${({theme}) => theme.sub1};
`;

const Sub = styled.dl`
  // border-top: 1px dashed ${({theme}) => theme.sub1};
  // margin-top: ${({theme}) => theme.padding.xl};
  // padding-top: ${({theme}) => theme.padding.xl};
`;

const SubDt = styled.dt`
  // border-bottom: 2px solid ${({theme}) => theme.sub3};
  font-weight: 600;
  left: 0;
  max-width: 80px;
  position: absolute;
  top: 0;
  color: ${({theme}) => theme.black};
  @media ${theme.md} {
    position: relative;
    margin-bottom: ${({theme}) => theme.padding.sm};
    max-width: fit-content;
  }
`;

const SubDd = styled.dd`
  color: #acacac;
  padding-left: 80px;
  position: relative;
  @media ${theme.md} {
    padding-left: 0px;
  }
`;

const Br = styled.div`
  display: block;
  @media ${theme.md} {
    display: none;
  }
`;

const P = styled.p`
  word-break: keep-all;
  white-space: normal;
`;

const Strong = styled.strong`
  word-break: keep-all;
  white-space: normal;
`;

const More = styled.button`
  margin-top: 16px;
  color: ${({theme}) => theme.main};
  display: flex;
  align-items: center;
  font-weight: 600;
  border-radius: 999px;
  padding: ${({theme}) => theme.padding.xs} ${({theme}) => theme.padding.sm};
  background: ${({theme}) => theme.sub3};
`;

const Section2 = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Main2>
      <section className="basis-full">
        <Image
        // data-aos="flip-left"
        // data-aos-easing="ease-out-cubic"
        // data-aos-duration="1000"
        >
          <About
            data-aos="fade-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            About
          </About>
          <Me_txt
            data-aos="fade-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            me
          </Me_txt>
          <Picture>
            <source srcset={Me} media={`(min-width: ${theme.md})`} />
            <Img src={Me} alt="Me" />
          </Picture>
        </Image>
        <div className="flex flex-wrap basis-full md:flex-nowrap">
          <div
            // data-aos="flip-left"
            // data-aos-easing="ease-out-cubic"
            // data-aos-duration="1000"
            className="basis-full md:basis-1/2"
          >
            <P>
              안녕하세요!
              <Br />
              사용자의 흐름을 이해하고 직관적인 화면을 구현하는 디퍼블리셔
              원선영입니다.
              <Br />
              디자인 기획부터 마크업, 스타일링까지 전 과정을 이해하며, 높은
              사용자 경험을
              <Br /> 만들어내는 데 집중하고 있습니다.
            </P>
            <P className="mt-2">
              SCSS와 Styled-Components를 활용한 효율적인 스타일 설계에 능하며,
              웹 표준과
              <Br /> 웹 접근성을 고려한 시맨틱 마크업으로 개발팀과의 협업에도
              유연하게 대응합니다.
              <Br />
              Figma를 활용해 사용자의 흐름을 고려한 UI 설계를 제작하였습니다.
            </P>
            <P className="mt-2">
              <Strong>“디자인은 세심하게, 코드는 간결하게!”</Strong>
              끊임없이 배우고 성장하며, 팀에 기여하는 일원이 되겠습니다.
            </P>
          </div>
          <div className="mt-4 ml-0 md:mt-0 basis-full md:basis-1/2 md:ml-12">
            <Sub>
              <div className="relative">
                <SubDt>경력</SubDt>
                <SubDd>
                  <span style={{color: theme.black}}>로지올</span>
                  &nbsp; (밸류업팀 퍼블리셔 / 2022.06 - 2024.08)
                </SubDd>
                <SubDd>
                  <span style={{color: theme.black}}>대방열림고시학원</span>
                  &nbsp; (기획부 웹 디자이너 / 2019.02 - 2020.03)
                </SubDd>
              </div>
              <div className="relative mt-6">
                <SubDt>자격증</SubDt>
                <SubDd>
                  <span style={{color: theme.black}}>컴퓨터그래픽기능사</span>
                  &nbsp; (한국산업인력공단 / 2024.12.11)
                </SubDd>
                <SubDd>
                  <span style={{color: theme.black}}>웹디자인기능사</span>
                  &nbsp; (한국산업인력공단 / 2022.04.15)
                </SubDd>
                <SubDd>
                  <span style={{color: theme.black}}>컴퓨터활용능력2급</span>
                  &nbsp; (대한상공회의소 / 2021.07.09)
                </SubDd>
              </div>
              <div className="relative mt-6">
                <SubDt>교육</SubDt>
                <SubDd>
                  <span style={{color: theme.black}}>한양사이버대학교</span>
                  &nbsp; (시작디자인학과 재학중)
                </SubDd>
                <SubDd>
                  <span style={{color: theme.black}}>그린컴퓨터아카데미</span>
                  &nbsp; (스마트 웹&앱 디저이너 양성 B_혼합훈련 과정 수료)
                </SubDd>
                <SubDd>
                  <span style={{color: theme.black}}>경인여자대학교</span>
                  &nbsp; (영상방송학과 졸업)
                </SubDd>
              </div>
            </Sub>
            {/* <More
              onClick={() =>
                window.open(
                  "https://amethyst-pint-e98.notion.site/HELLO-I-m-SUNYOUNG-78aa1d6b87f547bd8ef4b5c2faf90b74?pvs=4"
                )
              }
            >
              자기소개 더 보기!
              <NextSvg className="ml-1" />
            </More> */}
          </div>
        </div>
      </section>
    </Main2>
  );
};

export default Section2;
