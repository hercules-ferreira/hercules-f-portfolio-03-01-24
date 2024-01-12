// index.tsx
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import theme from "./components/themes/default";
import GlobalStyles from "./components/styles/globals";
import { I18nextProvider } from "react-i18next";
import i18n from "./components/I18next/i18next";

import { Header } from "./components/Header/Header";
import { Banner } from "./components/Banner/Banner";
import { Projects } from "./components/Projects/Projects";
import { Timeline } from "./components/TimeLine/TimeLine";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { ProjectsIng } from "./components/ProjectsIng/ProjectsIng";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const App = () => {
  const [isEnglish, setIsEnglish] = useState<boolean>(false);

  const toggleLanguage = (language: string) => {
    i18n.changeLanguage(language);
    setIsEnglish(language === "en");
  };

  return (
    <React.StrictMode>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Header toggleLanguage={toggleLanguage} />
          <Banner />
          {isEnglish !== undefined ? (
            isEnglish ? (
              <ProjectsIng />
            ) : (
              <Projects />
            )
          ) : null}
          <Timeline />
          <Contact />
          <Footer />
        </ThemeProvider>
      </I18nextProvider>
    </React.StrictMode>
  );
};

root.render(<App />);
