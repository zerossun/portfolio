import React from "react";
import WorkHeader from "../../../component/WorkHeader";
import DuckTest from "../../../assets/Detail/DuckTest.png";
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
} from "../../../scss/Work";
import theme from "../../../scss/theme";

const Work7 = () => {
  return (
    <>
      <WorkCon>
        <WorkHeader />
        <WorkDiv>
          <WorkImgDiv>
            <WorkPic>
              <source srcset={DuckTest} media={`(min-width: ${theme.md})`} />
              <WorkImg src={DuckTest} alt="DuckTest" />
            </WorkPic>
          </WorkImgDiv>
          <WorkTxt>
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
