import styled from "styled-components";

const SmallCards = () => {
  return (
    <StyledCards>
      <h4>Lorem, ipsum dolor.</h4>
      <p>Lorem ipsum.</p>
    </StyledCards>
  );
};

export default SmallCards;

const StyledCards = styled.div`
  border-radius: 10px;
  background: #24266b;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  height: 6rem;
  width: 13rem;
  line-height: 0.1;
  h4 {
    font-size: 1rem;
    font-weight: lighter;
  }
  p {
    font-size: 8px;
    opacity: 0.5;
  }
`;
