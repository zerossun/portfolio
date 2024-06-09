import React from "react";
import WorkHeader from "../../../component/WorkHeader";
import Virtupia from "../../../assets/Detail/Virtupia.png";
import Virtupia1 from "../../../assets/Detail/Virtupia1.png";
import Virtupia2 from "../../../assets/Detail/Virtupia2.png";

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
} from "../../../scss/Work";
import theme from "../../../scss/theme";

const Work3 = () => {
  return (
    <>
      <WorkCon>
        <WorkHeader />
        <WorkDiv>
          <WorkImgDiv>
            <WorkPic>
              <source srcset={Virtupia} media={`(min-width: ${theme.md})`} />
              <WorkImg src={Virtupia} alt="Virtupia" />
            </WorkPic>
          </WorkImgDiv>
          <WorkTxt>
            <WorkTxtUp>
              <WorkDetail>WORk DETAIL</WorkDetail>
              <WorkTitle>버튜피아</WorkTitle>
            </WorkTxtUp>
            <WorkTxtDown>
              <WorkSpan>퍼블리싱 | 100%</WorkSpan>
              <WorkP>
                버튜버 투표어플로서 팬들의 투표로 주간/월간 버튜버 순위를
                보여주는 서비스입니다.
              </WorkP>
              <WorkP>
                styled-commponented를 사용하여, react 프로젝트에서 스타일링을
                효과적으로 관리하고 프론트엔드와 보다 편리하게 협업할 수
                있었습니다.
              </WorkP>
              <WorkP>
                웹/앱 형식으로 제작되어 어느 어플리케이션에서도 반응되게
                제작하였습니다.
              </WorkP>
            </WorkTxtDown>
            <DetailView>
              <WorkDetail>Detail view</WorkDetail>
              <DetailDiv className="flex flex-col md:flex-row">
                <WorkImgDiv className="md:basis-2/3 basis-full">
                  <WorkPic>
                    <source
                      srcset={Virtupia1}
                      media={`(min-width: ${theme.md})`}
                    />
                    <WorkImg src={Virtupia1} alt="Virtupia1" />
                  </WorkPic>
                </WorkImgDiv>
                <WorkImgDiv className="mt-6 ml-0 md:basis-1/3 basis-full md:ml-10 md:mt-0">
                  <WorkPic>
                    <source
                      srcset={Virtupia2}
                      media={`(min-width: ${theme.md})`}
                    />
                    <WorkImg src={Virtupia2} alt="Logiway2" />
                  </WorkPic>
                </WorkImgDiv>
              </DetailDiv>
            </DetailView>
          </WorkTxt>
          <WorkBtn
            margin="0 auto"
            onClick={() => window.open("https://www.virtupia.com/user/start")}
          >
            바로가기
          </WorkBtn>
        </WorkDiv>
      </WorkCon>
    </>
  );
};

export default Work3;
