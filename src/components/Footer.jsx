import styled from "styled-components";
import logo from "./assets/logo.png";
import icon from "./assets/icon.svg";

const Footer = () => {
  return (
    <StyledFooter id="contact">
      <StyledLetterContainer>
        <StyledDescription>
          <h1>Sign Up For Newsletter</h1>
          <p>Get the latest updates and news in your inbox</p>
        </StyledDescription>
        <StyledInput>
          <input type="email" name="email" placeholder="Email" />
          <input type="text" name="name" placeholder="First Name" />
          <button>Subscride Now</button>
        </StyledInput>
      </StyledLetterContainer>
      <StyledIconContainer>
        <img src={logo} alt="Logo of company" />
        <p>&copy; Copyright 2020</p>
        <StyledIcon>
          <img src={icon} alt="Facebook-icon" />
          <img src={icon} alt="Facebook-icon" />
          <img src={icon} alt="Facebook-icon" />
          <img src={icon} alt="Facebook-icon" />
        </StyledIcon>
      </StyledIconContainer>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.div`
  margin-top: 6rem;
  height: 80vh;
  display: grid;
  place-items: center;
`;

const StyledLetterContainer = styled.div`
  height: 23rem;
  width: 80%;
  background: #24266b;
  border-radius: 20px;
  padding: 5rem;
  text-align: center;
`;

const StyledDescription = styled.div`
  height: 12rem;
  h1 {
    padding-bottom: 1rem;
    font-size: 3.2rem;
  }

  p {
    font-size: 1.3rem;
    opacity: 0.5;
  }
`;

const StyledInput = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 2.7rem;
  input {
    height: 2.7rem;
    width: 17rem;
    font-family: "Mulish", sans-serif;
    letter-spacing: 0.5px;
    font-size: 8px;
    border-radius: 20px;
    border-style: none;
    background: #1b1e61;
    color: #ffffff;
    padding: 5px 1rem;
    &:focus {
      outline: none;
    }
  }

  button {
    font-size: 10px;
    height: 2.7rem;
    border-radius: 20px;
    border-radius: 20px;
    border-style: none;
    padding: 5px 3rem;
    cursor: pointer;
    background: #f86bc3;
    color: #ffffff;
  }
`;

const StyledIconContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    height: 2.5rem;
    width: auto;
  }
`;

const StyledIcon = styled.div`
  padding: 1rem;
  img {
    height: 2.1rem;
  }
`;
