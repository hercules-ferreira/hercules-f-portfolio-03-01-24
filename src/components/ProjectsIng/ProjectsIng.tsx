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
        <span>MySQL and MongoDB: </span>Explore the fascinating world of data
        science. Dive into advanced techniques of data analysis and data
        visualization. Learn to extract valuable insights for informed
        decision-making with powerful analyses. We'll cover everything from
        conception to implementation, with essential features ensuring security
        and performance.
      </>
    ),
    moreInfo: [
      <MoreInfoText key="0">
        <span>MySQL and MongoDB</span> Uncover the secrets of MySQL and MongoDB
        databases. This class is designed for beginners, providing a detailed
        introduction to managing relational and non-relational data. Discover
        how to design efficient schemas, perform complex queries, and optimize
        your database's performance.
      </MoreInfoText>,
    ],
  },
  {
    image: project2,
    text: (
      <>
        <span>Modern Web Beyond HTML: </span>Use powerful tools like JavaScript
        and React. Learn to build amazing web experiences using JavaScript and
        React. This class is perfect for beginners and those looking to enhance
        their front-end development skills. Explore fundamental concepts, build
        interactive applications.
      </>
    ),
    moreInfo: [
      <MoreInfoText key="0">
        <span>Understand React Architecture: </span>to create modern interfaces.
        Understand the architecture of components and how they communicate
        through props and states. Explore the concept of component lifecycle to
        optimize your application's performance and efficiency. Building
        Interactive Applications: Apply your knowledge to create engaging and
        interactive web applications. Use React Router for efficient navigation
        between pages and components.
      </MoreInfoText>,
    ],
  },
  {
    image: project3,
    text: (
      <>
        <span>Web Projects: </span>Personal and Professional. This class is a
        practical dive into creating web projects, from personal websites to
        robust professional applications. Learn to define requirements, choose
        appropriate technologies, and efficiently manage the project lifecycle.
        Develop practical skills to turn your ideas into reality.
      </>
    ),
    moreInfo: [
      <MoreInfoText key="0">
        <span>Know how to identify and clearly define project goals: </span>
        whether building an impressive personal portfolio or developing a
        website for a company. Create attractive and intuitive interfaces,
        prioritizing the user experience. Explore responsive design. We will
        thoroughly explore each stage, from the initial conception to the launch
        and continuous maintenance. It's an exciting and practical journey,
        intended to provide the skills and knowledge necessary to undertake
        engaging projects and solutions that meet the specific needs of
        businesses.
      </MoreInfoText>,
    ],
  },
  {
    image: project4,
    text: (
      <>
        <span>Building Sites for Companies with MySQL: </span>Discover how to
        develop powerful websites for companies using MySQL as the database. In
        this class. Learn to create efficient web solutions that meet the
        specific needs of businesses.
      </>
    ),
    moreInfo: [
      <MoreInfoText key="0">
        <span>Dive into MySQL integration: </span>as your database, providing a
        solid foundation for efficient data storage and retrieval. Understand
        data modeling and relationships to structure information logically and
        effectively. <span>Security First: </span>
        Explore strategies to ensure the security of company and user data.
        Learn best practices for preventing attacks, protection against SQL
        injections, and how to implement a robust security layer.
      </MoreInfoText>,
    ],
  },
  {
    image: project5,
    text: (
      <>
        <span>SaaS Development: </span>Immerse yourself in the era of Software
        as a Service (SaaS); let's build scalable, cloud-based applications.
        Learn to architect SaaS solutions, implement effective business models,
        and ensure the security of user data. This course is essential for
        creating and launching your own SaaS-based products.
      </>
    ),
    moreInfo: [
      <MoreInfoText key="0">
        <span>Dive into the essence of the SaaS model: </span>understanding how
        it differs from traditional software approaches. Tackle the specific
        security challenges associated with SaaS. Understand best practices for
        protecting sensitive data, ensuring compliance, and implementing access
        control policies.
      </MoreInfoText>,
    ],
  },
  {
    image: project6,
    text: (
      <>
        <span>Styled Components and Tailwind: </span>Elevating Styling in React.
        Discover the power of styling in React with Styled Components and
        Tailwind. In this class, we'll delve deep into creating stylized
        components in an elegant and efficient manner. Forget the traditional
        separation of styles and components.
      </>
    ),
    moreInfo: [
      <MoreInfoText key="0">
        <span>With Styled Components and Tailwind: </span>you'll integrate
        styling directly into your code, making it more modular and easy to
        maintain. Learn to apply dynamic styles based on props or states to
        create flexible and adaptable interfaces. Explore the simplicity of
        nesting styles and the ease of maintaining a clean and organized
        codebase. From creating themes to animating components, you'll become
        proficient in turning your visual ideas into reality.
      </MoreInfoText>,
    ],
  },
];

export const ProjectsIng = () => {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const toggleFlipped = (index: number) => {
    setFlippedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <SectionTitle id="projects">Projects</SectionTitle>

      <ProjectsContainer>
        {projects.map((project, index) => (
          <ProjectContainer key={index} onClick={() => toggleFlipped(index)}>
            <ProjectInner isFlipped={flippedIndex === index}>
              <ProjectFront>
                <ProjectImage src={project.image} alt={`Image ${index + 1}`} />
                <ProjectText>{project.text}</ProjectText>
                <LearnMoreButton>Learn More</LearnMoreButton>
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
