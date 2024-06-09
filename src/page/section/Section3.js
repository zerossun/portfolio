import React, {useEffect} from "react";
import theme from "../../scss/theme";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import {Link} from "react-router-dom";
import star from "../../assets/image/work/star.png";

import pin from "../../assets/image/work/pin.png";

import file from "../../assets/image/work/file.png";

import location from "../../assets/image/work/location.png";

import mail from "../../assets/image/work/mail.png";

import mobile from "../../assets/image/work/mobile.png";

import setting from "../../assets/image/work/setting.png";

import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import {Autoplay} from "swiper/modules";

const Main3 = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 100%;
  overflow: hidden;
  display: block;
  justify-content: center;
  align-items: center;
  @media ${theme.md} {
    height: auto;
  }
`;

const H1 = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({theme}) => theme.disabled};
  width: fit-content;
  text-align: center;
  margin: 0 auto;
  margin-bottom: ${theme.padding.xl};
  position: relative;
  &::after {
    position: absolute;
    content: "";
    border-bottom: 20px solid #ededed;
    width: 100%;
    left: 0;
    bottom: 10px;
    z-index: -1;
    border-radius: 10px;
  }
`;

const H2Div = styled.div`
  width: 100%;
  padding: ${theme.padding.xl} 0;
`;

const H2 = styled.h2`
  font-family: "YEONGJUSeonbiTTF";
  font-size: 2rem;
  color: ${({theme}) => theme.sub3};
  width: 100%;
`;

const Pub = styled.div``;

const ItemBox = styled.div`
  width: 100%;
  display: block;
  overflow: hidden;
`;

const WorkCon = styled.div`
  width: 100%;
`;

const WorkItem = styled.div`
  width: 100%;
  max-width: 450px;
  position: relative;
  margin: 0 auto;
`;

const WorkImg = styled.div`
  align-items: center;
  aspect-ratio: 38 / 26;
  border: 1px solid var(--color-gray-title);
  border-radius: 2rem;
  color: #fff;
  display: flex;
  justify-content: center;
  
  position: relative;
  text-align: center;
  width: 100%;
  background: ${(props) => props.bgColor};
}
`;
const AfterBorder = styled.div`
  border: 2px solid ${theme.gray};
  border-radius: 16px;
  height: 80%;
  position: absolute;
  bottom: -20px;
  width: calc(100% - 20px);
  z-index: -1;
  ${({position}) => (position === "left" ? "left: -20px;" : "right: -20px;")}
  @media ${theme.md} {
    width: 0;
    border: 0;
  }
`;

const WorkTxt = styled.div`
  padding-top: 36px;
`;
const WorkTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
const WorkStrong = styled.strong`
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.04rem;
  line-height: 140%;
  word-break: keep-all;
`;
const WorkSpan = styled.span`
  font-size: 1rem;
`;
const WorkP = styled.p`
  display: flex;
  font-size: 1.25rem;
  font-weight: 300;
  justify-content: space-between;
  line-height: 160%;
  width: 100%;
  color: ${theme.disabled};
`;

const Left = styled.div`
display: block;
position: relative;
width: 100%;
float: left;
max-width: 500px;
overflow:hidden;
height:auto;
}
`;

const Disabled = styled.div`
  position: relative;
  width: 100%;
  &::after {
    content: "";
    display: block;
    background: ${theme.gray};
    opacity: 60%;
    height: 100%;
    position: absolute;
    border-radius: 2rem;
    right: 0;
    top: 0;
    width: 100%;
    z-index: 1;
  }
`;

const Ongoing = styled.p`
  background-color: #fff;
  border-radius: 6rem;
  color: ${theme.black};
  font-size: 1.6rem;
  font-weight: 500;
  left: 50%;
  line-height: 100%;
  padding: 0.9rem 1.6rem;
  position: absolute;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  z-index: 2;
`;

const Right = styled.div`
display: block;
position: relative;
width: 100%;
float: right;
max-width: 500px;
overflow:hidden;
height:auto;
}
`;

const Image = styled.div`
  background-image: url(${(props) => props.initialImg});
  background-size: contain;
  background-position: center;
  height: 60%;
  background-repeat: no-repeat;
  width: 60%;
  transition: background-image 0.3s ease-in-out;
`;

const Section2 = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Main3>
      <H1>WORK</H1>
      <WorkCon>
        <Pub>
          <H2Div>
            <H2>Publishing</H2>
          </H2Div>
          <ItemBox>
            <Link
              to={`/Work1`}
              data-aos="fade-left"
              className="block w-full pb-4 overflow-hidden"
            >
              <Right>
                <WorkItem>
                  <WorkImg bgColor="#FDE9E9">
                    <AfterBorder position="right" />
                    <Image initialImg={pin} />
                  </WorkImg>
                  <WorkTxt>
                    <WorkTitle>
                      <WorkStrong>로지올 홈페이지 개편</WorkStrong>
                      <WorkSpan>23.12 - 24.03</WorkSpan>
                    </WorkTitle>
                    <WorkP>Vue / Vuetify / scss</WorkP>
                  </WorkTxt>
                </WorkItem>
              </Right>
            </Link>
            <Link
              to={`/Work2`}
              data-aos="fade-right"
              className="block w-full py-4 overflow-hidden"
            >
              <Left>
                <WorkItem>
                  <WorkImg bgColor="#F2E482">
                    <Image initialImg={star} />
                    <AfterBorder position="left" />
                  </WorkImg>
                  <WorkTxt>
                    <WorkTitle>
                      <WorkStrong>로지웨이 홈페이지</WorkStrong>
                      <WorkSpan>23.06 - 23.09</WorkSpan>
                    </WorkTitle>
                    <WorkP>Vue / scss / jsp</WorkP>
                  </WorkTxt>
                </WorkItem>
              </Left>
            </Link>
            <Link
              to={`/Work3`}
              data-aos="fade-left"
              className="block w-full py-4 overflow-hidden"
            >
              <Right>
                <WorkItem>
                  <WorkImg bgColor="#EDE9D0">
                    <AfterBorder position="right" />
                    <Image initialImg={file} />
                  </WorkImg>
                  <WorkTxt>
                    <WorkTitle>
                      <WorkStrong>버튜피아</WorkStrong>
                      <WorkSpan>23.05 - 23.10</WorkSpan>
                    </WorkTitle>
                    <WorkP>React / styled-component / scss</WorkP>
                  </WorkTxt>
                </WorkItem>
              </Right>
            </Link>
            <Link
              data-aos="fade-right"
              className="block w-full py-4 overflow-hidden"
            >
              <Left>
                <Disabled>
                  <Ongoing>Ongoing</Ongoing>
                  <WorkItem>
                    <WorkImg bgColor="#D7F3FF">
                      <Image initialImg={location} />
                      <AfterBorder position="left" />
                    </WorkImg>
                    <WorkTxt>
                      <WorkTitle>
                        <WorkStrong>모모퀵 홈페이지</WorkStrong>
                        <WorkSpan>22.06 - 22.10</WorkSpan>
                      </WorkTitle>
                      <WorkP>Vue / css / git</WorkP>
                    </WorkTxt>
                  </WorkItem>
                </Disabled>
              </Left>
            </Link>
          </ItemBox>
        </Pub>
        <Pub>
          <H2Div>
            <H2 className="text-end">FrontEnd</H2>
          </H2Div>

          <Swiper
            data-aos="fade-up"
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.8,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2.4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Link to={`/Work5`} className="block w-full overflow-hidden">
                <Right>
                  <WorkItem>
                    <WorkImg bgColor="#FFBDA0">
                      <Image initialImg={setting} />
                    </WorkImg>
                    <WorkTxt>
                      <WorkTitle>
                        <WorkStrong>녹음 투두리스트</WorkStrong>
                        <WorkSpan>24.03 - 24.05</WorkSpan>
                      </WorkTitle>
                      <WorkP>React / styled-component / tsx</WorkP>
                    </WorkTxt>
                  </WorkItem>
                </Right>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={`/Work6`} className="block w-full overflow-hidden">
                <Right>
                  <WorkItem>
                    <WorkImg bgColor="#BBD3E9">
                      <Image initialImg={mobile} />
                    </WorkImg>
                    <WorkTxt>
                      <WorkTitle>
                        <WorkStrong>포켓몬 도감</WorkStrong>
                        <WorkSpan>24.01 - 24.03</WorkSpan>
                      </WorkTitle>
                      <WorkP>React / styled-component / jsp </WorkP>
                    </WorkTxt>
                  </WorkItem>
                </Right>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={`/Work7`} className="block w-full overflow-hidden">
                <Right>
                  <WorkItem>
                    <WorkImg bgColor="#C7FF9E">
                      <Image initialImg={mail} />
                    </WorkImg>
                    <WorkTxt>
                      <WorkTitle>
                        <WorkStrong>덕후 테스트</WorkStrong>
                        <WorkSpan>23.09 - 23.11</WorkSpan>
                      </WorkTitle>
                      <WorkP>React / scss / jsp</WorkP>
                    </WorkTxt>
                  </WorkItem>
                </Right>
              </Link>
            </SwiperSlide>
          </Swiper>
        </Pub>
      </WorkCon>
    </Main3>
  );
};

export default Section2;
