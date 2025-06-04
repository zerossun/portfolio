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
import {ReactComponent as IllustSvg} from "../../assets/logo/IllustSvg.svg";
import {ReactComponent as PsSvg} from "../../assets/logo/PsSvg.svg";
import {ReactComponent as Ps2} from "../../assets/logo/Ps2.svg";
import {ReactComponent as Npm} from "../../assets/logo/Npm.svg";
import {ReactComponent as Confluence} from "../../assets/logo/Confluence.svg";
import {ReactComponent as ZeplinSvg} from "../../assets/logo/ZeplinSvg.svg";
import {ReactComponent as Ae} from "../../assets/logo/Ae.svg";
import {ReactComponent as Pr} from "../../assets/logo/Pr.svg";
import {ReactComponent as Visual} from "../../assets/logo/Visual.svg";
// styled-components

const Main2 = styled.div`
  width: 100%;
  margin: 120px auto 240px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${theme.md} {
    height: auto;
  }
`;

const LiRound = styled.div`
  padding: 6px;
  box-sizing: border-box;
  border-radius: 4px;
  width: fit-content;
  border: 1px solid ${({theme}) => theme.disabled};
`;

const Svg = styled.div`
  display: flex;
  gap: 8px;
  align-item: center;
  margin-top: 8px;
`;

const Strong = styled.strong`
  word-break: keep-all;
  white-space: normal;
  font-size: 2.5rem;
  text-decoration: underline;
  text-decoration-color: ${theme.main};
  text-decoration-thickness: 10px;
`;

const Teck = styled.div`
  margin-bottom: 24px;
`;
const Tech_title = styled.b`
  position: relative;
  font-size: 1.5rem;
  font-style: italic;
  &::after {
    background: ${theme.sub1};
    content: "";
    display: block;
    border-radius: 100%;
    position: absolute;
    right: -18px;
    bottom: 2px;
    width: 12px;
    height: 12px;
  }
`;
const Tech_ul = styled.ul`
  @media ${theme.md} {
    padding-left: 16px;
  }
`;
const Tech_li = styled.li`
  position: relative;
  &::before {
    position: absolute;
    content: "-";
    left: -15px;
    top: 0px;
  }
`;
const Tech_con = styled.p``;

const Section2_1 = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Main2
      data-aos="fade-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
      className="basis-full"
    >
      <div className="flex flex-wrap items-start basis-full md:flex-nowrap">
        <div className="basis-full md:basis-1/2">
          <Strong>TECH STACK</Strong>
        </div>
        <div className="mt-4 ml-0 md:mt-0 basis-full md:basis-1/2 lg:ml-12">
          <Teck>
            <Tech_title>Publishing</Tech_title>
            <Tech_ul>
              <Tech_li>
                <Tech_con>
                  재사용성과 유지보수를 고려하여 구조화된 마크업과 컴포넌트
                  중심의 개발을 지향합니다.
                </Tech_con>
              </Tech_li>
              <Tech_li>
                <Tech_con>
                  시멘틱 마크업을 바탕으로 웹 접근성을 고려한 퍼블리싱을
                  진행합니다.
                </Tech_con>
              </Tech_li>
              <Tech_li>
                <Tech_con>
                  Scss와 styled-components를 사용하여 유연하고 확장 가능한
                  스타일 설계를 합니다.
                </Tech_con>
              </Tech_li>
              <Tech_li>
                <Tech_con>
                  JavaScript와 React를 활용하여 동적인 UI 구현이 가능합니다.
                </Tech_con>
              </Tech_li>
            </Tech_ul>
            <Svg>
              <LiRound>
                <HtmlSvg />
              </LiRound>
              <LiRound>
                <CssSvg />
              </LiRound>
              <LiRound>
                <JspSvg />
              </LiRound>
              <LiRound>
                <ScssSvg />
              </LiRound>
              <LiRound>
                <StyledSvg />
              </LiRound>
              <LiRound>
                <ReactSvg />
              </LiRound>
              <LiRound>
                <TailwindSvg />
              </LiRound>
            </Svg>
          </Teck>
          <Teck>
            <Tech_title>Design</Tech_title>
            <Tech_ul>
              <Tech_li>
                <Tech_con>
                  Photoshop과 Illustrator를 활용해 웹 디자인 및 편집 작업을
                  수행합니다.
                </Tech_con>
              </Tech_li>
              <Tech_li>
                <Tech_con>
                  Figma를 활용해 UI/UX 설계와 프로토타이핑 작업을 진행합니다.
                </Tech_con>
              </Tech_li>
              <Tech_li>
                <Tech_con>
                  애프터 이펙트 및 프리미어를 활용하여 기초적인 영상 작업이
                  가능합니다.
                </Tech_con>
              </Tech_li>
            </Tech_ul>
            <Svg>
              <LiRound>
                <Ps2 />
              </LiRound>
              <LiRound>
                <IllustSvg />
              </LiRound>
              <LiRound>
                <FigmaSvg />
              </LiRound>
              <LiRound>
                <Pr />
              </LiRound>
              <LiRound>
                <Ae />
              </LiRound>
            </Svg>
          </Teck>
          <Teck>
            <Tech_title>Tools</Tech_title>
            <Tech_ul>
              <Tech_li>
                <Tech_con>
                  Visual Studio Code를 주 에디터로 사용하며, 효율적인 개발
                  환경을 구성합니다.
                </Tech_con>
              </Tech_li>
              <Tech_li>
                <Tech_con>
                  git을 이용한 형상관리를 통하여 협업을 진행할 수 있습니다.
                </Tech_con>
              </Tech_li>
              <Tech_li>
                <Tech_con>
                  npm을 활용하여 원하는 패키지를 설치하고 활용할 수 있습니다.
                </Tech_con>
              </Tech_li>
              <Tech_li>
                <Tech_con>
                  Confluence을 활용하여 프로젝트 관리 및 문서를 협업하고 공유할
                  수 있습니다.
                </Tech_con>
              </Tech_li>
            </Tech_ul>
            <Svg>
              <LiRound>
                <Visual />
              </LiRound>
              <LiRound>
                <Git />
              </LiRound>
              <LiRound>
                <Npm />
              </LiRound>
              <LiRound>
                <Confluence />
              </LiRound>
            </Svg>
          </Teck>
        </div>
      </div>
    </Main2>
  );
};

export default Section2_1;
