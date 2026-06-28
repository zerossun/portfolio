import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import EditIcon from "@mui/icons-material/Edit";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import CodeIcon from "@mui/icons-material/Code";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TvIcon from "@mui/icons-material/Tv";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SettingsIcon from "@mui/icons-material/Settings";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import GoHome from "../../../component/GoHome";
import EzenPc from "../../../assets/image/work/ezen_pc.jpg";
import EzenMobile1 from "../../../assets/image/work/ezen_mobile_1.jpg";
import EzenMobile2 from "../../../assets/image/work/ezen_mobile_2.jpg";
import Ezenport01 from "../../../assets/image/work/ezen-port-01.jpg";
import Ezenport02 from "../../../assets/image/work/ezen-port-02.jpg";
import Ezenport03 from "../../../assets/image/work/ezen-port-03.jpg";
import EzenEdu from "../../../assets/image/work/ezen-edu.jpg";

import Logiall from "../../../assets/Detail/Logiall.png";
import Logiall1 from "../../../assets/image/work/LogiallPrev.png";
import Logiall2 from "../../../assets/image/work/LogiallNext.png";
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
  WorkSpan,
  WorkP,
  WorkBtn,
  DetailView,
  Stack,
  SubTxt,
  LandingSection,
  ImproveHead,
  ImproveNum,
  ImproveMainTitle,
  ImproveDesc,
  LandingTitleWrap,
  ProcessGrid,
  ProcessCard,
  ProcessArrow,
  PreviewSection,
  PreviewPc,
  MuiIcon,
  PreviewMobileWrap,
  PointGrid,
  PointCard,
  EzenCaseGrid,
  EzenCaseCard,
  CaseThumb,
  CaseBody,
  CaseTagWrap,
  SummarySection,
  SummaryQuote,
  SummaryGrid,
  SummaryCard,
  DevicePc,
  DeviceOnlyPc,
  DotLeft,
  DotRight,
} from "../../../scss/Work";
import theme from "../../../scss/theme";

const Work9 = () => {
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
              <WorkImgDiv style={{background: "#000"}}>
                <WorkPic>
                  <source srcset={EzenEdu} media={`(min-width: ${theme.md})`} />
                  <WorkImg src={EzenEdu} alt="EzenEdu" />
                </WorkPic>
              </WorkImgDiv>
            </div>
            <div className="mt-4 sm-0 md:mt-0 basis-full md:basis-1/2 md:ml-12">
              <WorkTxtUp>
                <WorkTitle>교육과정 랜딩페이지 구축 및 운영</WorkTitle>
                <SubTxt>
                  <Stack>
                    <span>html</span>
                    <span>SCSS</span>
                    <span>javascript</span>
                  </Stack>
                  <WorkSpan>퍼블리싱 | 100%</WorkSpan>
                </SubTxt>
              </WorkTxtUp>
              <WorkTxtDown>
                <WorkP>
                  사내 교육과정 랜딩페이지 제작 및 운영을 담당하며,
                  <DevicePc />
                  PC 시안을 기반으로 모바일 환경까지 빠르게 확장할 수 있는
                  <DevicePc />
                  반응형 퍼블리싱을 진행하였습니다.
                  <DevicePc />
                  <br />
                  교육과정별 특성과 사용자 흐름을 고려해 콘텐츠 구조와 UI를
                  최적화하였으며, 빠른 운영 및 유지보수를 위해 재사용 가능한
                  퍼블리싱 구조를 구축하였습니다.
                </WorkP>
              </WorkTxtDown>
            </div>
          </div>
          <WorkTxt>
            <DetailView>
              {/* =========================
01 실무 중심 랜딩페이지 제작 프로세스
========================= */}

              <LandingSection>
                <LandingTitleWrap>
                  <ImproveHead>
                    <ImproveNum>01</ImproveNum>
                    <ImproveMainTitle>
                      랜딩페이지 제작 프로세스
                    </ImproveMainTitle>
                  </ImproveHead>
                  <ImproveDesc>
                    디자이너가 전달한 PC 시안을 기반으로 콘텐츠 우선순위와
                    사용자 흐름을 고려해
                    <DevicePc /> 모바일 레이아웃까지 빠르게 확장 제작하였습니다.
                  </ImproveDesc>
                </LandingTitleWrap>

                <ProcessGrid>
                  <ProcessCard>
                    <MuiIcon>
                      <EditIcon />
                    </MuiIcon>
                    <strong>01</strong>
                    <h4>시안 전달</h4>
                    <p>디자이너 PC 시안 전달</p>
                    <ProcessArrow>›</ProcessArrow>
                  </ProcessCard>

                  <ProcessCard>
                    <MuiIcon>
                      <ContentPasteSearchIcon />
                    </MuiIcon>
                    <strong>02</strong>
                    <h4>구조 분석</h4>
                    <p>콘텐츠 및 정보구조 분석</p>
                    <ProcessArrow>›</ProcessArrow>
                  </ProcessCard>

                  <ProcessCard>
                    <MuiIcon>
                      <SmartphoneIcon />
                    </MuiIcon>
                    <strong>03</strong>
                    <h4>모바일 베리에이션</h4>
                    <p>모바일 레이아웃 구성</p>
                    <ProcessArrow>›</ProcessArrow>
                  </ProcessCard>

                  <ProcessCard>
                    <MuiIcon>
                      <CodeIcon />
                    </MuiIcon>
                    <strong>04</strong>
                    <h4>퍼블리싱</h4>
                    <p>반응형 퍼블리싱 구현</p>
                    <ProcessArrow>›</ProcessArrow>
                  </ProcessCard>

                  <ProcessCard>
                    <MuiIcon>
                      <CheckCircleIcon />
                    </MuiIcon>
                    <strong>05</strong>
                    <h4>검수 및 운영 적용</h4>
                    <p>QA 후 운영 반영</p>
                  </ProcessCard>
                </ProcessGrid>

                <PreviewSection>
                  <PreviewPc>
                    <p>PC</p>
                    <div>
                      <img src={EzenPc} alt="PC 시안" />
                    </div>
                  </PreviewPc>
                  <PreviewMobileWrap>
                    <p>모바일</p>
                    <div>
                      <img src={EzenMobile1} alt="모바일 시안" />
                      <img src={EzenMobile2} alt="모바일 시안" />
                    </div>
                  </PreviewMobileWrap>
                </PreviewSection>
              </LandingSection>

              {/* =========================
02 반응형 제작 포인트
========================= */}

              <LandingSection>
                <LandingTitleWrap>
                  <ImproveHead>
                    <ImproveNum>02</ImproveNum>
                    <ImproveMainTitle>반응형 제작 포인트</ImproveMainTitle>
                  </ImproveHead>
                </LandingTitleWrap>

                <PointGrid>
                  <PointCard>
                    <MuiIcon>
                      <TvIcon />
                    </MuiIcon>
                    <h4>모바일 베리에이션</h4>
                    <p>PC 중심 시안 재구성 및 최적화</p>
                  </PointCard>

                  <PointCard>
                    <MuiIcon>
                      <AccessTimeIcon />
                    </MuiIcon>
                    <h4>빠른 일정 대응</h4>
                    <p>평균 2~3일 내 제작</p>
                  </PointCard>

                  <PointCard>
                    <MuiIcon>
                      <SettingsIcon />
                    </MuiIcon>
                    <h4>유지보수 고려</h4>
                    <p>공통 컴포넌트 및 클래스 구조화</p>
                  </PointCard>

                  <PointCard>
                    <MuiIcon>
                      <ImageSearchIcon />
                    </MuiIcon>
                    <h4>이미지·영상 최적화</h4>
                    <p>용량 최적화 및 비율 조정</p>
                  </PointCard>
                </PointGrid>
              </LandingSection>

              {/* =========================
03 교육과정 랜딩페이지 제작 사례
========================= */}

              <LandingSection>
                <LandingTitleWrap>
                  <ImproveHead>
                    <ImproveNum>03</ImproveNum>
                    <ImproveMainTitle>
                      교육과정 랜딩페이지 제작 사례
                    </ImproveMainTitle>
                  </ImproveHead>
                  <ImproveDesc>
                    다양한 교육과정 특성에 맞춰 반응형 랜딩페이지를 빠르게
                    구축하고 운영에 적용하였습니다.
                  </ImproveDesc>
                </LandingTitleWrap>

                <EzenCaseGrid>
                  <EzenCaseCard
                    href="https://www.ezenac.co.kr/ezen/curriculum/?idx=5339"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <CaseThumb>
                      <img src={Ezenport01} alt="AI UXUI디자인(피그마AI)" />
                    </CaseThumb>

                    <CaseBody>
                      <h4>AI UXUI디자인(피그마AI)</h4>
                      <p>
                        UX·UI 과정 소개 랜딩페이지
                        <DeviceOnlyPc />
                        반응형 제작 및 운영 적용
                      </p>

                      <CaseTagWrap>
                        <span>Responsive</span>
                        <span>Mobile</span>
                        <span>3일</span>
                      </CaseTagWrap>
                    </CaseBody>
                  </EzenCaseCard>

                  <EzenCaseCard
                    href="https://www.ezenac.co.kr/ezen/curriculum/?idx=7635"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <CaseThumb>
                      <img src={Ezenport02} alt="AI 뷰티 콘텐츠 부트캠프" />
                    </CaseThumb>

                    <CaseBody>
                      <h4>AI 뷰티 콘텐츠 부트캠프</h4>

                      <p>
                        디지털트윈 교육과정 소개 페이지
                        <DeviceOnlyPc />
                        구축 및 퍼블리싱
                      </p>

                      <CaseTagWrap>
                        <span>Responsive</span>
                        <span>Publishing</span>
                        <span>2일</span>
                      </CaseTagWrap>
                    </CaseBody>
                  </EzenCaseCard>

                  <EzenCaseCard
                    href="https://www.codelabit.co.kr/front/curriculum/ai-agent-service.asp"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <CaseThumb>
                      <img src={Ezenport03} alt="코드랩 ai 에이전트" />
                    </CaseThumb>

                    <CaseBody>
                      <h4>AI 에이전트 서비스 개발자</h4>
                      <p>
                        AI 개발자 교육과정 소개 랜딩페이지
                        <DeviceOnlyPc />
                        구축 및 운영
                      </p>

                      <CaseTagWrap>
                        <span>Responsive</span>
                        <span>Mobile</span>
                        <span>2일</span>
                      </CaseTagWrap>
                    </CaseBody>
                  </EzenCaseCard>
                </EzenCaseGrid>
              </LandingSection>

              {/* =========================
04 작업방식 요약
========================= */}

              <LandingSection>
                <LandingTitleWrap>
                  <ImproveHead>
                    <ImproveNum>04</ImproveNum>
                    <ImproveMainTitle>작업방식 요약</ImproveMainTitle>
                  </ImproveHead>
                </LandingTitleWrap>

                <SummarySection>
                  <SummaryQuote>
                    <DotLeft>"</DotLeft>
                    <p>
                      다양한 교육과정의 랜딩페이지를 운영 일정에 맞춰 구축하며,
                      PC 시안을 기반으로 모바일 환경까지 빠르게 확장할 수 있는
                      실무 중심 퍼블리싱 구조를 구축하였습니다.
                    </p>
                    <DotRight>"</DotRight>
                  </SummaryQuote>

                  <SummaryGrid>
                    <SummaryCard>
                      <strong>2~3일</strong>
                      <span>평균 제작 기간</span>
                    </SummaryCard>

                    <SummaryCard>
                      <strong>20+</strong>
                      <span>총 제작 페이지</span>
                    </SummaryCard>

                    <SummaryCard>
                      <strong>100%</strong>
                      <span>반응형 대응</span>
                    </SummaryCard>
                  </SummaryGrid>
                </SummarySection>
              </LandingSection>
            </DetailView>
          </WorkTxt>
          <WorkBtn
            margin="0 auto"
            onClick={() => window.open("https://www.ezenac.co.kr/")}
          >
            바로가기
          </WorkBtn>
        </WorkDiv>
      </WorkCon>
      <Footer />
    </>
  );
};

export default Work9;
