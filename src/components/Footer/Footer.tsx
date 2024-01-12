import {
  FooterContainer,
  LinkTitle,
  LinkColumn,
  LinkList,
  LinkItem,
  CompanyContainer,
  Slogan,
  SocialContainer,
  SocialIcons,
  Contact,
} from "./FooterStyles";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export const Footer = () => {
  return (
    <FooterContainer>
      <LinkList>
        <LinkColumn>
          <LinkTitle>
            <span> Call </span>
          </LinkTitle>
          <LinkItem href="tel:(11) 948490988">
            <Contact>(11) 948490988</Contact>
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>
            <span>Email</span>
          </LinkTitle>

          <LinkItem href="mailto:herculesholiveira@hotmail.com">
            <Contact>herculesholiveira@hotmail.com</Contact>
          </LinkItem>
        </LinkColumn>
      </LinkList>

      <CompanyContainer>
        <Slogan>Passionate modernity and technology</Slogan>
      </CompanyContainer>

      <SocialContainer>
        <SocialIcons
          href="https://github.com/hercules-ferreira"
          target=" _blank"
        >
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons
          href="https://www.linkedin.com/in/hercules-ferreira/"
          target="_blank"
        >
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </SocialContainer>
    </FooterContainer>
  );
};
