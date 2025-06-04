import React from "react";
import styled from "styled-components";
import GoHome from "../../../component/GoHome";
import DuckTest from "../../../assets/Detail/DuckTest.png";
import DuckHou from "../../../assets/image/work/duckhou.mov";
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
  WorkBtnDiv,
  GitBtn,
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

const Work7 = () => {
  return (
    <>
      <WorkCon>
        <GoHome />
        <WorkDiv>
          <div className="flex flex-wrap items-start basis-full md:flex-nowrap">
            <VideoWrapper className="basis-full md:basis-1/2">
              <StyledVideo autoPlay loop muted playsInline>
                <source src={DuckHou} type="video/mp4" />
              </StyledVideo>
            </VideoWrapper>
            <div className="mt-4 sm-0 md:mt-0 basis-full md:basis-1/2 md:ml-12">
              <WorkTxtUp>
                <WorkDetail>WORk DETAIL</WorkDetail>
                <WorkTitle>덕후판독기</WorkTitle>
              </WorkTxtUp>
              <WorkTxtDown>
                <WorkSpan>퍼블리싱,프론트 | 100%</WorkSpan>
                <WorkP>
                  선택한 사항에 따라 5가지 결과가 도출되는 테스트 사이트입니다.
                </WorkP>
                <WorkP>
                  각 sns에서 공유할 수 있도록 해당 기능을 추가하였습니다.
                </WorkP>
              </WorkTxtDown>
            </div>
          </div>
          <WorkTxt>
            <DetailView>
              <WorkDetail>Detail view</WorkDetail>
              <DetailDiv className="flex flex-col md:flex-row">
                <WorkImgDiv className=" basis-full">
                  <WorkPic>
                    <source
                      srcset={DuckTest}
                      media={`(min-width: ${theme.md})`}
                    />
                    <WorkImg src={DuckTest} alt="DuckTest" />
                  </WorkPic>
                </WorkImgDiv>
              </DetailDiv>
            </DetailView>
          </WorkTxt>
          <WorkBtnDiv className="flex flex-row justify-center">
            <WorkBtn
              margin="0 24px 0 0"
              onClick={() =>
                window.open("https://virtupiaotakutest.netlify.app/")
              }
            >
              바로가기
            </WorkBtn>
            <GitBtn
              margin="0"
              onClick={() =>
                window.open("https://github.com/zerossun/typetest1")
              }
            >
              Github
            </GitBtn>
          </WorkBtnDiv>
        </WorkDiv>
      </WorkCon>
      <Footer />
    </>
  );
};

export default Work7;
