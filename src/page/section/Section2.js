import React, {useState, useEffect} from "react";
import theme from "../../scss/theme";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import Me from "../../assets/image/Me.jpeg";
import {ReactComponent as ReactSvg} from "../../assets/logo/ReactSvg.svg";
import {ReactComponent as VueSvg} from "../../assets/logo/VueSvg.svg";
import {ReactComponent as ScssSvg} from "../../assets/logo/ScssSvg.svg";
import {ReactComponent as JspSvg} from "../../assets/logo/JspSvg.svg";
import {ReactComponent as TailwindSvg} from "../../assets/logo/TailwindSvg.svg";
import {ReactComponent as CssSvg} from "../../assets/logo/CssSvg.svg";
import {ReactComponent as HtmlSvg} from "../../assets/logo/HtmlSvg.svg";
import {ReactComponent as FigmaSvg} from "../../assets/logo/FigmaSvg.svg";
import {ReactComponent as StyledSvg} from "../../assets/logo/StyledSvg.svg";
import {ReactComponent as Git} from "../../assets/logo/Git.svg";
import {ReactComponent as PsSvg} from "../../assets/logo/PsSvg.svg";
import {ReactComponent as ZeplinSvg} from "../../assets/logo/ZeplinSvg.svg";
import {ReactComponent as NextSvg} from "../../assets/image/nextSvg.svg";

// styled-components

const Main2 = styled.div`
  width: 100%;

  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${theme.md} {
    height: auto;
  }
`;

const Image = styled.div`
  border-radius: 16px;
  margin: 0 80px 0 0;
  @media ${theme.md} {
    border: 2px solid ${theme.sub2};
    margin: 0 40px 0 0;
  }
`;

const Picture = styled.picture`
  position: relative;
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
    &::after {
      border: 0px;
    }
  }
`;

const Img = styled.img`
  border-radius: 16px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  vertical-align: top;
`;

const Name = styled.strong`
  font-family: "YEONGJUSeonbiTTF";
  font-size: 1.5rem;
  color: ${({theme}) => theme.sub3};
`;

const Ul = styled.ul``;

const LiRound = styled.div`
  padding: 6px;
  box-sizing: border-box;
  border-radius: 8px;
  width: fit-content;
  border: 1px dashed ${({theme}) => theme.sub1};
`;

const Sub = styled.dl`
  border-top: 1px dashed ${({theme}) => theme.sub1};
  margin-top: ${({theme}) => theme.padding.xl};
  padding-top: ${({theme}) => theme.padding.xl};
`;

const SubDt = styled.dt`
  border-bottom: 2px solid ${({theme}) => theme.sub3};
  font-weight: 600;
  left: 0;
  max-width: 80px;
  position: absolute;
  top: 0;
  color: ${({theme}) => theme.sub3};
  @media ${theme.md} {
    position: relative;
    margin-bottom: ${({theme}) => theme.padding.sm};
    max-width: fit-content;
  }
`;

const SubDd = styled.dd`
  color: #acacac;
  padding-left: 100px;
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

const More = styled.button`
  margin-top: 32px;
  color: ${({theme}) => theme.white};
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
      <section className="flex flex-wrap basis-full ">
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="basis-full md:basis-1/2"
        >
          <Image>
            <Picture>
              <source srcset={Me} media={`(min-width: ${theme.md})`} />
              <Img src={Me} alt="Me" />
            </Picture>
          </Image>
        </div>
        <div className="pt-4 md:pt-6 basis-full md:basis-1/2">
          <Name>WON SUN YOUNG</Name>
          <P className="mt-2">
            안녕하세요! 직관적이고 효율적인 인터페이스를 제공하는 퍼블리셔
            원선영입니다.
            <Br />
            여러 프로젝트에서 다방면으로 활용 가능한 인재가 되는 것을 목표로
            합니다.
          </P>
          <P className="mt-2">
            React/Vue 등 다양한 프레임워크와 라이브러리를 활용하여 사용자
            친화적인 인터페이스를
            <Br /> 능숙하게 그려낼 수 있어요. 웹표준과 웹접근성에 깊은 관심을
            가지고 이를 고려한
            <Br /> 웹 페이지를 그려냅니다.
          </P>
          <P className="mt-2">
            '코드는 간결하게, 업무는 세심하게!' 라는 마음으로 끊임없이 배우고
            익히기를 즐깁니다 :-)
          </P>
          <Ul className="grid grid-cols-6 gap-4 mt-6">
            <li>
              <LiRound>
                <HtmlSvg />
              </LiRound>
            </li>
            <li>
              <LiRound>
                <CssSvg />
              </LiRound>
            </li>
            <li>
              <LiRound>
                <JspSvg />
              </LiRound>
            </li>
            <li>
              <LiRound>
                <ScssSvg />
              </LiRound>
            </li>
            <li>
              <LiRound>
                <ReactSvg />
              </LiRound>
            </li>
            <li>
              <LiRound>
                <VueSvg />
              </LiRound>
            </li>
            <li>
              <LiRound>
                <TailwindSvg />
              </LiRound>
            </li>
            <li>
              <LiRound>
                <StyledSvg />
              </LiRound>
            </li>
            <li>
              <LiRound>
                <Git />
              </LiRound>
            </li>
            <li>
              <LiRound>
                <PsSvg />
              </LiRound>
            </li>
            <li>
              <LiRound>
                <FigmaSvg />
              </LiRound>
            </li>
            <li>
              <LiRound>
                <ZeplinSvg />
              </LiRound>
            </li>
          </Ul>
          <Sub>
            <div className="relative">
              <SubDt>경력</SubDt>
              <SubDd>
                <strong style={{color: theme.black, fontWeight: 600}}>
                  로지올
                </strong>
                &nbsp; (밸류업팀 퍼블리셔 / 2022.06 - 2024.08)
              </SubDd>
              <SubDd>
                <strong style={{color: theme.black, fontWeight: 600}}>
                  대방열림고시학원
                </strong>
                &nbsp; (기획부 웹 디자이너 / 2019.02 - 2020.03)
              </SubDd>
            </div>
            <div className="relative mt-6">
              <SubDt>자격증</SubDt>
              <SubDd>
                <strong style={{color: theme.black, fontWeight: 600}}>
                  웹디자인기능사
                </strong>
                &nbsp; (한국산업인력공단 / 2022.04.15)
              </SubDd>
              <SubDd>
                <strong style={{color: theme.black, fontWeight: 600}}>
                  컴퓨터활용능력2급
                </strong>
                &nbsp; (대한상공회의소 / 2021.07.09)
              </SubDd>
            </div>
            <div className="relative mt-6">
              <SubDt>교육</SubDt>
              <SubDd>
                <strong style={{color: theme.black, fontWeight: 600}}>
                  한양사이버대학교
                </strong>
                &nbsp; (시작디자인학과 재학중)
              </SubDd>
              <SubDd>
                <strong style={{color: theme.black, fontWeight: 600}}>
                  그린컴퓨터아카데미
                </strong>
                &nbsp; (스마트 웹&앱 디저이너 양성 B_혼합훈련 과정 수료)
              </SubDd>
              <SubDd>
                <strong style={{color: theme.black, fontWeight: 600}}>
                  경인여자대학교
                </strong>
                &nbsp; (영상방송학과 졸업)
              </SubDd>
            </div>
          </Sub>
          <More
            onClick={() =>
              window.open(
                "https://amethyst-pint-e98.notion.site/HELLO-I-m-SUNYOUNG-78aa1d6b87f547bd8ef4b5c2faf90b74?pvs=4"
              )
            }
          >
            자기소개 더 보기!
            <NextSvg className="ml-1" />
          </More>
        </div>
      </section>
    </Main2>
  );
};

export default Section2;
