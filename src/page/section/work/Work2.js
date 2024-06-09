import React from "react";
import WorkHeader from "../../../component/WorkHeader";
import Logiway from "../../../assets/Detail/Logiway.png";
import Logiway1 from "../../../assets/Detail/Logiway1.png";
import Logiway2 from "../../../assets/Detail/Logiway2.png";
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
} from "../../../scss/Work";
import theme from "../../../scss/theme";

const Work2 = () => {
  return (
    <>
      <WorkCon>
        <WorkHeader />
        <WorkDiv>
          <WorkImgDiv>
            <WorkPic>
              <source srcset={Logiway} media={`(min-width: ${theme.md})`} />
              <WorkImg src={Logiway} alt="Logiway" />
            </WorkPic>
          </WorkImgDiv>
          <WorkTxt>
            <WorkTxtUp>
              <WorkDetail>WORk DETAIL</WorkDetail>
              <WorkTitle>로지웨이 홈페이지</WorkTitle>
            </WorkTxtUp>
            <WorkTxtDown>
              <WorkSpan>퍼블리싱 | 100%</WorkSpan>
              <WorkP>
                화물운송업 홈페이지인 만큼, 역동적인 느낌을 주기 위해
                노력하였습니다.
              </WorkP>
              <WorkP>
                한페이지에 많은 정보를 담고 있어, 카테고리에 맞는 모션과 기능을
                넣어 이탈율을 줄일 수 있도록 퍼블리싱을 진행했습니다.
              </WorkP>
              <WorkP>
                풀반응형로 제작되어 어떤 기기에서 편하게 웹 사이트를 볼 수
                있습니다. 스크롤링 기능을 넣어, 원하는 콘텐츠를 빠르게 볼 수
                있도록 제작하였습니다.
              </WorkP>
            </WorkTxtDown>
            <DetailView>
              <WorkDetail>Detail view</WorkDetail>
              <DetailDiv className="flex flex-col md:flex-row">
                <WorkImgDiv className="md:basis-2/3 basis-full">
                  <WorkPic>
                    <source
                      srcset={Logiway1}
                      media={`(min-width: ${theme.md})`}
                    />
                    <WorkImg src={Logiway1} alt="Logiway1" />
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
