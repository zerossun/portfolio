import React from "react";
import WorkHeader from "../../../component/WorkHeader";
import Todo from "../../../assets/Detail/Todo.png";
import Todo1 from "../../../assets/Detail/Todo1.png";
import Todo2 from "../../../assets/Detail/Todo2.png";
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

const Work5 = () => {
  return (
    <WorkCon>
      <WorkHeader />
      <WorkDiv>
        <WorkImgDiv>
          <WorkPic>
            <source srcset={Todo} media={`(min-width: ${theme.md})`} />
            <WorkImg src={Todo} alt="Todo" />
          </WorkPic>
        </WorkImgDiv>
        <WorkTxt>
          <WorkTxtUp>
            <WorkDetail>WORk DETAIL</WorkDetail>
            <WorkTitle>Rec.TODOLIST</WorkTitle>
          </WorkTxtUp>
          <WorkTxtDown>
            <WorkSpan>퍼블리싱,프론트 | 100%</WorkSpan>
            <WorkP>
              web speech api이용하여 녹음으로 기록이 되는 Todolist
              프로그램입니다.
            </WorkP>
            <WorkP>
              typescript를 이용하여 보다 안전하고 편리하게 관리할 수 있도록
              하였습니다.
            </WorkP>
            <WorkP>
              scss와 styled-components를 사용하여 중복되는 css 코드를
              최소화하였습니다.
            </WorkP>
          </WorkTxtDown>
          <DetailView>
            <WorkDetail>Detail view</WorkDetail>
            <DetailDiv className="flex flex-col md:flex-row">
              <WorkImgDiv className="md:basis-2/3 basis-full">
                <WorkPic>
                  <source srcset={Todo1} media={`(min-width: ${theme.md})`} />
                  <WorkImg src={Todo1} alt="Todo1" />
                </WorkPic>
              </WorkImgDiv>
              <WorkImgDiv className="mt-6 ml-0 md:basis-1/3 basis-full md:ml-10 md:mt-0">
                <WorkPic>
                  <source srcset={Todo2} media={`(min-width: ${theme.md})`} />
                  <WorkImg src={Todo2} alt="Todo2" />
                </WorkPic>
              </WorkImgDiv>
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
  );
};

export default Work5;
