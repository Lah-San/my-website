import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Fade } from "react-reveal";

// ============= EmailJS imports ===================
import emailjs from "@emailjs/browser";

function Contact({ id }) {
  const ref = useRef();
  const [success, setSuccess] = useState();
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [error, setError] = useState(false);
  const [patternError, setPatternError] = useState(false);
  const [loading, setLoading] = useState(false);
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputName.length === 0) {
      return setError(true);
    } else if (inputEmail.length === 0) {
      return setError(true);
    } else if (inputEmail.match(pattern) === null) {
      return setPatternError(true);
    } else {
      setLoading(true); // start loading spinner
      try {
        emailjs
          .sendForm(
            import.meta.env.VITE_REACT_APP_SERVICE_ID,
            import.meta.env.VITE_REACT_APP_TEMPLATE_ID,
            ref.current,
            import.meta.env.VITE_REACT_APP_PUBLIC_KEY
          )
          .then(
            (result) => {
              console.log(result.text);
              setSuccess(true);
              setLoading(false); // stop loading spinner on success
            },
            (error) => {
              console.log(error.text);
              setSuccess(false);
              setLoading(false); // stop loading spinner on error
            }
          );
      } catch {
        setSuccess(false);
        setLoading(false); // stop loading spinner on catch block
      }
    }
  };

  return (
    <Section id={id}>
      <Container>
        <Fade>
          <Title>Contact Me</Title>
        </Fade>
        <Fade bottom distance="5%" delay={25}>
          <SubHeading>
            If you are interested in working with me or have any questions or
            comments, please feel free to contact me using the form below.
          </SubHeading>
        </Fade>
        <form ref={ref} onSubmit={handleSubmit}>
          <Fade bottom distance="10%" delay={25}>
            <ContactBox>
              <NameInput
                placeholder="Full Name"
                name="name"
                onChange={(e) => {
                  setInputName(e.target.value);
                }}
              />
              {error === true && inputName <= 0 ? (
                <Error> Name can't be Empty! </Error>
              ) : (
                ""
              )}
              <EmailInput
                placeholder="E-mail Address"
                name="email"
                onChange={(e) => {
                  setInputEmail(e.target.value);
                }}
              />
              {error === true && inputEmail <= 0 ? (
                <Error> E-mail Address can't be Empty! </Error>
              ) : (
                ""
              )}
              {patternError === true && (
                <Error>
                  {" "}
                  E-mail is not in Correct Format! (example@gmail.com){" "}
                </Error>
              )}
              <DescInput placeholder="Your Message" name="message" rows={10} />
              <Send type="submit">Send</Send>
            </ContactBox>
          </Fade>
        </form>
        {loading && <div>Loading...</div>}
        {success === true && (
          <Fade bottom>
            <Success>
              Thank you! Your message has been sent. I will get back to you as
              soon as possible 😊.
            </Success>
          </Fade>
        )}
        {success === false && (
          <Fade bottom>
            <Error> Email was not sent. </Error>
          </Fade>
        )}
      </Container>
    </Section>
  );
}

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin-bottom: 5rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1215px) {
    margin: 0rem 5rem 0rem 5rem;
  }
`;

const Title = styled.h1`
  font-size: 50px;
  font-family: "Outfit", sans-serif;
  font-weight: 500;
`;

const SubHeading = styled.p`
  font-size: 20px;
  font-weight: 400;
  text-decoration-color: #191919;
  padding: 15px 0px;
  text-align: center;
  margin-bottom: 25px;

  @media only screen and (max-width: 615px) {
    font-size: 18px;
  }

  @media only screen and (max-width: 630px) {
    font-size: 16px;
  }
`;

const ContactBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-bottom: 2rem;
  position: relative;
  background: rgba(255, 255, 255, 0.36);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 1);
  width: 600px;
  max-width: 100%;

  @media only screen and (max-width: 630px) {
    width: 400px;
  }

  @media only screen and (max-width: 630px) {
    width: 340px;
  }

  @media only screen and (max-width: 330px) {
    width: 260px;
  }
`;

const EmailInput = styled.input`
  width: 90%;
  height: 25px;
  padding: 5px 10px;
  font-size: 18px;
  border: none;
  border-radius: 6px;
  margin: 10px;
  box-shadow: 1px 3px 10px rgba(1, 1, 1, 0.309);
  transition: 0.15s;

  :focus {
    scale: 1.1;
  }
`;

const NameInput = styled.input`
  width: 90%;
  height: 25px;
  padding: 5px 10px;
  font-size: 18px;
  border: none;
  border-radius: 6px;
  margin: 10px;
  box-shadow: 1px 3px 10px rgba(1, 1, 1, 0.309);
  transition: 0.15s;
  background: white;

  :focus {
    scale: 1.1;
  }
`;

const DescInput = styled.textarea`
  width: 90%;
  height: 200px;
  padding: 5px 10px;
  font-size: 18px;
  border: none;
  border-radius: 6px;
  margin: 10px;
  line-height: 1.2;
  box-shadow: 1px 3px 10px rgba(1, 1, 1, 0.309);
  transition: 0.15s;

  :focus {
    scale: 1.1;
  }
`;

const Send = styled.button`
  font-weight: 500;
  font-size: 19px;
  cursor: pointer;
  width: 200px;
  margin: 10px;
  padding: 0px 0px 0px 0px;
  border: none;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 1rem;
  font-size: 16px;
  transition: 0.15s;
  background: rgba(241, 241, 241, 0.07);
  border-radius: 10px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.9px);
  -webkit-backdrop-filter: blur(3.9px);
  cursor: pointer;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(241, 241, 241, 0.07);
    border-radius: 10px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(3.9px);
    -webkit-backdrop-filter: blur(3.9px);
    border-radius: 5px;
    z-index: -2;
  }

  :before {
    content: "";
    font-size: 100px;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background: #58c5d88d;
    border-radius: 5px;
    transition: all 0.3s;

    z-index: -1;
  }

  :hover {
    color: #000000;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
    border: none;

    :before {
      width: 100%;
    }
  }

  :active {
    color: #000000;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
    scale: 0.9;

    :before {
      width: 100%;
    }
  }

  /* :hover{
    border: 1px solid #000000;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);   
  }

  :active{
    transform: scale(1.1)
  }  */
`;

const Success = styled.div`
  font-size: 18px;
  font-family: "Outfit", sans-serif;
  font-weight: 500;
  background: linear-gradient(35deg, #186318cb#50d550a6);
  padding: 5px;
  border: none;
  border-radius: 5px;
  text-align: center;
  margin-bottom: 1rem;
`;

const Error = styled.div`
  font-size: 18px;
  font-family: "Outfit", sans-serif;
  font-weight: 500;
  color: #ff3b3b;
  padding: 5px;
  border: none;
  border-radius: 5px;
  text-align: center;
  margin-bottom: 1rem;
`;

export default Contact;
