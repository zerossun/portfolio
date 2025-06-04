import React from "react";

import TripDo from "../../../assets/image/work/Tripdo.png";
import Momoquick from "../../../assets/image/work/momoquick.png";
import Momoquick1 from "../../../assets/image/work/momoquick_m.png";
import Momoquick2 from "../../../assets/image/work/Momoquick2.png";
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

const Work4_1 = () => {
  return (
    <>
      <WorkCon>
        <WorkDiv>
          <WorkImgDiv>
            <WorkPic>
              <source srcset={TripDo} media={`(min-width: ${theme.md})`} />
              <WorkImg src={TripDo} alt="TripDo" />
            </WorkPic>
          </WorkImgDiv>
          <WorkTxt>
            <WorkTxtUp>
              <WorkDetail>WORk DETAIL</WorkDetail>
              <WorkTitle>모모퀵</WorkTitle>
            </WorkTxtUp>
            <WorkTxtDown>
              <WorkSpan>퍼블리싱 | 100%</WorkSpan>

              <WorkP>
                사용자의 편의성을 고려하여 UI를 구성하고 최적화했습니다.
              </WorkP>
              <WorkP>
                다양한 디바이스에서 일관된 사용 경험을 제공하기 위해 반응형
                디자인을 구현했습니다.
              </WorkP>
              <WorkP>
                일관된 디자인 요소와 컴포넌트를 관리하기 위해 디자인 시스템을
                구축하고 유지보수했습니다.
              </WorkP>
            </WorkTxtDown>
            <DetailView>
              <WorkDetail>Detail view</WorkDetail>
              <DetailDiv className="flex flex-col md:flex-row">
                <WorkImgDiv className="md:basis-2/3 basis-full">
                  <WorkPic>
                    <source
                      srcset={Momoquick2}
                      media={`(min-width: ${theme.md})`}
                    />
                    <WorkImg src={Momoquick2} alt="Virtupia1" />
                  </WorkPic>
                </WorkImgDiv>
                <WorkImgDiv className="mt-6 ml-0 md:basis-1/3 basis-full md:ml-10 md:mt-0">
                  <WorkPic>
                    <source
                      srcset={Momoquick1}
                      media={`(min-width: ${theme.md})`}
                    />
                    <WorkImg src={Momoquick1} alt="Logiway2" />
                  </WorkPic>
                </WorkImgDiv>
              </DetailDiv>
            </DetailView>
          </WorkTxt>
          <WorkBtn
            margin="0 auto"
            onClick={() => window.open("https://www.momo.logiway.co.kr/")}
          >
            바로가기
          </WorkBtn>
        </WorkDiv>
      </WorkCon>
      <Footer />
    </>
  );
};

export default Work4_1;
