import React from "react";
import styled from "styled-components";
import { BsGithub } from "react-icons/bs";
import { TbExternalLink } from "react-icons/tb";
import { Fade, Slide } from "react-reveal";

function Projects({ id }) {
  return (
    <Section id={id}>
      <Fade>
        <ProjectTitle>Projects</ProjectTitle>
      </Fade>
    
      <Container>
        <OneLeft>
          <Fade left distance="20%">
            <Title>Airbnb Clone</Title>
            <Fade left distance="20%">
              <ImageContainerBetween>
                <Image src="./images/Airbooknc.png" />
              </ImageContainerBetween>
            </Fade>
            <Desc>
              "Airbooknc" is a user-friendly online platform that connects
              travelers with unique accommodations from around the world. Book
              your next adventure with ease, or list your property and showcase
              it to a global audience.
            </Desc>
            *It might take some time to load!
            <Links>
              <Link
                href="https://github.com/Lah-San/booking-app"
                target="_blank"
              >
                <SubTitle>Code</SubTitle>
                <Icon>
                  <BsGithub />
                </Icon>
              </Link>
              <Link href="https://airbooknc.vercel.app/" target="_black">
                <SubTitle>Live Demo</SubTitle>
                <Icon href="https://airbooknc.vercel.app/" target="_black">
                  <TbExternalLink />
                </Icon>
              </Link>
            </Links>
          </Fade>
        </OneLeft>
        <OneRight>
          <Fade left distance="20%">
            <ImageContainer>
              <Image src="./images/Airbooknc.png" />
            </ImageContainer>
          </Fade>
        </OneRight>
      </Container>
    
      <Container>
        <TwoLeft>
          <Fade right distance="20%">
            <ImageContainer>
              <Image src="./images/Recipes.png" />
            </ImageContainer>
          </Fade>
        </TwoLeft>
        <TwoRight>
          <Fade right distance="20%">
            <Title>FindMyRecipes</Title>
            <Fade right distance="20%">
              <ImageContainerBetween>
                <Image src="./images/Recipes.png" />
              </ImageContainerBetween>
            </Fade>
            <Desc>
              "FindMyRecipes" Website is an online platform that allows users to
              find recipes from different countries, cultures. The website
              allows the user to search recipes using keywords and provides
              ingredients and instructions on how to prepare them.
            </Desc>
            *It might take some time to load!
            <Links>
              <Link
                href="https://github.com/Lah-San/recipes-web-app"
                target="_blank"
              >
                <SubTitle>Code</SubTitle>
                <Icon>
                  <BsGithub />
                </Icon>
              </Link>
              <Link href="https://findmyrecipes.vercel.app/" target="_black">
                <SubTitle>Live Demo</SubTitle>
                <Icon href="https://findmyrecipes.vercel.app/" target="_black">
                  <TbExternalLink />
                </Icon>
              </Link>
            </Links>
          </Fade>
        </TwoRight>
      </Container>
    
      <Container>
        <OneLeft>
          <Fade left distance="20%">
            <Title>Promptio</Title>
            <Fade left distance="20%">
              <ImageContainerBetween>
                <Image src="./images/Promptio.png" />
              </ImageContainerBetween>
            </Fade>
            <Desc>
              "Promptio" is a platform for prompt engineering, where users can
              share and discover prompts for various artificial intelligence
              systems, such as Bing AI, ChatGPT, BARD and more. Users can create
              an account to upload their prompts, or copy existing prompts from
              others to enhance their efficiency.
            </Desc>
            <Links>
              <Link href="https://github.com/Lah-San/Promptio" target="_blank">
                <SubTitle>Code</SubTitle>
                <Icon>
                  <BsGithub />
                </Icon>
              </Link>
              <Link href="https://promptio.vercel.app/" target="_black">
                <SubTitle>Live Demo</SubTitle>
                <Icon>
                  <TbExternalLink />
                </Icon>
              </Link>
            </Links>
          </Fade>
        </OneLeft>
        <OneRight>
          <Fade left distance="20%">
            <ImageContainer>
              <Image src="./images/Promptio.png" />
            </ImageContainer>
          </Fade>
        </OneRight>
      </Container>  
    </Section>
  );
}

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0rem 10rem 0rem 10rem;

  @media only screen and (max-width: 1200px) {
    margin: 0rem 5rem 1rem 5rem;
  }

  @media only screen and (max-width: 768px) {
    margin: 0rem 1rem 3rem 1rem;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 5rem;
  margin-bottom: 11rem;

  @media only screen and (max-width: 900px) {
    margin: 0rem 2rem 5rem 2rem;
  }
`;

const ProjectTitle = styled.h1`
  text-align: center;
  font-size: 50px;
  font-family: "Outfit", sans-serif;
  font-weight: 500;
  margin-bottom: 5rem;

  @media only screen and (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const OneLeft = styled.div`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  display: flex;

  @media only screen and (max-width: 900px) {
    align-items: center;
    text-align: center;
    gap: 5px;
  }
`;

const OneRight = styled.div`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  display: flex;

  @media only screen and (max-width: 900px) {
    display: none;
    flex: none;
  }
`;

const TwoLeft = styled.div`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  display: flex;

  @media only screen and (max-width: 900px) {
    display: none;
    flex: none;
  }
`;

const TwoRight = styled.div`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  display: flex;

  @media only screen and (max-width: 900px) {
    align-items: center;
    text-align: center;
    gap: 5px;
  }
`;

const Title = styled.h1`
  font-size: 35x;
  font-family: "Outfit", sans-serif;
  font-weight: 500;

  @media only screen and (max-width: 1215px) {
    font-size: 25px;
  }
`;

const Desc = styled.p`
  line-height: 1.3;
  font-size: 20px;
  font-weight: 400;
  text-decoration-color: #191919;
  padding: 10px 0px;

  @media only screen and (max-width: 1215px) {
    font-size: 18px;
  }

  @media only screen and (max-width: 330px) {
    font-size: 16px;
  }
`;

const Link = styled.a`
  display: flex;
  justify-content: left;
  text-decoration: none;
  transition: all 0.15s;
`;

const Icon = styled.div`
  font-size: 30px;
  padding: 10px;
  cursor: pointer;
  transition: 0.15s;
  color: black;
  text-decoration: none;

  @media only screen and (max-width: 330px) {
    font-size: 20px;
    padding: 8px 5px 0px 5px;
  }
`;

const SubTitle = styled.h3`
  font-size: 20px;
  font-weight: 400;
  text-decoration-color: #191919;
  padding-top: 14px;
  color: black;
  text-decoration: none;

  @media only screen and (max-width: 900px) {
    padding-bottom: 3px;

    @media only screen and (max-width: 768px) {
      font-size: 18px;
    }

    @media only screen and (max-width: 330px) {
      font-size: 14px;
    }
  }
`;

const ImageContainerBetween = styled.div`
  display: none;

  @media only screen and (max-width: 900px) {
    display: flex;
    margin-bottom: 2rem;
    width: 100%; /* set width to 100% to allow it to fill container */
    max-width: 650px; /* set max-width to limit size on large screens */
    overflow: hidden;
    border: 1px solid #000000;
    border-radius: 15px;
    background-color: white;
    order: 2; /* move image container to end of container on small screens */
    margin-top: 2rem; /* add margin to separate from links on small screens */
  }
`;

const ImageContainer = styled.div`
  width: 100%; /* set width to 100% to allow it to fill container */
  max-width: 650px; /* set max-width to limit size on large screens */
  overflow: hidden;
  border: 1px solid #000000;
  border-radius: 15px;
  background-color: white;
  order: 2; /* move image container to end of container on small screens */
  margin-top: 2rem; /* add margin to separate from links on small screens */
`;

const Image = styled.img`
  width: 100%; /* set width to 100% to fill container */
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.5s ease;

  :hover {
    transform: scale(1.1);
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export default Projects;
