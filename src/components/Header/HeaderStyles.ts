import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;

const rotate180 = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(-30deg);
  }
`;

export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 0rem;

  img {
    width: 6rem;
    height: auto;
    animation: ${rotate180} 20s linear infinite;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;

    img {
      width: 4rem;
      height: 3rem;
    }
  }
`;

export const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 5;
  display: flex;
  justify-content: space-around;
  padding-top: 1rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 2 / 2 / 3 / 6;
  }

  @media ${(props) => props.theme.breakpoints.ssm} {
    grid-area: 2 / 1 / 3 / 7;
  }
`;

export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  grid-column-gap: 0.5rem;
  align-items: center;
  justify-content: end;
  cursor: pointer;

  img {
    width: 1.3rem;
    margin: 0.5rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 5 / 2 / 6;
  }
`;

export const Div4 = styled.div`
  grid-area: 1 / 6 / 2 / 7;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 6 / 2 / 7;
  }
`;

export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: var(--gray900);
  padding: 0.2rem;
  transition: 0.4s ease;
  &:hover {
    background-color: var(--gray-000);
    color: var(--gray500);
    opacity: 1;
    cursor: pointer;
    border-radius: 4px;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    padding: 0.5rem;
    font-size: 1.2rem;
  }
`;

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: var(--gray900);
  border-radius: 50px;
  padding: 4px;
  &:hover {
    background-color: var(--gray400);
    transform: scale(1.1);
    cursor: pointer;
  }

  svg {
    font-size: 2.5rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    svg {
      font-size: 2rem;
    }
  }
`;
