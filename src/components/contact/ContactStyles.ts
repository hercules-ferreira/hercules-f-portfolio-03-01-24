import styled from "styled-components";

const breakpoint = "1200px";

export const Box = styled.div`
  position: sticky;
  height: 48px;
  width: 45px;
  display: flex;
  align-items: center;
  padding: 5px;
  margin: 0.6rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.7s ease;

  &:hover {
    width: 200px;
    border-radius: 35px;
    color: #fff;
    box-shadow: 0 0 50px black;

    .icon {
      background: #fff;
      color: #3b3b3b;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.26);
      width: 30px;
      height: 28px;
    }
  }

  p {
    transform: translate(60px);
  }

  .icon {
    position: absolute;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    border-radius: 50%;
    margin-right: 10px;
    transition: all 0.4s ease;
  }
`;

export const BoxInsta = styled(Box)`
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 9999;
  background-color: #c32aa3;
  border-radius: 40%;

  &:hover {
    background-color: #b31591;
    box-shadow: 0 0 50px #b315917c;
  }

  @media (min-width: ${breakpoint}) {
    left: calc(50% + 600px);
  }
`;

export const BoxFacebook = styled(Box)`
  position: fixed;
  bottom: 64px;
  right: 10px;
  z-index: 9999;
  background-color: #1877f2;
  border-radius: 40%;

  &:hover {
    background-color: #0e559b;
    box-shadow: 0 0 50px #0e559b85;
  }

  @media (min-width: ${breakpoint}) {
    left: calc(50% + 600px);
  }
`;

export const BoxYoutube = styled(Box)`
  position: fixed;
  bottom: 116px;
  right: 10px;
  z-index: 9999;
  background-color: #f21d1d;
  border-radius: 40%;

  &:hover {
    background-color: #b31212;
    box-shadow: 0 0 50px #b3121280;
  }

  @media (min-width: ${breakpoint}) {
    left: calc(50% + 600px);
  }
`;
export const BoxWhats = styled(Box)`
  position: fixed;
  bottom: 168px;
  right: 10px;
  z-index: 9999;
  background-color: #25d366;
  border-radius: 40%;

  &:hover {
    background-color: #128c7e;
    box-shadow: 0 0 50px #128c7e7c;
  }

  @media (min-width: ${breakpoint}) {
    left: calc(50% + 600px);
  }
`;
