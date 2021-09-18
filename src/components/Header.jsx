import logo from "./assets/logo.png";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogoContainer>
        <img src={logo} alt="Logo of the site" />
      </StyledLogoContainer>
      <StyledLinks>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#roadmap">Roadmap</a>
        </li>
        <li>
          <a href="#pricing">Pricing</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
      </StyledLinks>
    </StyledHeader>
  );
};

const StyledHeader = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #60339a;
  position: fixed;
  top: 0;
  height: 4rem;
  width: 100vw;
  padding: 1rem 8rem;
  z-index: 3;
`;

const StyledLogoContainer = styled.div`
  object-fit: cover;
  height: 30px;
  width: auto;
  img {
    height: 100%;
  }
`;

const StyledLinks = styled.div`
  display: flex;
  width: 60%;
  padding: 0 1rem;
  flex-direction: row;
  justify-content: space-evenly;
  list-style: none;
  cursor: pointer;
  a {
    text-decoration: none;
    color: #ffffff;
  }
`;

export default Header;
