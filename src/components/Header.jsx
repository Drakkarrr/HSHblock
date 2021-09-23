import boxlogo from "./assets/boxlogo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogoContainer>
        <img src={boxlogo} alt="Logo of the site" />
      </StyledLogoContainer>
      <StyledLinks>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#tournament">Tournament</a>
        </li>
        <li>
          <Link to="/whitelist" target="_blank">
            Our Whitelist
          </Link>
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
    color: #f8a70a;
    &:hover {
      color: #f86bc3;
    }
  }
`;

export default Header;
