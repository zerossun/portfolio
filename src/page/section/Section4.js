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
import DoumImg from "../../assets/image/work/doum.png";
import KiaImg from "../../assets/image/work/kia.png";
import Todolist from "../../assets/Detail/Todo1.png";
import DuckTest from "../../assets/Detail/DuckTest.png";

// css
const Main3 = styled.div`
  width: 100%;
  margin: 120px auto 240px;
  height: 100%;
  display: block;
  @media ${theme.md} {
    height: auto;
  }
`;

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const Strong = styled.strong`
  word-break: keep-all;
  white-space: normal;
  width: 100%;
  display: block;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
`;

const ProjectCard = styled.div`
  flex: 1 1 45%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 1.5rem;
  max-width: 600px;
  box-sizing: border-box;

  @media ${theme.md} {
    flex: 1 1 100%;
    max-width: 100%;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 350px;
  border: 1px solid ${theme.main};
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 6px;
  }
  @media ${theme.md} {
    height: 100%;
  }
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0.5rem 0 1rem 0;
  display: flex;
  align-items: center;
`;

const Meta = styled.p`
  margin: 0.3rem 0;
  font-size: 1rem;

  strong {
    font-weight: 700;
  }
`;

const Label = styled.span`
  font-weight: 600;
  color: #666;
  span {
    font-weight: 400;
  }
`;

const Tag = styled.span`
  display: inline-block;
  padding: 0.2rem 1rem;
  margin-left: 0.5rem;
  font-size: 0.8rem;
  font-weight: 400;
  border-radius: 16px;

  &.design {
    background: #101010;
    color: #fff;
  }
  &.front {
    background: #8E1616;
    color: #fff;bbb
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  @media ${theme.sm} {
    flex-direction: column;
  }
`;

const Button = styled.a`
  flex: 1;
  padding: 10px;
  font-size: 1rem;
  text-align: center;
  text-decoration: none;
  color: #111;
  border: 1px solid #666;
  background: white;
  cursor: pointer;
  border-radius: 6px;
  transition: background 0.2s ease;

  &:hover {
    background: #eee;
  }
`;

const Section4 = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Main3>
      <Strong>PROJECT</Strong>
      <Container>
        <ProjectCard>
          <ImageWrapper>
            <img src={DoumImg} alt="doum" />
          </ImageWrapper>
          <Title>
            DOUM <Tag className="design">UI/UX Design</Tag>
          </Title>
          <Meta>
            <Label>
              Tool | <span>Figma ∙ Illustrator ∙ Photoshop</span>
            </Label>
          </Meta>
          <Meta>
            <Label>
              작업기한 | <span>2025.01 ~ 2025.05</span>
            </Label>
          </Meta>
          <ButtonGroup>
            <Button
              href="https://drive.google.com/file/d/1bjXwuBcfhLvpP5NTY4vCGDDZyaK14Bc5/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              자세히 보기
            </Button>
            <Button
              href="https://www.figma.com/design/bkpDoQnfZ17gvn4oRNMb2d/%ED%99%94%EA%B8%882_%EC%9B%90%EC%84%A0%EC%98%81_%EC%8B%A0%EA%B7%9C%EC%95%B1-%EC%95%88%EC%A0%84%EC%95%B1-_%EB%AA%A8%EB%B0%94%EC%9D%BC?node-id=874-7371&t=IzyBgxVrbDMfmyWV-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Figma 이동
            </Button>
          </ButtonGroup>
        </ProjectCard>

        <ProjectCard>
          <ImageWrapper>
            <img src={KiaImg} alt="kia" />
          </ImageWrapper>
          <Title>
            Kia Tigers 웹 리디자인 <Tag className="design">UI/UX Design</Tag>
          </Title>
          <Meta>
            <Label>
              Tool | <span>Figma ∙ Illustrator ∙ Photoshop</span>
            </Label>
          </Meta>
          <Meta>
            <Label>
              작업기한 | <span>2024.10 ~ 2024.12</span>
            </Label>
          </Meta>
          <ButtonGroup>
            <Button
              href="https://drive.google.com/file/d/1NSDJAknjHkz226hie_pZXimp_4248o4L/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              자세히 보기
            </Button>
            <Button
              href="https://www.figma.com/design/sK3EmMlAODxrSz4DNK7Ewg/%EC%9B%90%EC%84%A0%EC%98%81_%EA%B8%B0%EC%95%84-%ED%83%80%EC%9D%B4%EA%B1%B0%EC%A6%88_web?node-id=1165-8608&t=N4RPKoDTF3egpC35-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Figma 이동
            </Button>
          </ButtonGroup>
        </ProjectCard>

        <ProjectCard>
          <ImageWrapper>
            <img src={Todolist} alt="Todolist" />
          </ImageWrapper>
          <Title>
            Rec.TODOLIST <Tag className="front">FrontEnd</Tag>
          </Title>
          <Meta>
            <Label>
              Tool | <span>React ∙ styled-component</span>
            </Label>
          </Meta>
          <Meta>
            <Label>
              작업기한 | <span>2024.03 ~ 2024.05</span>
            </Label>
          </Meta>
          <ButtonGroup>
            <Button href="/Work5">자세히 보기</Button>
            <Button
              href="https://rectodolist.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              사이트 이동
            </Button>
          </ButtonGroup>
        </ProjectCard>

        <ProjectCard>
          <ImageWrapper>
            <img src={DuckTest} alt="DuckTest" />
          </ImageWrapper>
          <Title>
            덕후판독기 <Tag className="front">FrontEnd</Tag>
          </Title>
          <Meta>
            <Label>
              Tool | <span>React ∙ SCSS</span>
            </Label>
          </Meta>
          <Meta>
            <Label>
              작업기한 | <span>2023.09 ~ 2023.11</span>
            </Label>
          </Meta>
          <ButtonGroup>
            <Button href="/Work7">자세히 보기</Button>
            <Button
              href="https://virtupiaotakutest.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              사이트 이동
            </Button>
          </ButtonGroup>
        </ProjectCard>
      </Container>
    </Main3>
  );
};

export default Section4;
