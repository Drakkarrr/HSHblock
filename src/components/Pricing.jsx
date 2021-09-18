import styled from "styled-components";
import Cards from "./Cards";

const Pricing = () => {
  return (
    <StyledSection id="pricing">
      <StyledDescription>
        <h4>Choose A Plan</h4>
        <h2>Flexible Pricing Plans</h2>
      </StyledDescription>
      <CardContainer>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </CardContainer>
    </StyledSection>
  );
};

export default Pricing;

const StyledSection = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 3rem;
`;

const StyledDescription = styled.div`
  display: grid;
  place-items: center;
  height: 10rem;
  width: 60%;
  margin-top: 4rem;
  h4 {
    font-size: 1rem;
    letter-spacing: 1px;
    color: #fe5e9d;
  }
  h2 {
    font-size: 3.3rem;
  }
`;

const CardContainer = styled.div`
  height: 25rem;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem 3rem;
  text-align: center;
`;
