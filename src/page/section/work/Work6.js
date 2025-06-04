import React from "react";

import Pocket from "../../../assets/Detail/Pocket.png";
import Pocket1 from "../../../assets/Detail/Pocket1.png";
import Pocket2 from "../../../assets/Detail/Pocket2.png";
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

const Work6 = () => {
  return (
    <>
      <WorkCon>
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
                포켓몬 api를 이용하여 한국어버전 포켓몬 도감을 제작하였습니다.
                해당 포켓몬 클릭 시, 관련된 세부정보가 나오도록 하였습니다.
              </WorkP>
              <WorkP>
                여러 API 호출을 통해 다양한 데이터를 통합하고, 포켓몬의 한국어
                이름을 추가하여 한국어 사용자들에게 친숙한 인터페이스를
                제공했습니다. 비동기 API 호출을 통해 효율적인 데이터 Fetch 및
                상태 관리를 구현했습니다.
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
                    <source
                      srcset={Pocket1}
                      media={`(min-width: ${theme.md})`}
                    />
                    <WorkImg src={Pocket1} alt="Pocket1" />
                  </WorkPic>
                </WorkImgDiv>
                <WorkImgDiv className="mt-6 ml-0 md:basis-1/3 basis-full md:ml-10 md:mt-0">
                  <WorkPic>
                    <source
                      srcset={Pocket2}
                      media={`(min-width: ${theme.md})`}
                    />
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
              onClick={() =>
                window.open("https://github.com/zerossun/poketmon")
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

export default Work6;
