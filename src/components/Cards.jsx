import styled from "styled-components";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <StyledCards>
      <h4>Tittle</h4>
      <p>Lorem ipsum dolor. Lorem ipsum dolor sit amet.</p>
      <StyledPrice>
        $100 <span>Per Month</span>
      </StyledPrice>
      <StyledButton>
        <Link to="#">Get Started</Link>
      </StyledButton>
    </StyledCards>
  );
};

export default Cards;

const StyledCards = styled.div`
  background: #24266b;
  padding: 1rem 3rem;
  border-radius: 15px;
  height: 22rem;
  width: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  h4 {
    opacity: 0.5;
    font-size: 1.3rem;
  }
  p {
    opacity: 0.5;
    font-size: 9px;
  }
`;

const StyledPrice = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  span {
    color: #f86bc3;
    font-size: 9px;
  }
`;

export const StyledButton = styled.div`
  border: 1px solid #f86bc3;
  border-radius: 20px;
  padding: 8px 0;
  cursor: pointer;
  &:hover {
    transition: 0.5s;
    background-color: #f86bc3;
  }
  a {
    text-decoration: none;
    color: #ffffff;
  }
`;
