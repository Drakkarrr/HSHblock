import styled from "styled-components";
import step1 from "./assets/step1.png";

const Cards = () => {
  return (
    <StyledCards>
      <img src={step1} alt="step 1" />
      <h4>Sign Up</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
        quaerat. Qui aperiam necessitatibus blanditiis doloribus ipsa illum
        repellendus distinctio obcaecati.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A, unde est.
        Porro quam laboriosam nemo!
      </p>
    </StyledCards>
  );
};

export default Cards;

const StyledCards = styled.div`
  background: #24266b;
  border-radius: 15px;
  height: 26rem;
  width: 23rem;
  margin-top: 3rem;
  padding: 1rem;
  img {
    height: 50px;
    width: auto;
  }
  h4 {
    color: #ffffff;
    font-size: 1.5rem;
  }
  h1 {
    color: #ffffff;
  }
  p {
    opacity: 0.5;
  }
`;
