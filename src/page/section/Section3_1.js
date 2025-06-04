import React, {useEffect, useState, useRef} from "react";
import theme from "../../scss/theme";
import styled, {keyframes} from "styled-components";
import AOS from "aos";

import "aos/dist/aos.css";
import {Link} from "react-router-dom";

// swiper
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import {Mousewheel, Autoplay} from "swiper/modules";

// image
import Logiall_hover from "../../assets/image/Wlogo/Logiall_1.png";
import Logiway_hover from "../../assets/image/Wlogo/Logiway_1.png";
import Virtupia_hover from "../../assets/image/Wlogo/virtupia_1.png";
import Momoquick_hover from "../../assets/image/Wlogo/momoquick_4.png";
// import Logiway from "../../assets/image/Wlogo/Logiway2.png";
// import Virtupia from "../../assets/image/Wlogo/virtupia.png";
// import Momoquick from "../../assets/image/Wlogo/momoquick.png";
import star from "../../assets/image/work/star.png";
import mail from "../../assets/image/work/mail.png";
import Logiall from "../../assets/image/work/Logiall.png";
import Virtupia from "../../assets/image/work/Virtupia.png";
import Logiway from "../../assets/image/work/Logiway.png";
import Momoquick from "../../assets/image/work/momoquick.png";
import Momoquick_1 from "../../assets/image/work/Momoquick_1.png";
import mobile from "../../assets/image/work/mobile.png";

// css

const Main3 = styled.div`
  width: 100%;
  margin: 120px auto 240px;
  height: 100%;
  display: block;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  position: relative;
  @media ${theme.md} {
    height: auto;
  }
`;

const StickySection = styled.section`
  position: relative;
  height: 500px;
  @media ${theme.md} {
    height: 100%;
  }
`;

const ScrollContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  transition: left 0.3s ease;
  @media ${theme.md} {
    display: block;
  }
`;

const LeftPanel = styled.div`
  width: 16vw;
  // background: ${theme.white};
  position: sticky;
  left: 0;
  top: 0;
  height: 100%;
  z-index: 10;
  border-right: 1px solid ${theme.gray};
  // box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 0px;
  strong {
    word-break: keep-all;
    white-space: normal;
    font-size: 2.5rem;
  }
  p {
    font-size: 1.1rem;
    color: #777;
  }
  @media ${theme.md} {
    width: 100%;
    position: relative;
    height: auto;
    border-right: 0px;
  }
`;

const SliderWrapper = styled.div`
  height: 100%;
  width: calc(100% - 16vw);
  .swiper {
    height: 100%;
  }
  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-right: 1px solid #efefef;
    cursor: pointer;
  }
  .swiper-slide:last-of-type {
    border-right: 0px;
  }
  @media ${theme.md} {
    width: 100%;
    padding: 0 8px;
    .swiper-slide {
      border-right: 0px;
    }
  }
`;

const ProjectSlide = styled.div`
  padding: 0 3rem;
  width: 100%;

  b {
    font-size: 1.8rem;
    display: block;
    line-height: normal;
    margin-bottom: 0.4rem;
  }

  p {
    font-size: 1rem;
    color: #444;
  }
  @media ${theme.md} {
    padding: 0 1rem;
  }
  @media ${theme.sm} {
    padding: 0rem;
  }
`;

const Image = styled.div`
  position: relative;
  width: 100%;
  height: 320px;
  display: block;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  margin-bottom: 3rem;

  overflow: hidden;

  // 초기 이미지
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${(props) => props.initialImg}) center center no-repeat;
    background-size: contain;
    background-position: center;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }

  // hover 이미지
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${(props) => props.hoverImg}) center center no-repeat;
    background-size: contain;
    background-position: center;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }

  &:hover {
    &::before {
      opacity: 0; // 초기 이미지를 숨김
    }
    &::after {
      opacity: 1; // hover 이미지를 표시
    }
  }

  @media ${theme.md} {
    margin-bottom: 1.5rem;
    box-shadow: 0 0px 0px rgba(0, 0, 0, 0);
    border: 1px solid ${theme.gray};
  }
`;

const Stack = styled.div`
margin-bottom: 0.4rem;
  span {
    font-size: 0.8rem;
    color;#ddd;
    padding: 6px 10px;
    border-radius: 16px;
    border: 0.5px solid #666;
    color: #666;
    margin-right: 6px;
  }
`;

const Section3_1 = () => {
  return (
    <Main3>
      <StickySection>
        <ScrollContainer>
          <LeftPanel>
            <strong>Work</strong>
          </LeftPanel>
          <SliderWrapper className="mt-4 md:mt-0">
            <Swiper
              // spaceBetween={0}
              // slidesPerView={1}
              mousewheel={{
                releaseOnEdges: true,
              }}
              breakpoints={{
                540: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                640: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 0,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 0,
                },
              }}
              modules={[Mousewheel, Autoplay]}
            >
              <SwiperSlide>
                <ProjectSlide>
                  <Image
                    initialImg={Logiall}
                    hoverImg={Logiall_hover}
                    onClick={() => (window.location.href = `/Work1`)}
                  />
                  <b>생각대로 홈페이지 개편</b>
                  <Stack>
                    <span>Vue</span>
                    <span>Vuetify</span>
                    <span>SCSS</span>
                  </Stack>
                  <p>Web | 퍼블리싱 ∙ 반응형 ∙ 유지보수</p>
                </ProjectSlide>
              </SwiperSlide>
              <SwiperSlide>
                <ProjectSlide>
                  <Image
                    initialImg={Logiway}
                    hoverImg={Logiway_hover}
                    onClick={() => (window.location.href = `/Work2`)}
                  />
                  <b>Logiway</b>
                  <Stack>
                    <span>Vue</span>
                    <span>SCSS</span>
                    <span>JSP</span>
                  </Stack>
                  <p>Web | 퍼블리싱 ∙ 반응형</p>
                </ProjectSlide>
              </SwiperSlide>
              <SwiperSlide>
                <ProjectSlide>
                  <Image
                    initialImg={Virtupia}
                    hoverImg={Virtupia_hover}
                    onClick={() => (window.location.href = `/Work3`)}
                  />
                  <b>버튜피아</b>
                  <Stack>
                    <span>React</span>
                    <span>styled-component</span>
                  </Stack>
                  <p>Mobile | 퍼블리싱 ∙ 유지보수</p>
                </ProjectSlide>
              </SwiperSlide>
              <SwiperSlide>
                <ProjectSlide>
                  <Image
                    initialImg={Momoquick_1}
                    hoverImg={Momoquick_hover}
                    onClick={() => (window.location.href = `/Work4`)}
                  />
                  <b>모모퀵</b>
                  <Stack>
                    <span>Vue</span>
                    <span>CSS</span>
                    <span>JSP</span>
                  </Stack>
                  <p>Web | 퍼블리싱 ∙ 반응형 ∙ 유지보수</p>
                </ProjectSlide>
              </SwiperSlide>
            </Swiper>
          </SliderWrapper>
        </ScrollContainer>
      </StickySection>
    </Main3>
  );
};

export default Section3_1;
