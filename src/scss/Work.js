import styled from "styled-components";
import theme from "../scss/theme";

export const WorkCon = styled.div`
  width: 100%;
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0px 64px;
  min-height: 100vh;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  @media ${theme.md} {
    padding: 0px ${({theme}) => theme.padding.md};
  }
`;

export const WorkDiv = styled.div`
  margin-top: 76px;
  flex: 1;
`;

export const WorkImgDiv = styled.div`
  border-radius: 16px;
  border: 1px solid ${({theme}) => theme.gray};
  display: flex;
  align-items: center;
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
`;

export const WorkTxt = styled.div`
  margin: ${theme.padding.lg} 0 64px;
`;
export const WorkTxtUp = styled.div``;
export const WorkDetail = styled.span`
  color: ${({theme}) => theme.gray};
  font-size: 1rem;
  font-weight: 400;
  line-height: 160%;
  text-transform: uppercase;
`;
export const WorkTitle = styled.h2`
  font-weight: 700;
  line-height: 120%;
  word-break: keep-all;
  font-size: 2.5rem;
  color: ${({theme}) => theme.main};
  padding: ${theme.padding.sm} 0;
  @media ${theme.md} {
    font-size: 2rem;
  }
`;
export const WorkTxtDown = styled.div`
  color: ${({theme}) => theme.disabled};
`;
export const WorkSpan = styled.span`
  margin-bottom: ${theme.padding.sm};
  display: block;
`;
export const WorkP = styled.p`
  color: ${({theme}) => theme.black};
  font-size: 1.125rem;
  margin-bottom: ${theme.padding.md};
`;

export const WorkBtnDiv = styled.div``;
export const WorkBtn = styled.button`
  border: 1px solid ${({theme}) => theme.main};
  border-radius: 4px;
  color: ${({theme}) => theme.main};
  display: block;
  padding: 16px 20px;
  transition: all 0.2s;
  cursor: pointer;
  margin: ${(props) => props.margin};
  font-size: 1.25rem;
  width: 128px;
`;
export const GitBtn = styled.button`
  border: 1px solid ${({theme}) => theme.disabled};
  border-radius: 4px;
  color: ${({theme}) => theme.disabled};
  display: block;
  padding: 16px 20px;
  transition: all 0.2s;
  cursor: pointer;
  margin: ${(props) => props.margin};
  font-size: 1.25rem;
  width: 128px;
`;
export const DetailView = styled.div`
  margin-top: ${theme.padding.xl};
`;
export const DetailDiv = styled.div`
  margin-top: ${theme.padding.md};
`;
export const ViewPic1 = styled.div``;
export const ViewPic2 = styled.div``;
