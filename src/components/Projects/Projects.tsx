import React, { useState } from "react";
import {
  SectionTitle,
  ProjectsContainer,
  ProjectContainer,
  ProjectInner,
  ProjectFront,
  ProjectBack,
  ProjectImage,
  ProjectText,
  LearnMoreButton,
  MoreInfoText,
} from "./ProjectsStyles";

import project1 from "../img/projects/datascience.jpg";
import project2 from "../img/projects/website.jpg";
import project3 from "../img/projects/projects.jpg";
import project4 from "../img/projects/italianFood.jpg";
import project5 from "../img/projects/orientalFood.jpg";
import project6 from "../img/projects/burger.jpg";

interface Project {
  image: string;
  text: React.ReactNode;
  moreInfo?: React.ReactNode[];
}

const projects: Project[] = [
  {
    image: project1,
    text: (
      <>
        <span>MySQL e MongoDB: </span>Explore o fascinante mundo da ciência de
        dados. Vamos mergulhar em técnicas avançadas de análise de dados, e
        visualização de dados. Aprenda a extrair insights valiosos para tomar
        decisões informadas com análises poderosas. Abordaremos desde a
        concepção até a implementação, com funcionalidades essenciais,
        garantindo segurança e desempenho.
      </>
    ),
    moreInfo: [
      <MoreInfoText key="0">
        <span>MySQL e MongoDB</span> Desvende os segredos dos bancos de dados
        MySQL e MongoDB. Esta aula é projetada para iniciantes, fornecendo uma
        introdução detalhada à gestão de dados relacionais e não relacionais.
        Descubra como projetar esquemas eficientes, realizar consultas complexas
        e otimizar o desempenho do seu banco de dados.
      </MoreInfoText>,
    ],
  },
  {
    image: project2,
    text: (
      <>
        <span>Web modernas além do HTML: </span> Use ferramentas poderosas como
        JavaScript e React. Aprenda a construir experiências web incríveis
        utilizando JavaScript e React. Esta aula é perfeita para iniciantes e
        para aqueles que desejam aprimorar suas habilidades de desenvolvimento
        front-end. Explore conceitos fundamentais, construa aplicações
        interativas.
      </>
    ),
    moreInfo: [
      <MoreInfoText key="0">
        <span>Compreenda a arquitetura do React: </span> para criar interfaces
        modernas. Entenda a arquitetura de componentes e como eles se comunicam
        por meio de props e estados. Explore o conceito de ciclo de vida dos
        componentes para otimizar o desempenho e a eficiência do seu aplicativo.
        Construção de Aplicações Interativas: Aplique seu conhecimento para
        criar aplicações web envolventes e interativas. Utilize React Router
        para navegação eficiente entre páginas e componentes.
      </MoreInfoText>,
    ],
  },
  {
    image: project3,
    text: (
      <>
        <span>Projetos Web: </span>Pessoais e Profissionais. Esta aula é um
        mergulho prático na criação de projetos web, desde sites pessoais até
        aplicações profissionais robustas. Aprenda a definir requisitos,
        escolher tecnologias adequadas e gerenciar eficientemente o ciclo de
        vida do projeto. Desenvolva habilidades práticas para transformar suas
        ideias em realidade.",
      </>
    ),
    moreInfo: [
      <MoreInfoText key="0">
        <span>Saiba definir claramente os objetivos dos projetos: </span>seja
        construindo um portfólio impressionante ou desenvolvendo um site para
        uma empresa. Com interfaces atraentes e intuitivas, priorizando a
        experiência do usuário. Explore o design responsivo. Exploraremos a
        fundo cada estágio, a concepção, o lançamento e a manutenção. É uma
        jornada emocionante e prática,vai fornecer as habilidades para realizar
        os projetos envolventes e soluções que atendam às necessidades
        específicas das empresas.
      </MoreInfoText>,
    ],
  },
  {
    image: project4,
    text: (
      <>
        <span>Construção de Sites para Empresas com MySQL: </span> Descubra como
        desenvolver sites poderosos para empresas utilizando MySQL como banco de
        dados. Nesta aula. Aprenda a criar soluções web eficientes que atendam
        às necessidades específicas das empresas.",
      </>
    ),
    moreInfo: [
      <MoreInfoText key="0">
        <span>Mergulhe na integração do MySQL: </span> como seu banco de dados,
        proporcionando uma base sólida para o armazenamento e recuperação
        eficiente de dados. Compreenda a modelagem de dados e as relações para
        estruturar informações de maneira lógica e eficaz.
        <span> Segurança em Primeiro Lugar: </span>
        Explore estratégias para garantir a segurança dos dados da empresa e de
        seus usuários. Aprenda práticas recomendadas para prevenção de ataques,
        proteção contra injeções SQL e como implementar uma camada de segurança
        robusta.
      </MoreInfoText>,
    ],
  },
  {
    image: project5,
    text: (
      <>
        <span>Desenvolvimento de SaaS: </span> Mergulhe na era do Software as a
        Service (SaaS), vamos construir aplicações escaláveis e baseadas em
        nuvem. Aprenda a arquitetar soluções SaaS, implementar modelos de
        negócios eficazes e garantir a segurança dos dados dos usuários. Este
        curso é essencial para criar e lançar seus próprios produtos baseados em
        SaaS.",
      </>
    ),
    moreInfo: [
      <MoreInfoText key="0">
        <span>Mergulhe na essência do modelo SaaS: </span>entendendo como ele
        difere de abordagens tradicionais de software. Enfrente os desafios
        específicos de segurança associados ao SaaS. Compreenda as práticas
        recomendadas para proteger dados sensíveis, garantir conformidade e
        implementar políticas de controle de acesso.
      </MoreInfoText>,
    ],
  },
  {
    image: project6,
    text: (
      <>
        <span>Styled Components e Tailwind: </span>Elevando a Estilização no
        React. Descubra o poder da estilização em React com Styled Components e
        Tailwind. Nesta aula, mergulharemos fundo na criação de componentes
        estilizados de uma maneira elegante e eficiente. Esqueça a separação
        tradicional de estilos e componentes;
      </>
    ),
    moreInfo: [
      <MoreInfoText key="0">
        <span>Com Styled Components e Tailwind: </span>você integrará a
        estilização diretamente no seu código, tornando-o mais modular e fácil
        de manter. Aprenda a aplicar estilos dinâmicos, baseados em props ou
        estados, para criar interfaces flexíveis e adaptáveis. Explore a
        simplicidade de aninhar estilos e a facilidade de manter um código base
        limpo e organizado. Desde a criação de temas até a animação de
        componentes, você se tornará proficiente em transformar suas ideias
        visuais em realidade.
      </MoreInfoText>,
    ],
  },
];

export const Projects = () => {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const toggleFlipped = (index: number) => {
    setFlippedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <SectionTitle id="projects">Projetos</SectionTitle>

      <ProjectsContainer>
        {projects.map((project, index) => (
          <ProjectContainer key={index} onClick={() => toggleFlipped(index)}>
            <ProjectInner isFlipped={flippedIndex === index}>
              <ProjectFront>
                <ProjectImage src={project.image} alt={`Image ${index + 1}`} />
                <ProjectText>{project.text}</ProjectText>
                <LearnMoreButton>Saiba Mais</LearnMoreButton>
              </ProjectFront>
              <ProjectBack>
                {project.moreInfo &&
                  project.moreInfo.map((info: React.ReactNode, i: number) => (
                    <React.Fragment key={i}>
                      <ProjectText>{info}</ProjectText>
                    </React.Fragment>
                  ))}
              </ProjectBack>
            </ProjectInner>
          </ProjectContainer>
        ))}
      </ProjectsContainer>
    </>
  );
};
