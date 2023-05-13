import React from "react";
import Me from "./components/Me";
import styled from "styled-components";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";

const Container = styled.div`
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow: hidden;
  color: #000000;
  background: url("./background/background_blue.webp") no-repeat center fixed;
  background-size: cover;
  -webkit-overflow-scrolling: touch;
`;

function App() {
  return (
    <Container>
      <NavBar />
      <Me id="home" />
      <About id="aboutme" />
      <Skills id="skills" />
      <Projects id="resume" />
      <Contact id="contact" />
    </Container>
  );
}

export default App;
