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
          <a className="cool-link" href="#home">
            Home
          </a>
        </li>
        <li>
          <a className="cool-link" href="#about">
            About Us
          </a>
        </li>
        <li>
          <a className="cool-link" href="#tournament">
            Tournament
          </a>
        </li>
        <li>
          <Link className="cool-link" to="/whitelist" target="_blank">
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

  //!  Media Query
  @media (max-width: 575.98px) {
    width: 100%;
  }

  /* @media (min-width: 576px) and (max-width: 767.98px) {
    background: green;
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    background: blue;
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
    background: orange;
  }

  @media (min-width: 1200px) {
    background: violet;
  } */
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
  li {
    margin-bottom: 5px;
  }

  li.cool-link {
    display: inline-block;
    text-decoration: none;
  }

  .cool-link::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background-color: #f86bc3;
    transition: width 0.3s;
  }

  .cool-link:hover::after {
    width: 100%;
  }

  a {
    text-decoration: none;
    color: #f8a70a;
    width: 0;
    height: 2px;
    &:hover {
      color: #f86bc3;
    }
  }
`;

export default Header;
