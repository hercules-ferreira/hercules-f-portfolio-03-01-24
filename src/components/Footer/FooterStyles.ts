import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: grid;
  grid-template-rows: repeat(4, auto);
  gap: 10px;
  text-align: center;
  background-color: #e1e1e6;
  color: var(--gray500);
`;

export const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 220px;
  width: 100%;
`;

export const LinkTitle = styled.h4`
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1rem;
  text-transform: uppercase;
  color: var(--gray900);
`;

export const LinkList = styled.ul`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: grid;
  grid-template-columns: repeat(3, minmax(85px, 220px));
  gap: 10px;
  padding: 5px 0;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto; /* Adiciona margem automática para centralizar */
  }
`;
export const LinkItem = styled.a`
  font-size: 0.9rem;
  line-height: 30px;
  color: var(--gray900);
  margin-bottom: 16px;
  transition: 0.3s ease;
  position: relative;
  left: 0;
`;

export const CompanyContainer = styled.div`
  display: flex;
  margin: 0 auto;
`;

export const Slogan = styled.p`
  color: var(--gray900);
  min-width: 280px;
  letter-spacing: 0.02em;
  font-size: 18px;
  line-height: 30px;
  padding: 1rem;
`;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Social Icons
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

export const Contact = styled.span`
  color: var(--gray900);

  &:hover {
    background-color: var(--gray100);
    transform: scale(1.1);
    left: 6px;
    cursor: pointer;
  }
`;
