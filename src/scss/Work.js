import styled from "styled-components";
import theme from "../scss/theme";

export const DevicePc = styled.br`
  display: block;
  @media ${theme.sm} {
    display: none;
  }
`;

export const DeviceOnlyPc = styled.br`
  display: block;
  @media ${theme.md} {
    display: none;
  }
  @media ${theme.sm} {
    display: none;
  }
`;

export const DeviceM = styled.br`
  display: none;
  @media ${theme.sm} {
    display: block;
  }
`;

export const WorkCon = styled.div`
  width: 100%;
  position: relative;
  max-width: 1280px;
  margin: 180px auto 0;
  padding: 0px 64px;
  min-height: 100vh;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  @media ${theme.md} {
    padding: 0px ${({theme}) => theme.padding.md};
    margin: 60px auto 0;
  }
  @media ${theme.sm} {
    padding: 0 24px;
  }
`;

export const WorkDiv = styled.div`
  margin-top: 76px;
  flex: 1;
`;

export const WorkImgDiv = styled.div`
  border-radius: 16px;
  border: 1px solid #999;
  display: flex;
  align-items: center;
  height:100%;
  padding:1rem 0;
}
`;

export const WorkPic = styled.picture`
  position: relative;
  width: 100%;
`;

export const WorkImg = styled.img`
  border-radius: 16px;
  width: 100%;
  height: 100%;
  object-fit: contain;
  vertical-align: top;
  max-height: 650px;
  padding: 0.5rem 0;
`;

export const WorkTxt = styled.div`
  margin-top: 8rem;
  @media ${theme.sm} {
    margin-top: 60px;
  }
`;
export const WorkTxtUp = styled.div``;
export const SubTxt = styled.div`
  display: inline-flex;
  align-items: baseline;
  justify-content: flex-start;
  gap: 0.5rem;
  @media ${theme.md} {
    display: block;
  }
`;
export const WorkDetail = styled.span`
  color: ${({theme}) => theme.sub1};
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 160%;
  text-transform: uppercase;
`;
export const WorkTitle = styled.h2`
  font-weight: 700;
  line-height: 120%;
  word-break: keep-all;
  font-size: 3rem;
  color: ${({theme}) => theme.black};
  padding-bottom: 0.65rem;
  // border-bottom: 1px solid #666;
  @media ${theme.md} {
    font-size: 2rem;
  }
  @media ${theme.sm} {
    font-size: 28px;
  }
`;
export const WorkTxtDown = styled.div`
  margin-top: 1.5rem;
  color: #999;
`;
export const WorkSpan = styled.span`
  // margin-bottom: ${theme.padding.sm};
  display: block;
  color: #666;
`;
export const WorkP = styled.p`
  color: ${({theme}) => theme.black};
  font-size: 1.125rem;
  line-height: 200%;
  word-break: keep-all;
  @media ${theme.sm} {
    font-size: 16px;
  }
`;

export const WorkBtnDiv = styled.div`
  gap: 2rem;
`;
export const WorkBtn = styled.button`
  border: 1px solid #666;
  border-radius: 4px;
  color: #666;
  display: block;
  padding: 16px 20px;
  transition: all 0.2s;
  cursor: pointer;
  margin: 5rem auto;
  text-align: center;
  font-size: 1.25rem;
  width: 60%;
  &:hover {
    background: #eee;
  }
  @media ${theme.sm} {
    font-size: 16px;
  }
`;
export const GitBtn = styled.button`
  border: 1px solid #666;
  border-radius: 4px;
  color: #666;
  display: block;
  padding: 16px 20px;
  transition: all 0.2s;
  cursor: pointer;
  margin: 5rem auto;
  font-size: 1.25rem;
  width: 60%;
  &:hover {
    background: #eee;
  }
`;
export const ImproveDetailView = styled.div`
  margin-top: ${theme.padding.xl};
`;
export const DetailDiv = styled.div`
  margin-top: ${theme.padding.md};
`;
export const ViewPic1 = styled.div`
  max-height: 650px;
  @media ${theme.md} {
    max-height: 100%;
  }
`;
export const ViewPic2 = styled.div``;
export const Video = styled.video`
  border-radius: 16px;
  height: 650px;
  @media ${theme.md} {
    height: 100%;
  }
`;

export const Stack = styled.div`
  margin-bottom: 0.4rem;
  span {
    font-size: 0.8rem;
    padding: 6px 10px;
    border-radius: 16px;
    border: 0.5px solid #666;
    color: #666;
    margin-right: 6px;
  }
`;

//renewal : 260611

export const DetailView = styled.div`
  width: 100%;
  margin-top: 80px;

  @media ${({theme}) => theme.md} {
    margin-top: 48px;
  }
`;

export const InfoIcon = styled.div`
  svg {
    font-size: 24px;
    color: ${({theme}) => theme.black};
  }
`;

export const ImproveInfoBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 72px;
  padding: 36px 32px;
  border: 1px solid #e6e6e6;
  border-radius: 18px;
  background: #fff;

  @media ${({theme}) => theme.lg} {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px 0;
  }

  @media ${({theme}) => theme.sm} {
    grid-template-columns: 1fr;
    padding: 24px;
  }
`;

export const ImproveInfoItem = styled.div`
  padding: 0 28px;
  border-right: 1px solid #e6e6e6;

  &:last-child {
    border-right: 0;
  }

  @media ${({theme}) => theme.lg} {
    &:nth-child(2n) {
      border-right: 0;
    }
  }

  @media ${({theme}) => theme.sm} {
    padding: 0;
    border-right: 0;
  }
`;

export const ImproveInfoTitle = styled.h4`
  margin-bottom: 18px;
  font-size: 24px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  color: ${({theme}) => theme.black};

  @media ${({theme}) => theme.sm} {
    font-size: 17px;
  }
`;

export const ImproveInfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  li {
    position: relative;
    padding-left: 12px;
    font-size: 16px;
    line-height: 1.6;
    color: ${({theme}) => theme.black};

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 10px;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: ${({theme}) => theme.black};
    }
  }

  @media ${({theme}) => theme.sm} {
    li {
      font-size: 14px;
    }
  }
`;

export const ImproveInfoText = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.7;
  color: ${({theme}) => theme.black};
`;

export const ImproveTitle = styled.h3`
  margin-bottom: 24px;
  font-size: 28px;
  font-weight: 800;
  color: ${({theme}) => theme.black};

  @media ${({theme}) => theme.sm} {
    margin-bottom: 18px;
    font-size: 22px;
  }
`;

export const CaseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 72px;
  margin-top: 16px;
  @media ${({theme}) => theme.lg} {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  @media ${({theme}) => theme.md} {
    margin-bottom: 56px;
  }
`;

export const CaseCard = styled.article`
  padding: 28px;
  border: 1px solid #e6e6e6;
  border-radius: 18px;
  background: #fff;

  @media ${({theme}) => theme.sm} {
    padding: 22px;
    border-radius: 14px;
  }
`;

export const CaseTop = styled.div`
  margin-bottom: 12px;
`;

export const CaseNum = styled.span`
  display: inline-block;
  margin-right: 10px;
  font-size: 24px;
  font-weight: 800;
  color: #e60012;

  @media ${({theme}) => theme.sm} {
    font-size: 20px;
  }
`;

export const CaseTitle = styled.h4`
  display: inline;
  font-size: 20px;
  font-weight: 800;
  line-height: 1.5;
  color: ${({theme}) => theme.black};

  @media ${({theme}) => theme.sm} {
    font-size: 18px;
  }
`;

export const CaseDesc = styled.p`
  margin-bottom: 24px;
  font-size: 15px;
  line-height: 1.8;
  color: ${({theme}) => theme.black};

  @media ${({theme}) => theme.sm} {
    font-size: 14px;
  }
`;

export const CaseImgBox = styled.div`
  overflow: hidden;
  margin-bottom: 24px;
  border-radius: 12px;
  background: ${({theme}) => theme.gray};

  picture {
    display: block;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

export const CaseList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 9px;

  li {
    position: relative;
    padding-left: 14px;
    font-size: 15px;
    line-height: 1.6;
    color: ${({theme}) => theme.black};

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 10px;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: ${({theme}) => theme.black};
    }
  }

  @media ${({theme}) => theme.sm} {
    li {
      font-size: 14px;
    }
  }
`;

export const SubWorkSection = styled.section`
  margin-bottom: 72px;

  @media ${({theme}) => theme.md} {
    margin-bottom: 56px;
  }
`;

export const SubWorkList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px 24px;
  padding: 24px 28px;
  border-radius: 18px;
  background: #f7f7f7;

  li {
    font-size: 15px;
    line-height: 1.6;
    color: ${({theme}) => theme.black};

    &::before {
      content: "✓";
      display: inline-block;
      margin-right: 8px;
      color: #e60012;
      font-weight: 800;
    }
  }

  @media ${({theme}) => theme.lg} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${({theme}) => theme.sm} {
    grid-template-columns: 1fr;
    padding: 22px;
    border-radius: 14px;

    li {
      font-size: 14px;
    }
  }
`;

export const ApproachSection = styled.section`
  width: 100%;
`;

export const ApproachGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media ${({theme}) => theme.lg} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${({theme}) => theme.sm} {
    grid-template-columns: 1fr;
  }
`;

export const ApproachCard = styled.article`
  padding: 30px 26px;
  border: 1px solid #e6e6e6;
  border-radius: 18px;
  background: #fff;

  @media ${({theme}) => theme.sm} {
    padding: 24px 22px;
    border-radius: 14px;
  }
`;

export const ApproachTitle = styled.h4`
  margin-bottom: 12px;
  font-size: 18px;
  font-weight: 800;
  color: ${({theme}) => theme.black};

  @media ${({theme}) => theme.sm} {
    font-size: 17px;
  }
`;

export const ApproachText = styled.p`
  font-size: 14px;
  line-height: 1.7;
  color: ${({theme}) => theme.sub1};
`;

export const PortfolioImprove = styled.section`
  width: 100%;
  margin-top: 100px;
  color: ${({theme}) => theme.black};

  @media ${({theme}) => theme.md} {
    margin-top: 64px;
  }
`;

export const ImproveHead = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 32px;

  @media ${({theme}) => theme.sm} {
    gap: 10px;
    margin-bottom: 24px;
  }
`;

export const ImproveNum = styled.span`
  font-size: 42px;
  font-weight: 800;
  color: #e60012;

  @media ${({theme}) => theme.sm} {
    font-size: 30px;
  }
`;

export const ImproveMainTitle = styled.h3`
  font-size: 36px;
  font-weight: 800;
  line-height: 1.35;

  @media ${({theme}) => theme.sm} {
    font-size: 24px;
  }
`;

export const ImproveDesc = styled.p`
  max-width: 980px;
  margin-bottom: 72px;
  font-size: 18px;
  line-height: 2;
  word-break: keep-all;

  @media ${({theme}) => theme.md} {
    margin-bottom: 48px;
    font-size: 15px;
    line-height: 1.8;
  }
`;

export const ImproveTwoCol = styled.div`
  display: flex;
  align-items: stretch;
  gap: 56px;
  margin: 120px 0 96px;

  @media ${({theme}) => theme.lg} {
    flex-direction: column;
    gap: 48px;
    margin-bottom: 72px;
  }
  @media ${({theme}) => theme.sm} {
    margin: 90px 0 60px;
  }
`;

export const ImproveColumn = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
`;

export const GuideImageWrap = styled.div`
  width: 100%;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

export const ImproveSubTitle = styled.h4`
  margin-bottom: 10px;
  font-size: 22px;
  font-weight: 800;
  line-height: normal;

  @media ${({theme}) => theme.sm} {
    font-size: 18px;
  }
`;

export const ImproveText = styled.p`
  margin-bottom: 32px;
  font-size: 16px;
  line-height: 1.8;
  color: ${({theme}) => theme.black};
  word-break: keep-all;

  @media ${({theme}) => theme.sm} {
    margin-bottom: 24px;
    font-size: 14px;
  }
`;

export const StructureImageBox = styled.div`
  width: 100%;
  overflow: hidden;
  border: 1px solid #e5e5e5;
  border-radius: 12px;
  background: #fff;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

export const MethodList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  flex: 1;

  li {
    padding: 24px;
    border: 1px solid #e5e5e5;
    border-radius: 10px;
    background: #fafafa;
    display: flex;
    align-items: center;
    gap: 16px;
    flex: 1;
    @media ${({theme}) => theme.sm} {
      padding: 24px 20px;
    }
  }

  div {
    strong {
      display: block;
      font-size: 18px;
      font-weight: 800;
      line-height: normal;
      margin-bottom: 6px;
      @media ${({theme}) => theme.sm} {
        font-size: 16px;
        margin-bottom: 4px;
      }
    }

    span {
      display: block;
      font-size: 16px;
      line-height: normal;
      color: ${({theme}) => theme.sub1};
      @media ${({theme}) => theme.sm} {
        font-size: 14px;
      }
    }
  }
`;

export const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    font-size: 36px;
    color: #222;
  }

  @media ${({theme}) => theme.sm} {
    svg {
      font-size: 30px;
    }
  }
`;

export const CodeSection = styled.div`
  margin-bottom: 96px;

  @media ${({theme}) => theme.md} {
    margin-bottom: 72px;
  }
`;

export const CodeBox = styled.pre`
  overflow-x: auto;
  padding: 40px;
  border-radius: 12px;
  background: #1f1f1f;
  color: #eaeaea;
  font-size: 14px;
  line-height: 1.8;
  white-space: break-spaces;

  @media ${({theme}) => theme.sm} {
    padding: 24px;
    font-size: 12px;
    border-radius: 10px;
  }
`;

export const ExampleSection = styled.div`
  margin-bottom: 80px;
`;

export const ExampleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;

  @media ${({theme}) => theme.sm} {
    grid-template-columns: 1fr;
  }
`;

export const ExampleCard = styled.div`
  margin: 0;

  img {
    display: block;
    width: 100%;
    border-radius: 10px;
    background: #f3f3f3;
  }

  p {
    margin-top: 14px;
    font-size: 14px;
    text-align: center;
    color: ${({theme}) => theme.sub1};
  }
  @media ${({theme}) => theme.sm} {
    &.last-card {
      display: none;
    }
  }
`;
//////

export const LandingSection = styled.section`
  margin-bottom: 120px;

  @media ${({theme}) => theme.sm} {
    margin-bottom: 90px;
  }
`;

export const LandingTitleWrap = styled.div``;

export const ProcessGrid = styled.div`
  display: flex;

  gap: 36px;
  margin-bottom: 24px;

  @media ${({theme}) => theme.sm} {
    gap: 12px;
    flex-wrap: wrap;
  }
`;

export const ProcessCard = styled.div`
  padding: 20px 16px;
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  background: #fff;
  position: relative;
  flex: 1;
  strong {
    display: block;
    margin-bottom: 4px;
    font-size: 12px;
    font-weight: 800;
    color: #999;
    line-height: normal;
  }

  h4 {
    font-size: 18px;
    line-height: 150%;
    font-weight: 800;
    word-break: keep-all;
  }

  p {
    font-size: 16px;
    line-height: 1.5;
    word-break: keep-all;
    color: ${({theme}) => theme.sub1};
  }

  @media ${({theme}) => theme.sm} {
    padding: 12px;
    flex: 1 1 calc((100% - 32px) / 3);

    &:nth-child(4),
    &:nth-child(5) {
      flex: 1 1 calc((100% - 16px) / 2);
    }

    h4 {
      font-size: 16px;
    }

    p {
      font-size: 14px;
    }
  }
`;

export const ProcessArrow = styled.span`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  right: -30px;
  justify-content: center;
  font-size: 32px;
  color: #bbb;
  @media ${({theme}) => theme.sm} {
    display: none;
  }
`;
export const MuiIcon = styled.div`
  display: flex;
  align-items: left;
  justify-content: flex-start;
  flex-shrink: 0;
  margin-bottom: 12px;
  svg {
    font-size: 36px;
    color: #222;
  }

  @media ${({theme}) => theme.sm} {
    svg {
      font-size: 30px;
    }
  }
`;
export const PreviewSection = styled.div`
  display: flex;
  gap: 32px;
  align-items: flex-start;
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  background: #fff;
  padding: 24px;

  @media ${({theme}) => theme.sm} {
    flex-direction: column;
    gap: 24px;
    padding: 16px;
  }
`;

export const PreviewPc = styled.div`
  p {
    display: block;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 12px;
  }
  img {
    display: block;
    width: 100%;
    object-fit: cover;
    object-position: top;
    border-radius: 6px;
  }
  div {
    max-height: 360px;
    border: 1px solid #f1f1f1;
    overflow: hidden;
    border-radius: 6px;
  }
`;

export const PreviewMobileWrap = styled.div`
  img {
    width: calc(50% - 8px);
    border-radius: 6px;
    object-fit: cover;
    object-position: top;
    border: 1px solid #f1f1f1;
  }
  div {
    display: flex;
    justify-content: flex-start;
    gap: 16px;
    max-height: 360px;
    border-radius: 6px;
    overflow: hidden;
  }
  p {
    display: block;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 12px;
  }
  @media ${({theme}) => theme.sm} {
    div {
      gap: 12px;
    }
    img {
      width: calc(50% - 6px);
    }
  }
`;

export const PointGrid = styled.div`
  display: flex;

  gap: 16px;

  @media ${({theme}) => theme.sm} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const PointCard = styled.div`
  padding: 24px;
  flex: 1;
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  background: #fff;

  h4 {
    margin-bottom: 8px;
    font-size: 18px;
    font-weight: 800;
    line-height: normal;
    word-break: keep-all;
  }

  p {
    word-break: keep-all;
    font-size: 16px;
    line-height: 1.5;
    color: ${({theme}) => theme.sub1};
  }

  @media ${({theme}) => theme.sm} {
    padding: 16px;

    h4 {
      font-size: 16px;
    }

    p {
      font-size: 14px;
    }
  }
`;

export const EzenCaseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media ${({theme}) => theme.sm} {
    grid-template-columns: 1fr;
  }
`;

export const EzenCaseCard = styled.a`
  overflow: hidden;
  border: 1px solid #e5e5e5;
  border-radius: 16px;
  background: #fff;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 1.6rem 4rem rgba(0, 0, 0, 0.08);
  }
`;

export const CaseThumb = styled.div`
  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

export const CaseBody = styled.div`
  padding: 16px;

  h4 {
    margin-bottom: 8px;
    font-size: 18px;
    font-weight: 800;
    line-height: 1.4;
    color: ${({theme}) => theme.black};
  }

  p {
    margin-bottom: 16px;
    font-size: 16px;
    line-height: 1.5;
    color: ${({theme}) => theme.sub1};
  }

  @media ${({theme}) => theme.sm} {
    padding: 12px;

    h4 {
      font-size: 16px;
    }

    p {
      font-size: 14px;
    }
  }
`;

export const CaseTagWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;

  span {
    padding: 6px 16px;
    border-radius: 999px;
    background: #f4f6f8;
    font-size: 12px;
    font-weight: 700;
    color: ${({theme}) => theme.sub1};
  }
`;

export const SummarySection = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  @media ${({theme}) => theme.md} {
    flex-direction: column;
    gap: 18px;
  }
`;

export const SummaryQuote = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 24px;
  border-radius: 12px;
  background: #fff;
  width: 40%;
  position: relative;

  p {
    padding-left: 16px;
    font-size: 16px;
    word-break: keep-all;
  }
  @media ${({theme}) => theme.md} {
    width: 100%;
  }
  @media ${({theme}) => theme.sm} {
    padding: 36px;
    width: 100%;
    p {
      font-size: 14px;
      padding-left: 0;
      line-height: 1.8;
      text-align: center;
    }
  }
`;

export const DotLeft = styled.span`
  transform: translate(-50%, -50%);
  position: absolute;
  font-size: 64px;
  color: #b80211;
  top: 22%;
  left: 4%;
  font-family: "D2Coding";
  @media ${({theme}) => theme.sm} {
    top: 52px;
    left: 4%;
    font-size: 54px;
  }
`;
export const DotRight = styled.span`
  transform: translate(-50%, -50%);
  position: absolute;
  font-size: 64px;
  font-family: "D2Coding";
  color: #b80211;
  top: 96%;
  left: 94%;
  @media ${({theme}) => theme.sm} {
    top: 98%;
    left: 93%;
    font-size: 54px;
  }
`;
export const SummaryGrid = styled.div`
  display: flex;
  gap: 12px;
  width: 55%;
  @media ${({theme}) => theme.md} {
    width: 100%;
  }
  @media ${({theme}) => theme.sm} {
    width: 100%;
    flex-direction: column;
  }
`;

export const SummaryCard = styled.div`
  flex: 1 1 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
  justify-content: center;
  padding: 18px;
  border: 1px solid #e5e5e5;
  border-radius: 12px;
  background: #fff;
  text-align: center;

  strong {
    word-break: keep-all;
    font-size: clamp(20px, 4vw, 36px); 
    font-weight: 800;
    line-height: 1;
    white-space: nowrap;
  }
  }

  span {
    line-height: 1.35;
    word-break: keep-all;
    font-size: 16px;
    color: ${({theme}) => theme.sub1};
  }

  @media ${({theme}) => theme.sm} {
    strong {
      font-size: clamp(16px, 5vw, 30px);
    }

    span {
      font-size: 14px;
    }
  }
`;
