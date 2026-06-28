import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import VideoSettingsIcon from "@mui/icons-material/VideoSettings";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import HeightIcon from "@mui/icons-material/Height";
import GoHome from "../../../component/GoHome";
import Logiall from "../../../assets/Detail/Logiall.png";
import PortfolioImg from "../../../assets/image/work/portfolio.png";
import ExampleImg1 from "../../../assets/image/work/ex-01.png";
import ExampleImg2 from "../../../assets/image/work/ex-02.png";
import ExampleImg3 from "../../../assets/image/work/ex-03.png";
import Ezenport from "../../../assets/image/work/ezen-port.jpg";
import Footer from "../../Footer";
import {
  WorkCon,
  WorkDiv,
  WorkImgDiv,
  WorkPic,
  WorkImg,
  WorkTxt,
  WorkTxtUp,
  WorkTitle,
  WorkTxtDown,
  WorkP,
  WorkBtn,
  DetailView,
  DevicePc,
  PortfolioImprove,
  ImproveHead,
  ImproveNum,
  ImproveMainTitle,
  ImproveDesc,
  ImproveTwoCol,
  ImproveColumn,
  GuideImageWrap,
  ImproveText,
  MethodList,
  IconBox,
  CodeSection,
  ImproveSubTitle,
  CodeBox,
  ExampleSection,
  ExampleGrid,
  ExampleCard,
} from "../../../scss/Work";
import theme from "../../../scss/theme";

const Work8 = () => {
  return (
    <>
      {/* 기능 추가함
    - 애니메이션 배너
    - 포트폴리오 가이드 제작
    - 신규 교육과정 seo 맞게 제작
    */}
      <WorkCon>
        <GoHome />
        <WorkDiv>
          <div className="flex flex-wrap items-start basis-full md:flex-nowrap">
            <div className="basis-full md:basis-1/2">
              <WorkImgDiv>
                <WorkPic>
                  <source
                    srcset={Ezenport}
                    media={`(min-width: ${theme.md})`}
                  />
                  <WorkImg src={Ezenport} alt="Ezenportfolio" />
                </WorkPic>
              </WorkImgDiv>
            </div>
            <div className="mt-4 sm-0 md:mt-0 basis-full md:basis-1/2 md:ml-12">
              <WorkTxtUp>
                <WorkTitle>사내 홈페이지 유지보수 개선</WorkTitle>
              </WorkTxtUp>
              <WorkTxtDown>
                <WorkP>
                  사내 홈페이지(이젠아카데미) 유지보수를 담당하며, 기존
                  포트폴리오 구조를 운영 가능한 공통 템플릿 형태로
                  개선하였습니다.
                  <br />
                  영상·버튼 영역을 공통 코드로 구조화하여 이미지와 영상 주소만
                  교체해도 누구나 쉽게 등록할 수 있도록 제작하였으며, PC·모바일
                  환경을 모두 고려한 퍼블리싱과 운영 가이드 문서 제작을 통해
                  유지보수 효율을 높였습니다.
                </WorkP>
              </WorkTxtDown>
            </div>
          </div>
          <WorkTxt>
            <DetailView>
              <PortfolioImprove>
                <ImproveHead>
                  <ImproveNum>01</ImproveNum>
                  <ImproveMainTitle>포트폴리오 운영 구조 개선</ImproveMainTitle>
                </ImproveHead>

                <ImproveDesc>
                  기존에는 포트폴리오 콘텐츠 등록 시 하나의 이미지로 개성이
                  부족하였고, 코드 또한 이미지·영상·버튼 위치를 개별적으로
                  맞춰야 해 반복 수정이 많아 운영 효율이 떨어지는 구조였습니다.
                  이에 따라 영상 기능 추가 및 모두가 쉽게 사용할 수 있는 코드로
                  구조를 통일시켰습니다.
                </ImproveDesc>

                <ImproveTwoCol>
                  <ImproveColumn>
                    <ImproveSubTitle>구조설명</ImproveSubTitle>
                    <ImproveText>
                      포트폴리오 상세 페이지는 배경 이미지 위에 영상 영역과
                      <DevicePc />
                      버튼 링크가 위치하는 구조입니다.
                    </ImproveText>
                    <GuideImageWrap>
                      <img src={PortfolioImg} alt="포트폴리오 구조 설명" />
                    </GuideImageWrap>
                  </ImproveColumn>

                  <ImproveColumn>
                    <ImproveSubTitle>운영방식</ImproveSubTitle>
                    <ImproveText>
                      이미지, 영상, 링크만 교체하고 위치값(top)만 조정하면
                      <DevicePc />
                      누구나 쉽게 새로운 포트폴리오를 등록할 수 있습니다.
                    </ImproveText>

                    <MethodList>
                      <li>
                        <IconBox>
                          <ImageSearchIcon />
                        </IconBox>
                        <div>
                          <strong>배경 이미지 교체</strong>
                          <span>포트폴리오 대표 이미지만 변경</span>
                        </div>
                      </li>
                      <li>
                        <IconBox>
                          <VideoSettingsIcon />
                        </IconBox>
                        <div>
                          <strong>영상 주소 교체</strong>
                          <span>영상 소스(URL)만 변경</span>
                        </div>
                      </li>
                      <li>
                        <IconBox>
                          <InsertLinkIcon />
                        </IconBox>
                        <div>
                          <strong>버튼 링크 교체</strong>
                          <span>버튼의 href 링크만 변경</span>
                        </div>
                      </li>
                      <li>
                        <IconBox>
                          <HeightIcon />
                        </IconBox>
                        <div>
                          <strong>위치 조정</strong>
                          <span>top 값으로 영상/버튼 위치 조정</span>
                        </div>
                      </li>
                    </MethodList>
                  </ImproveColumn>
                </ImproveTwoCol>

                <CodeSection>
                  <ImproveSubTitle>코드 구조</ImproveSubTitle>
                  <ImproveText>
                    공통 HTML / CSS 구조로 제작하여 여러 포트폴리오에 동일하게
                    적용됩니다.
                  </ImproveText>

                  <CodeBox>{`<div class="new-portfolio-template">
  <img src="" class="new-portfolio-template-img" />

  <div class="new-portfolio-template-video new-portfolio-video-01">
    <video autoplay loop muted playsinline>
      <source src="" type="video/mp4" />
    </video>
  </div>

  <a class="new-portfolio-template-cta" href="" target="_blank">
    해당 포트폴리오 바로가기
  </a>
</div>

<style>
.new-portfolio-video-01 { top: 2.4%; }
.new-portfolio-video-02 { top: 48.5%; }
.new-portfolio-video-03 { top: 61.5%; }
</style>`}</CodeBox>
                </CodeSection>

                <ExampleSection>
                  <ImproveSubTitle>적용 예시</ImproveSubTitle>
                  <ImproveText>
                    같은 구조를 유지하면서 다양한 포트폴리오에 빠르게 적용할 수
                    있습니다. 또한 모두가 쉽게 사용할 수 있고,
                    <DevicePc /> PC와 모바일 모두 만족하는 운영 가능한 퍼블리싱
                    구조를 구축했습니다.
                  </ImproveText>

                  <ExampleGrid>
                    <ExampleCard>
                      <img src={ExampleImg1} alt="적용 예시 1" />
                      <p>기계/디자인 과정 포트폴리오</p>
                    </ExampleCard>
                    <ExampleCard>
                      <img src={ExampleImg2} alt="적용 예시 2" />
                      <p>영상편집 과정 포트폴리오</p>
                    </ExampleCard>
                    <ExampleCard className="last-card">
                      <img src={ExampleImg3} alt="적용 예시 3" />
                      <p>건축 인테리어 과정 포트폴리오</p>
                    </ExampleCard>
                  </ExampleGrid>
                </ExampleSection>
              </PortfolioImprove>
              <PortfolioImprove>
                <ImproveHead>
                  <ImproveNum>01</ImproveNum>
                  <ImproveMainTitle>포트폴리오 운영 구조 개선</ImproveMainTitle>
                </ImproveHead>

                <ImproveDesc>
                  기존에는 포트폴리오 콘텐츠 등록 시 하나의 이미지로 개성이
                  부족하였고, 코드 또한 이미지·영상·버튼 위치를 개별적으로
                  맞춰야 해 반복 수정이 많아 운영 효율이 떨어지는 구조였습니다.
                  이에 따라 영상 기능 추가 및 모두가 쉽게 사용할 수 있는 코드로
                  구조를 통일시켰습니다.
                </ImproveDesc>
              </PortfolioImprove>
            </DetailView>
          </WorkTxt>
          <WorkBtn
            margin="0 auto"
            onClick={() =>
              window.open(
                "https://www.ezenac.co.kr/ezen/portfolio/portfolio_list.asp"
              )
            }
          >
            바로가기
          </WorkBtn>
        </WorkDiv>
      </WorkCon>
      <Footer />
    </>
  );
};

export default Work8;
