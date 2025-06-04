import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import GoHome from "../../../component/GoHome";
import Logiall from "../../../assets/Detail/Logiall.png";
import Logiall1 from "../../../assets/image/work/LogiallPrev.png";
import Logiall2 from "../../../assets/image/work/LogiallNext.png";
import Footer from "../../Footer";
import {
  WorkCon,
  WorkDiv,
  WorkImgDiv,
  WorkPic,
  WorkImg,
  WorkTxt,
  WorkTxtUp,
  WorkDetail,
  WorkTitle,
  WorkTxtDown,
  WorkSpan,
  WorkP,
  WorkBtn,
  DetailView,
  DetailDiv,
  ViewPic1,
  Stack,
  SubTxt,
} from "../../../scss/Work";
import theme from "../../../scss/theme";

const Work1 = () => {
  return (
    <>
      <WorkCon>
        <GoHome />
        <WorkDiv>
          <div className="flex flex-wrap items-start basis-full md:flex-nowrap">
            <div className="basis-full md:basis-1/2">
              <WorkImgDiv>
                <WorkPic>
                  <source srcset={Logiall} media={`(min-width: ${theme.md})`} />
                  <WorkImg src={Logiall} alt="Logiall" />
                </WorkPic>
              </WorkImgDiv>
            </div>
            <div className="mt-4 sm-0 md:mt-0 basis-full md:basis-1/2 md:ml-12">
              <WorkTxtUp>
                <WorkTitle>생각대로 홈페이지</WorkTitle>
                <SubTxt>
                  <Stack>
                    <span>Vue</span>
                    <span>Vuetify</span>
                    <span>SCSS</span>
                  </Stack>
                  <WorkSpan>퍼블리싱 | 100% 프론트 | 20%</WorkSpan>
                </SubTxt>
              </WorkTxtUp>
              <WorkTxtDown>
                <WorkP>
                  전문적인 브랜드 이미지를 전달하기 위해 화려한 모션
                  애니메이션을 제거하고, 부드러운 전환 유지를 위한 퍼블리싱을
                  구현했습니다.
                  <br />
                  프로젝트의 안정성과 생산성을 높이기 위해 Vuetify를 선택하여
                  프로젝트를 진행했습니다. 프레임워크에서 제공하는 컴포넌트와
                  레이아웃 시스템을 이용하여 반응형까지 구현을 완료하였습니다.
                  <br />
                  scss에서 사용가능한 함수들을 이용하여 코드를 묶어 재사용성과,
                  중복되는 코드를 줄였습니다.
                </WorkP>
              </WorkTxtDown>
            </div>
          </div>
          <WorkTxt>
            <DetailView>
              <WorkDetail>웹 사이트 개선 사항</WorkDetail>
              <DetailDiv className="flex flex-col md:flex-row">
                <ViewPic1 className="md:basis-1/2 basis-full">
                  <WorkImgDiv>
                    <WorkPic>
                      <source
                        srcset={Logiall1}
                        media={`(min-width: ${theme.md})`}
                      />
                      <WorkImg src={Logiall1} alt="Logiall1" />
                    </WorkPic>
                  </WorkImgDiv>
                </ViewPic1>
                <ViewPic1 className="mt-6 ml-0 md:basis-1/2 basis-full md:ml-10 md:mt-0">
                  <WorkImgDiv>
                    <WorkPic>
                      <source
                        srcset={Logiall2}
                        media={`(min-width: ${theme.md})`}
                      />
                      <WorkImg src={Logiall2} alt="Logiall2" />
                    </WorkPic>
                  </WorkImgDiv>
                </ViewPic1>
              </DetailDiv>
              <WorkTxtDown className="mt-4">
                <WorkP>
                  미흡했던 디자인과 과도한 모션 애니메이션으로 내용 전달의
                  어려움이 있었습니다.
                </WorkP>
                <WorkP>
                  이점을 보완하고자, 직관적인 UI/UX으로 사용자들이 쉽게
                  네비게이션 할 수 있도록 하였고, 적합한 모션 애니메이션 기능을
                  넣어 핵심 내용을 강조했습니다.
                </WorkP>
                <WorkP>
                  다양한 콘텐츠를 깔끔하게 정리하여 사용자들이 필요한 정보를
                  빠르게 찾을 수 있도록 수정하였습니다.
                </WorkP>
              </WorkTxtDown>
            </DetailView>
          </WorkTxt>
          <WorkBtn
            margin="0 auto"
            onClick={() => window.open("https://logiall.com/")}
          >
            바로가기
          </WorkBtn>
        </WorkDiv>
      </WorkCon>
      <Footer />
    </>
  );
};

export default Work1;
