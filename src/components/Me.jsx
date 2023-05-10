import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Typed from "typed.js";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { OrbitControls, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Lottie from "lottie-web";
import {
  EffectComposer,
  Bloom,
  DepthOfField,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import { Fade } from "react-reveal";

function Me({ id }) {
  const el = React.useRef(null);
  const [animation, setAnimation] = useState(null);
  const lottieContainer = useRef(null);

  useEffect(() => {
    const anim = Lottie.loadAnimation({
      container: lottieContainer.current,
      renderer: "svg",
      autoplay: true,
      loop: true,
      path: "./images/border.json",
    });
    setAnimation(anim);

    // Cleanup function to destroy the animation on unmount
    return () => {
      anim.destroy();
    };
  }, []);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Full-Stack Developer.",
        "Creative Problem Solver.",
        "UI/UX Developer.",
        "AI Enthusiast.",
        "3D Modeler.",
      ],
      typeSpeed: 45,
      loop: true,
      backSpeed: 30,
      backDelay: 1200,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  const handleButtonClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <Section id={id}>
      <Fade>
        <Container>
          <Left>
            <Title>Lahiru Sandun</Title>
            <ImageBetween src="./images/about_me.png" />
            <SubHeading>
              <p>I'm a </p>
              <Typer>
                <span ref={el} />
              </Typer>
            </SubHeading>
            <Desc>
              Hello, I'm a web developer who loves bringing ideas to life
              through elegant designs and seamless user experiences.
            </Desc>
            <Button onClick={() => handleButtonClick("aboutme")}>
              Know More
            </Button>
            <Social>
              <Link
                href="https://www.linkedin.com/in/lahiru-sandun-21223a251/"
                target="_blank"
              >
                <Linkedin>
                  <BsLinkedin />
                </Linkedin>
              </Link>
              <Link href="https://github.com/Lah-San" target="_blank">
                <Github>
                  <BsGithub />
                </Github>
              </Link>
            </Social>
          </Left>
          <Right>
            <Image src="./images/about_me.png" />
          </Right>
        </Container>
      </Fade>
    </Section>
  );
}

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5rem;
`;

const Container = styled.div`
  width: 1300px;
  display: flex;
  justify-content: space-between;
  margin-top: 12rem;

  @media only screen and (max-width: 1215px) {
    width: 100%;
    margin-top: 8rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media only screen and (max-width: 330px) {
    margin-top: 6rem;
  }
`;

const Left = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  margin: 0rem 5rem 0rem 5rem;

  @media only screen and (max-width: 1215px) {
    flex: 1;
    align-items: center;
    gap: 15px;
  }
`;

const Right = styled.div`
  flex: 1;
  position: relative;

  div#lottie {
    width: 600px;
    height: 600px;
    position: absolute;
    top: -6rem;
    left: -4rem;

    @media only screen and (max-width: 1215px) {
      display: none;
    }
  }

  @media only screen and (max-width: 1215px) {
    flex: 1;
    margin: 0px 2rem;
  }
`;

const Title = styled.h1`
  font-size: 80px;
  font-family: "Outfit", sans-serif;
  font-weight: 500;

  @media only screen and (max-width: 1215px) {
    text-align: center;
    font-size: 45px;
  }

  @media only screen and (max-width: 338px) {
    text-align: center;
    font-size: 35px;
  }
`;

const SubHeading = styled.div`
  font-size: 40px;
  font-family: "Outfit", sans-serif;
  font-weight: 500;
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  gap: 18px;
  padding: 25px 0px;
  flex-wrap: wrap;

  p {
    display: flex;
  }

  @media only screen and (max-width: 1215px) {
    text-align: center;
    font-size: 30px;

    p {
      display: none;
    }
  }
`;

const Typer = styled.div`
  font-size: 40px;
  font-family: "Outfit", sans-serif;
  font-weight: 500;
  text-decoration: underline;
  text-decoration-color: #29a5df;

  @media only screen and (max-width: 1215px) {
    font-size: 30px;

    @media only screen and (max-width: 330px) {
      text-align: center;
      font-size: 20px;
    }
  }
`;

const Desc = styled.p`
  font-size: 20px;
  font-weight: 400;
  text-decoration-color: #191919;
  padding: 15px 0px;

  @media only screen and (max-width: 1215px) {
    text-align: center;
  }

  @media only screen and (max-width: 330px) {
    text-align: center;
    font-size: 16px;
  }
`;

const Linkedin = styled.div`
  font-size: 30px;
  padding: 10px 10px 10px 0px;
  cursor: pointer;
  transition: 0.15s;

  :hover {
    transform: scale(1.1);
  }

  :active {
    transform: scale(1.2);
  }
`;

const Github = styled.div`
  font-size: 30px;
  padding: 10px;
  cursor: pointer;
  transition: 0.15s;

  :hover {
    transform: scale(1.1);
  }

  :active {
    transform: scale(1.2);
  }
`;

const Button = styled.button`
  font-weight: 500;
  cursor: pointer;
  width: 250px;
  padding: 0px 0px 0px 0px;
  border: none;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 1rem;
  font-size: 15px;
  transition: 0.15s;
  background: rgba(241, 241, 241, 0.07);
  border-radius: 10px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.9px);
  -webkit-backdrop-filter: blur(3.9px);
  border: 1px solid rgba(0, 0, 0, 0.926);

  :hover {
    border: 1px solid #000000;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
  }

  :active {
    transform: scale(1.02);
  }
`;

const ImageBetween = styled.img`
  display: none;
  margin: 1rem 0rem -1rem 0rem;
  width: 200px;
  object-fit: contain;
  inset: 1.5rem 40px 0px;
  transform: box-shadow(1px 1px 1px #40e2ff);
  -webkit-filter: drop-shadow(5px 5px 5px #40e2ff);
  filter: drop-shadow(5px 5px 5px #000000);
  box-shadow: 0 5px 5px 5px rgba(0, 0, 0, 0.2);
  animation: animate 5s ease-in-out infinite;
  transition: all 1s ease-in-out;

  @keyframes animate {
    0% {
      border-color: #2ac6ff;
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
    50% {
      border-color: #2ac6ff;
      border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
    }
    100% {
      border-color: #2ac6ff;
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
  }

  :hover {
    box-shadow: 0 5px 15px 10px rgba(67, 191, 245, 0.2);
  }

  @media only screen and (max-width: 1215px) {
    display: flex;
    -webkit-background-size: cover;
    background-position: center center;
    width: 200px;
    inset: 8rem -10px -10px;
  }
`;

const Image = styled.img`
  width: 400px;
  object-fit: contain;
  position: absolute;
  inset: 0rem 40px 0px;
  transform: box-shadow(1px 1px 1px #40e2ff);
  background: url("./background/background_blue.png") no-repeat center fixed; 
  border-radius: 16px;
  box-shadow: inset 0 4px 40px rgba(0, 94, 244, 0.198);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 94, 244, 0.198);
  animation: animate 20s ease-in-out infinite;
  transition: all 1s ease-in-out;

  @keyframes animate {
    0% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
    50% {
      border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
    }
    100% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
  }

  @media only screen and (max-width: 1215px) {
    display: none;
  }
`;

const Social = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 2%;
`;

const Link = styled.a`
  color: black;
  text-decoration: none;
`;

export default Me;
