import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import WorkHeader from "../../../component/WorkHeader";
import Logiall from "../../../assets/Detail/Logiall.png";

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
} from "../../../scss/Work";
import theme from "../../../scss/theme";

const Work1 = () => {
  return (
    <>
      <WorkCon>
        <WorkHeader />
        <WorkDiv>
          <WorkImgDiv>
            <WorkPic>
              <source srcset={Logiall} media={`(min-width: ${theme.md})`} />
              <WorkImg src={Logiall} alt="Logiall" />
            </WorkPic>
          </WorkImgDiv>
          <WorkTxt>
            <WorkTxtUp>
              <WorkDetail>WORk DETAIL</WorkDetail>
              <WorkTitle>생각대로 홈페이지</WorkTitle>
            </WorkTxtUp>
            <WorkTxtDown>
              <WorkSpan>퍼블리싱 | 100%</WorkSpan>
              <WorkP>
                화려한 모션 애니메이션을 제거하고, 디자인을 해치지 않는 선에서
                퍼블리싱을 구현했습니다.
              </WorkP>
              <WorkP>
                프로젝트의 안정성과 생산성을 높이기 위해 Vuetify를 선택하여
                프로젝트를 진행했습니다. 프레임워크에서 제공하는 컴포넌트와
                레이아웃 시스템을 이용하여 반응형까지 구현을 완료하였습니다.
              </WorkP>
              <WorkP>
                sass에서 사용가능한 함수들을 이용하여 코드를 묶어 재사용성과,
                중복되는 코드를 줄였습니다.
              </WorkP>
            </WorkTxtDown>
          </WorkTxt>
          <WorkBtn
            margin="0 auto"
            onClick={() => window.open("https://nw.logiall.com")}
          >
            바로가기
          </WorkBtn>
        </WorkDiv>
      </WorkCon>
    </>
  );
};

export default Work1;
