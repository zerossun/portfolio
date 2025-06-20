import React from "react";
import GoHome from "../../../component/GoHome";
import Todo from "../../../assets/Detail/Todo.png";
import Todo1 from "../../../assets/Detail/Todo1.png";
import Todo2 from "../../../assets/Detail/Todo2.png";
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
  ViewPic1,
  GitBtn,
  Stack,
  SubTxt,
} from "../../../scss/Work";
import theme from "../../../scss/theme";

const Work5 = () => {
  return (
    <>
      <WorkCon>
        <GoHome />
        <WorkDiv>
          <div className="flex flex-wrap items-start basis-full md:flex-nowrap">
            <div className="basis-full md:basis-1/2">
              <WorkImgDiv>
                <WorkPic>
                  <source srcset={Todo} media={`(min-width: ${theme.md})`} />
                  <WorkImg src={Todo} alt="Todo" />
                </WorkPic>
              </WorkImgDiv>
            </div>
            <div className="mt-4 sm-0 md:mt-0 basis-full md:basis-1/2 md:ml-12">
              <WorkTxtUp>
                <WorkTitle>Rec.TODOLIST</WorkTitle>
                <SubTxt>
                  <Stack>
                    <span>React</span>
                    <span>Styled-component</span>
                  </Stack>
                  <WorkSpan>퍼블리싱,프론트 | 100%</WorkSpan>
                </SubTxt>
              </WorkTxtUp>
              <WorkTxtDown>
                <WorkP>
                  web speech api이용하여 녹음으로 기록이 되는 Todolist
                  프로그램입니다.
                  <br />
                  typescript를 이용하여 보다 안전하고 편리하게 컴포넌트를 관리할
                  수 있도록 하였습니다.
                  <br />
                  useState 훅을 사용하여 투두리스트의 상태를 관리하며,
                  useEffect를 통해 로컬 스토리지에 데이터를 저장하여 페이지를
                  새로고침해도 데이터가 유지됩니다.
                </WorkP>
              </WorkTxtDown>
            </div>
          </div>
          <WorkTxt>
            <DetailView>
              <WorkDetail>Detail view</WorkDetail>
              <DetailDiv className="flex flex-col md:flex-row">
                <ViewPic1 className="md:basis-2/3 basis-full">
                  <WorkImgDiv>
                    <WorkPic>
                      <source
                        srcset={Todo1}
                        media={`(min-width: ${theme.md})`}
                      />
                      <WorkImg src={Todo1} alt="Todo1" />
                    </WorkPic>
                  </WorkImgDiv>
                </ViewPic1>
                <ViewPic1 className="mt-6 ml-0 md:basis-1/3 basis-full md:ml-10 md:mt-0">
                  <WorkImgDiv>
                    <WorkPic>
                      <source
                        srcset={Todo2}
                        media={`(min-width: ${theme.md})`}
                      />
                      <WorkImg src={Todo2} alt="Todo2" />
                    </WorkPic>
                  </WorkImgDiv>
                </ViewPic1>
              </DetailDiv>
            </DetailView>
          </WorkTxt>
          <WorkBtnDiv className="flex flex-row justify-center">
            <WorkBtn
              margin="0 24px 0 0"
              onClick={() => window.open("https://rectodolist.netlify.app/")}
            >
              바로가기
            </WorkBtn>
            <GitBtn
              margin="0"
              onClick={() =>
                window.open("https://github.com/zerossun/todolits_typescript")
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

export default Work5;
