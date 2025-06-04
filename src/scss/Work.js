import styled from "styled-components";
import theme from "../scss/theme";

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
background:#f9f9f9;
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
  margin-top: 10rem;
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
  font-size: 1rem;
  font-weight: 400;
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
export const DetailView = styled.div`
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
