import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Lottie from "lottie-web";
import { Fade } from "react-reveal";

const About = ({ id }) => {
  const [animation, setAnimation] = useState(null);
  const lottieContainer = useRef(null);

  useEffect(() => {
    const anim = Lottie.loadAnimation({
      container: lottieContainer.current,
      renderer: "svg",
      autoplay: true,
      path: "./images/aboutme.json",
    });
    setAnimation(anim);

    // Cleanup function to destroy the animation on unmount
    return () => {
      anim.destroy();
    };
  }, []);

  return (
    <Section id={id}>
      <Container >
        <Left>
          <Fade right distance="5%">
            <Left>
              {/* Add the lottie container as a child of the Left component */}
              <div id="lottie" ref={lottieContainer}></div>
            </Left>
          </Fade>
        </Left>
        <Right>
          <Fade>
            <Title>About Me</Title>
          </Fade>
          <Fade left distance="5%">
            <Desc>
              I'm Lahiru Sandun, a dedicated full-stack web developer from Sri
              Lanka. My goal is to design and develop visually stunning and
              user-friendly web applications. I am constantly
              learning and exploring new technologies to stay up-to-date with
              the latest trends and best practices in the industry.
            </Desc>
          </Fade>
        </Right>
      </Container>
    </Section>
  );
};

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  margin: 0rem 0rem 10rem 0rem;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 1215px) {
    margin: 0rem 0rem 10rem 0rem;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1215px) {
    flex: 1;
    align-items: center;
  }
`;

const Right = styled.div`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  display: flex;

  @media only screen and (max-width: 1215px) {
    flex: 1;
    margin: 0px 2rem;
  }
`;

const Title = styled.h1`
  font-size: 55px;
  font-family: "Outfit", sans-serif;
  font-weight: 500;

  @media only screen and (max-width: 1215px) {
    margin: 3rem 0rem 1rem 0rem;
    text-align: center;
    font-size: 55px;
  }

  @media only screen and (max-width: 768px) {
    margin: 3rem 0rem 1rem 0rem;
    text-align: center;
    font-size: 50px;
  }

  @media only screen and (max-width: 338px) {
    margin: 2rem 0rem 1rem 0rem;
    font-size: 40px;
  }
`;

const Desc = styled.p`
  line-height: 1.6;
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

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  position: relative;
  top: 10rem;
  bottom: 0;
  left: 0;
  right: 0rem;
  transform: box-shadow(1px 1px 1px rgba(1, 1, 1, 1));
  -webkit-filter: drop-shadow(5px 5px 5px #222);
  filter: drop-shadow(5px 5px 5px #222);
  animation: animate 4s infinite ease alternate;

  @keyframes animate {
    100% {
      transform: translate3d(3px, 15px, 0px);
    }
  }
`;

export default About;
