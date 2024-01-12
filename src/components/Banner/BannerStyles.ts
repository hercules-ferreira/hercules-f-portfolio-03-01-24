import styled from "styled-components";

export const BannerContainer = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
  width: 100%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    height: auto;
    max-width: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  max-width: 100%;
  transition: transform 0.5s ease;

  @media (max-width: 768px) {
    max-height: auto;
    align-items: center;
    justify-content: center;
  }
`;

export const IndicatorContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const Indicator = styled.div<{ active: boolean | string }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.active === true || props.active === "true" ? "#007bff" : "#ccc"};
  margin: 0 5px;
  margin-bottom: 2rem;

  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;
