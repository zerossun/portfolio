import React from "react";
import WorkHeader from "../../../component/WorkHeader";
import Pocket from "../../../assets/Detail/Pocket.png";
import Pocket1 from "../../../assets/Detail/Pocket1.png";
import Pocket2 from "../../../assets/Detail/Pocket2.png";
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

const Work6 = () => {
  return (
    <WorkCon>
      <WorkHeader />
      <WorkDiv>
        <WorkImgDiv>
          <WorkPic>
            <source srcset={Pocket} media={`(min-width: ${theme.md})`} />
            <WorkImg src={Pocket} alt="Pocket" />
          </WorkPic>
        </WorkImgDiv>
        <WorkTxt>
          <WorkTxtUp>
            <WorkDetail>WORk DETAIL</WorkDetail>
            <WorkTitle>포켓몬도감</WorkTitle>
          </WorkTxtUp>
          <WorkTxtDown>
            <WorkSpan>퍼블리싱,프론트 | 100%</WorkSpan>
            <WorkP>
              포켓몬 api를 이용하여 포켓몬 리스트를 한국어로 불러 오도록
              제작하였습니다.
            </WorkP>
            <WorkP>
              해당 포켓몬 클릭 시, 관련된 세부정보가 나오도록 하였습니다.
            </WorkP>
            <WorkP>
              tailwind와 styled-commponented를 이용하여 스타일 코드의 가독성을
              높이고 프레임워크가 제공한 미디어 쿼리를 이용하여 반응형까지
              완료하였습니다.
            </WorkP>
          </WorkTxtDown>
          <DetailView>
            <WorkDetail>Detail view</WorkDetail>
            <DetailDiv className="flex flex-col md:flex-row">
              <WorkImgDiv className="md:basis-2/3 basis-full">
                <WorkPic>
                  <source srcset={Pocket1} media={`(min-width: ${theme.md})`} />
                  <WorkImg src={Pocket1} alt="Pocket1" />
                </WorkPic>
              </WorkImgDiv>
              <WorkImgDiv className="mt-6 ml-0 md:basis-1/3 basis-full md:ml-10 md:mt-0">
                <WorkPic>
                  <source srcset={Pocket2} media={`(min-width: ${theme.md})`} />
                  <WorkImg src={Pocket2} alt="Pocket2" />
                </WorkPic>
              </WorkImgDiv>
            </DetailDiv>
          </DetailView>
        </WorkTxt>
        <WorkBtnDiv className="flex flex-row justify-center">
          <WorkBtn
            margin="0 24px 0 0"
            onClick={() => window.open("https://pocketmondd.netlify.app//")}
          >
            바로가기
          </WorkBtn>
          <GitBtn
            margin="0"
            onClick={() => window.open("https://github.com/zerossun/poketmon")}
          >
            Github
          </GitBtn>
        </WorkBtnDiv>
      </WorkDiv>
    </WorkCon>
  );
};

export default Work6;
