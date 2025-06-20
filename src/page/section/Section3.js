import React, {useEffect} from "react";
import theme from "../../scss/theme";
import styled, {keyframes} from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import {Link} from "react-router-dom";

// swiper
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Autoplay} from "swiper/modules";

// image
import Logiall from "../../assets/image/Wlogo/Logiall.png";
import Logiway from "../../assets/image/Wlogo/Logiway2.png";
import Virtupia from "../../assets/image/Wlogo/virtupia.png";
import Momoquick from "../../assets/image/Wlogo/momoquick.png";
import star from "../../assets/image/work/star.png";
import mail from "../../assets/image/work/mail.png";
import mobile from "../../assets/image/work/mobile.png";

// css
const Main3 = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 100%;
  display: block;
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

const Container = styled.div`
  position: relative;
  width: 300px;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40vh;
  overflow: hidden;
  transition: 0.5s;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const Anim1 = keyframes`
from {
  -webkit-mask-position: 100% 0;
  mask-position: 100% 0;
}
to {
  -webkit-mask-position: 0 0;
  mask-position: 0 0;
}
`;
const Anim2 = keyframes`
from {
  -webkit-mask-position: 0 0;
  mask-position: 0 0;
}
to {
  -webkit-mask-position: 100% 0;
  mask-position: 100% 0;
}`;

const Btn = styled.button`
  width: 101%;
  height: 100%;
  font-size: 40px;
  background: #f00;
  -webkit-mask: url("https://raw.githubusercontent.com/robin-dela/css-mask-animation/master/img/nature-sprite.png");
  mask: url("https://raw.githubusercontent.com/robin-dela/css-mask-animation/master/img/nature-sprite.png");
  -webkit-mask-size: 2300% 100%;
  mask-size: 2300% 100%;
  border: none;
  color: #000;
  cursor: pointer;
  animation: ${Anim2} 0.7s steps(22) forwards;

  &:hover {
    animation: ${Anim1} 0.7s steps(22) forwards;
  }
`;

const Mask = styled.span`
  position: absolute;
  color: #fff;
  text-align: center;
  width: 101%;
  font-weight: lighter;
  font-size: 40px;
  margin-top: 25px;
  overflow: hidden;
`;

const Section3 = () => {
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
                  <WorkImg bgColor="#FFE5DB">
                    <AfterBorder position="right" />
                    <Image initialImg={Logiall} />
                  </WorkImg>
                  <WorkTxt>
                    <WorkTitle>
                      <WorkStrong>생각대로 홈페이지 개편</WorkStrong>
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
                    <Image initialImg={Logiway} />
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
                  <WorkImg bgColor="#FDE9E9">
                    <AfterBorder position="right" />
                    <Image initialImg={Virtupia} />
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
              to={`/Work4`}
              data-aos="fade-right"
              className="block w-full py-4 overflow-hidden"
            >
              <Left>
                <WorkItem>
                  <WorkImg bgColor="#D7F3FF">
                    <Image initialImg={Momoquick} />
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
              </Left>
            </Link>
            <Link
              to={`/Work4_1`}
              data-aos="fade-left"
              className="block w-full py-4 overflow-hidden"
            >
              <Right>
                <WorkItem>
                  <WorkImg bgColor="#FDE9E9">
                    <AfterBorder position="right" />
                    <Image initialImg={Virtupia} />
                  </WorkImg>
                  <WorkTxt>
                    <WorkTitle>
                      <WorkStrong>TRIP DO</WorkStrong>
                      <WorkSpan>22.01 - 22.02</WorkSpan>
                    </WorkTitle>
                    <WorkP>HTML / CSS / jQuery / photoshop</WorkP>
                  </WorkTxt>
                </WorkItem>
              </Right>
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
                      <Image initialImg={mobile} />
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
                      <Image initialImg={star} />
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
      <Container>
        <Mask class="mask">HOVER</Mask>
        <Btn type="button" name="Hover">
          HOVER
        </Btn>
      </Container>
    </Main3>
  );
};

export default Section3;
