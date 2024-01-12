import styled from "styled-components";
interface ProjectInnerProps {
  isFlipped?: boolean;
}

export interface Project {
  image: string;
  text: string;
  moreInfo?: React.ReactNode;
}
interface SectionTitleProps {
  main?: boolean;
}

export const SectionTitle = styled.h2<SectionTitleProps>`
  font-weight: 800;
  font-size: ${(props) => (props.main ? "65px" : "56px")};
  line-height: ${(props) => (props.main ? "72px" : "56px")};
  width: max-content;
  max-width: 100%;
  background: linear-gradient(121.57deg, #000 18.77%, var(--gray200) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  margin-left: 3rem;
  padding: ${(props) => (props.main ? "58px 0 16px" : "0")};

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${(props) => (props.main ? "56px" : "48px")};
    line-height: ${(props) => (props.main ? "56px" : "48px")};
    margin-bottom: 12px;
    padding: ${(props) => (props.main ? "40px 0 12px" : "0")};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 32px;
    line-height: 40px;
    font-size: ${(props) => (props.main ? "28px" : "32px")};
    line-height: ${(props) => (props.main ? "32px" : "40px")};
    margin-bottom: 8px;
    padding: ${(props) => (props.main ? "16px 0 8px" : "0")};
    max-width: 100%;
  }
`;

export const ProjectsContainer = styled.div`
  display: grid;
  cursor: pointer;
  gap: 20px;
  max-width: 1200px;
  margin: 1rem 2rem;
  width: calc(100% - 4rem);

  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: calc(100% - 4rem);
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    width: calc(100% - 4rem);
  }
  @media (max-width: 300px) {
    grid-template-columns: 1fr;
    width: calc(100% - 4rem);
  }
`;

export const ProjectContainer = styled.div`
  position: relative;
  width: 100%;
  height: 32.5rem;
  border: 1px solid #ccc;
  overflow: hidden;
  perspective: 1000px;
  border-radius: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ProjectInner = styled.div<ProjectInnerProps>`
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.5s ease-in-out;
  transform: ${(props) => (props.isFlipped ? "rotateY(180deg)" : "none")};
`;

export const ProjectFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

export const ProjectBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 180px;
`;

export const ProjectText = styled.p`
  text-align: center;
  padding: 10px;
  font-size: 1rem;
  color: var(--gray500);
  line-height: 1.5;

  span {
    color: red;
    font-weight: 600;
  }
`;

export const MoreInfoText = styled.p`
  line-height: 1.5;
  line-height: 1.5;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  font-size: 18px;
  max-width: 400px;
  width: 100%;
  span {
    font-weight: 600;
    color: red;
  }
`;

export const LearnMoreButton = styled.button`
  position: absolute;
  bottom: 10px;
  left: 50%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  transform: translateX(-50%);
`;
