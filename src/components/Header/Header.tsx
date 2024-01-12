import flagBrazilImage from "../img/flagBrazil.png";
import flagUSAImage from "../img/flagUSA.png";
import Logo from "../img/logo.png";
import { useTranslation } from "react-i18next";
import {
  Container,
  Div1,
  Div2,
  Div3,
  Div4,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

interface HeaderProps {
  toggleLanguage: (language: string) => void;
}

export function Header({ toggleLanguage }: HeaderProps) {
  const { t } = useTranslation();

  return (
    <Container>
      <Div1>
        <img src={Logo} alt="Logo" />
      </Div1>

      <Div2>
        <li>
          <NavLink href="#projects">{t("header.projects")}</NavLink>
        </li>
        <li>
          <NavLink href="#about">{t("header.about")}</NavLink>
        </li>
        <li>
          <NavLink href="#timeLine">{t("header.timeline")}</NavLink>
        </li>
      </Div2>

      <Div3>
        <li>
          <img
            src={flagBrazilImage}
            alt="flagBrazil"
            onClick={() => toggleLanguage("pt")}
            style={{ cursor: "pointer" }}
          />
        </li>
        <li>
          <img
            src={flagUSAImage}
            alt="flagUSA"
            onClick={() => toggleLanguage("en")}
            style={{ cursor: "pointer" }}
          />
        </li>
      </Div3>

      <Div4>
        <SocialIcons href="https://github.com/hercules-ferreira">
          <AiFillGithub />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/hercules-ferreira/">
          <AiFillLinkedin />
        </SocialIcons>
      </Div4>
    </Container>
  );
}
