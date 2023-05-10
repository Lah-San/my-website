import React, { useEffect } from "react";
import styled from "styled-components";
import { DiHtml5, DiCss3, DiJavascript1, DiReact } from "react-icons/di";
import { DiJava, DiPhp, DiPython, DiNodejsSmall } from "react-icons/di";
import { DiMongodb, DiMysql, DiFirebase } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
import { SiMicrosoftsqlserver } from "react-icons/si";

import { Fade } from "react-reveal";

function Skills({ id }) {
  return (
    <Section id={id}>
      <Container>
        <Top>
          <Fade>
            <Title>Skills</Title>
          </Fade>
          <TContent>
            <Fade right distance="20%">
              <FList>
                <H4>Front-End</H4>
                <ListItem>
                  <DiHtml5 />
                  &nbsp;HTML
                </ListItem>
                <ListItem>
                  <DiCss3 />
                  &nbsp;CSS
                </ListItem>
                <ListItem>
                  <DiJava />
                  &nbsp;JavaScript
                </ListItem>
                <ListItem>
                  <DiReact />
                  &nbsp;ReactJS
                </ListItem>
              </FList>
            </Fade>
            <Fade bottom distance="5%">
              <BList>
                <H4>Back-End</H4>
                <ListItem>
                  <DiNodejsSmall />
                  NodeJS
                </ListItem>
                <ListItem>
                  <DiPython />
                  Python
                </ListItem>
                {/* <ListItem>
                  <DiPhp />
                  PHP
                </ListItem> */}
                <ListItem>
                  <TbBrandCSharp />
                  C#
                </ListItem>
                <ListItem>
                  <DiJava />
                  Java
                </ListItem>
              </BList>
            </Fade>
            <Fade left distance="20%">
              <DList>
                <H4>DataBase</H4>
                <ListItem>
                  <DiMongodb />
                  MongoDB
                </ListItem>
                {/* <ListItem>
                  <DiMysql />
                  MySQL
                </ListItem> */}
                <ListItem>
                  <SiMicrosoftsqlserver />
                  MirosoftSQL
                </ListItem>
                <ListItem>
                  <DiFirebase />
                  FireBase
                </ListItem>
              </DList>
            </Fade>
          </TContent>
        </Top>
        <Bottom>
          {/* 3d Models */}
          {/* Hello this is the bottom section for 3d models  */}
        </Bottom>
      </Container>
    </Section>
  );
}

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Top = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TContent = styled.div`
  flex: 2;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5%;
  white-space: nowrap;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-size: 50px;
  font-family: "Outfit", sans-serif;
  font-weight: 500;
  margin: 0rem 0rem 2rem;
`;

const FList = styled.div`
  padding: 3rem 5rem;
  margin-bottom: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgba(255, 255, 255, 0.36);
  border-radius: 16px;
  cursor: pointer;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 1);
  z-index: 2;
  transition: 0.15s;

  :hover {
    -webkit-font-smoothing: subpixel-antialiased;
    backface-visibility: hidden;
    transform: translateZ(0);
    scale: 1.1;
    z-index: 10;
    border: 1px solid #000000;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
  }

  @media only screen and (max-width: 1000px) {
    margin-bottom: 2rem;
  }

  @media only screen and (max-width: 330px) {
    margin-bottom: 2rem;
    padding: 2rem 3rem;
  }
`;

const BList = styled.div`
  padding: 3rem 5rem;
  margin-bottom: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgba(255, 255, 255, 0.36);
  border-radius: 16px;
  cursor: pointer;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 1);
  z-index: 2;
  transition: 0.15s;

  :hover {
    -webkit-font-smoothing: subpixel-antialiased;
    backface-visibility: hidden;
    transform: translateZ(0);
    scale: 1.1;
    z-index: 10;
    border: 1px solid #000000;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
  }

  @media only screen and (max-width: 1000px) {
    margin-bottom: 2rem;
  }

  @media only screen and (max-width: 330px) {
    margin-bottom: 2rem;
    padding: 2rem 3rem;
  }
`;

const DList = styled.div`
  padding: 3rem 5rem 5rem 5rem;
  margin-bottom: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgba(255, 255, 255, 0.36);
  border-radius: 16px;
  cursor: pointer;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 1);
  z-index: 2;
  transition: 0.15s;

  :hover {
    -webkit-font-smoothing: subpixel-antialiased;
    backface-visibility: hidden;
    transform: translateZ(0);
    scale: 1.1;
    z-index: 10;
    border: 1px solid #000000;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
  }

  @media only screen and (max-width: 1000px) {
    margin-bottom: 10rem;
  }

  @media only screen and (max-width: 330px) {
    margin-bottom: 10rem;
    padding: 2rem 3rem;
  }
`;

const H4 = styled.p`
  font-size: 25px;
  padding: 10px 0px;
  font-family: "Outfit", sans-serif;
  font-weight: 500;
  text-decoration: underline;
  text-decoration-color: #29a5df;
`;

const ListItem = styled.li`
  gap: 5px;
  font-family: Outfit, sans-serif;
  text-decoration: none;
  line-height: 180%;
  list-style: none;
  font-weight: 400;
  -webkit-box-align: center;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg {
    font-size: 20px;
  }
`;

const Bottom = styled.div`
  background-color: blue;
`;

export default Skills;
