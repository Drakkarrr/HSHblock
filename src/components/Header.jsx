import logo from "./assets/logo.png";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <StyledLogoContainer>
        <img src={logo} alt="Logo of the site" />
      </StyledLogoContainer>
      <StyledLinks>
        <li>Home</li>
        <li>Services</li>
        <li>See whitepaper</li>
        <li>Contact Us</li>
      </StyledLinks>
    </StyledHeader>
  );
};

const StyledHeader = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #60339a;
  height: 4.5rem;
  padding: 1rem 8rem;
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
`;

export default Header;
