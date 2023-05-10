import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

function NavBar() {
  const handleItemClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const [showNav, setShowNav] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setShowNav((prevShowNav) => {
        return prevScrollPos > currentScrollPos || currentScrollPos < 10;
      });
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <Section className="navbar" style={{ top: showNav ? 0 : "-80px" }}>
      <Container>
        <Links>
          <Logo onClick={() => handleItemClick("home")} src="./logo/logo.png" />
          <List>
            <ListItem onClick={() => handleItemClick("home")}>Home</ListItem>
            <ListItem onClick={() => handleItemClick("aboutme")}>
              About Me
            </ListItem>
            <ListItem onClick={() => handleItemClick("skills")}>
              Skills
            </ListItem>
            <ListItem onClick={() => handleItemClick("resume")}>
              Projects
            </ListItem>
          </List>
        </Links>
        <Icons>
         
          <Button onClick={() => handleItemClick("contact")}>Hire Now</Button>
        </Icons>
      </Container>
    </Section>
  );
}

const Section = styled.div`
  z-index: 50;
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  gap: 100px;
  height: 60px;
  max-width: 1400px; /* adjust the value as needed */
  padding: 0px 15px;
  margin: 10px auto;
  background: rgba(241, 241, 241, 0.414);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.9px);
  -webkit-backdrop-filter: blur(7.9px);
  border: 1px solid rgba(0, 0, 0, 0.926);

  @media only screen and (max-width: 1015px) {
    width: 100%;
    gap: 20px;
    padding: 0px 10px;
    margin: 10px;
    font-size: small;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin: 10px;
  }

  @media only screen and (max-width: 400px) {
    margin: 5px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;

  @media only screen and (max-width: 1015px) {
    width: 100%;
    gap: 35px;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Logo = styled.img`
  height: 30px;
  cursor: pointer;
  transition: 0.15s;

  :active {
    transform: scale(1.1);
  }

  @media only screen and (max-width: 1015px) {
    height: 27px;
  }

  @media only screen and (max-width: 330px) {
    height: 23px;
  }
`;

const List = styled.ul`
  display: flex;
  gap: 50px;
  list-style: none;
  font-weight: 400;

  @media only screen and (max-width: 1015px) {
    gap: 22px;
    font-size: small;
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  margin-top: 1.5%;
  font-size: 18px;
  cursor: pointer;
  transition: 0.15s;

  ::after {
    content: "";
    position: relative;
    width: 0;
    height: 3px;
    border-radius: 3px;
    display: block;
    margin-top: 5px;
    right: 0;
    background: #29a5df;
    transition: width 0.2s ease;
    -webkit-transition: width 0.2s ease;
  }
  :hover:after {
    width: 100%;
    left: 0;
    background: #29a5df;
  }

  @media only screen and (max-width: 1015px) {
    font-size: medium;
    margin-top: 7px;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media only screen and (max-width: 330px) {
    gap: 10px;
  }
`;

const SearchIcon = styled.div`
  font-size: 18px;
  cursor: pointer;
  transition: 0.15s;

  :hover {
    color: #181818;
    transform: scale(1.2);
  }

  :active {
    transform: scale(1.5);
  }

  @media only screen and (max-width: 400px) {
    font-size: 14px;
  }
`;

const Button = styled.p`
  background-color: #ffffff6c;
  border: 2px solid black;
  color: black;
  text-align: center;
  border-radius: 20px;
  padding: 10px 5px;
  margin: 5px;
  width: 100px;
  cursor: pointer;
  transition: 0.15s;

  :hover {
    color: white;
    background-color: black;
  }

  @media only screen and (max-width: 400px) {
    padding: 5px 1px;
    margin: 1px;
  }
`;

export default NavBar;
