import React from "react";
import styled from "styled-components";
import GoHome from "../../../component/GoHome";
import Logiway from "../../../assets/Detail/Logiway.png";
import Logiway1 from "../../../assets/Detail/Logiway1.png";
import Logiway2 from "../../../assets/Detail/Logiway2.png";
import Logiway3 from "../../../assets/image/work/logiway.mp4";
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
  Video,
  Stack,
  SubTxt,
} from "../../../scss/Work";
import theme from "../../../scss/theme";

const VideoWrapper = styled.div`
  width: 100%;
  height: 50vmin;
  overflow: hidden;
  position: relative;
  background: #f9f9f9;
  border: 1px solid #999;
  border-radius: 16px;
  padding: 1rem;
`;

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: contain; /* 화면에 꽉 채우기 */
`;

const Work2 = () => {
  return (
    <>
      <WorkCon>
        <GoHome />
        <WorkDiv>
          <div className="flex flex-wrap items-start basis-full md:flex-nowrap">
            <VideoWrapper className="basis-full md:basis-1/2">
              <StyledVideo autoPlay loop muted playsInline>
                <source src={Logiway3} type="video/mp4" />
              </StyledVideo>
            </VideoWrapper>
            <div className="mt-4 sm-0 md:mt-0 basis-full md:basis-1/2 md:ml-12">
              <WorkTxtUp>
                <WorkTitle>로지웨이 홈페이지</WorkTitle>
                <SubTxt>
                  <Stack>
                    <span>Vue</span>
                    <span>SCSS</span>
                    <span>JSP</span>
                  </Stack>
                  <WorkSpan>퍼블리싱 | 100%</WorkSpan>
                </SubTxt>
              </WorkTxtUp>
              <WorkTxtDown>
                <WorkP>
                  화물운송업 홈페이지인 만큼, 역동적인 느낌을 주기 위해
                  노력하였습니다.
                  <br />
                  한페이지에 많은 정보를 담고 있어, 카테고리에 맞는 모션과
                  기능을 넣어 이탈율을 줄일 수 있도록 퍼블리싱을 진행했습니다.
                  <br />
                  풀반응형로 제작되어 어떤 기기에서 편하게 웹 사이트를 볼 수
                  있습니다. 스크롤링 기능을 넣어, 원하는 콘텐츠를 빠르게 볼 수
                  있도록 제작하였습니다.
                </WorkP>
              </WorkTxtDown>
            </div>
          </div>
          <WorkTxt>
            <DetailView>
              <WorkDetail>Detail view</WorkDetail>
              <DetailDiv className="flex flex-col md:flex-row">
                <WorkImgDiv className="md:basis-2/3 basis-full">
                  <WorkPic>
                    <source
                      srcset={Logiway}
                      media={`(min-width: ${theme.md})`}
                    />
                    <WorkImg src={Logiway} alt="Logiway" />
                  </WorkPic>
                </WorkImgDiv>
                <WorkImgDiv className="mt-6 ml-0 md:basis-1/3 basis-full md:ml-10 md:mt-0">
                  <WorkPic>
                    <source
                      srcset={Logiway2}
                      media={`(min-width: ${theme.md})`}
                    />
                    <WorkImg src={Logiway2} alt="Logiway2" />
                  </WorkPic>
                </WorkImgDiv>
              </DetailDiv>
              <WorkTxtDown className="mt-4">
                <WorkP>
                  css-animation을 활용하여 시각적 매력을 증가시켜 사용자의
                  관심을 끌고, 더 오래 머무르게 구현하였습니다.
                </WorkP>
                <WorkP>
                  앱상에서는 불필요한 시각적 정보를 제거하고 정보의 전달력을
                  높였습니다.
                </WorkP>
              </WorkTxtDown>
            </DetailView>
          </WorkTxt>
          <WorkBtn
            margin="0 auto"
            onClick={() => window.open("https://www.logiway.co.kr/")}
          >
            바로가기
          </WorkBtn>
        </WorkDiv>
      </WorkCon>
      <Footer />
    </>
  );
};

export default Work2;
