import styled from "styled-components";
import boxlogo from "./assets/boxlogo.png";

const Aim = () => {
  return (
    <StyledAim>
      <StyledCard>
        <img src={boxlogo} alt="block logo" />
        <h1>Mission</h1>
        <p>
          1. To secure investors investments
          <br /> 2. To provide smooth gaming experience and receive rewards.{" "}
          <br /> 3. To apply new trading and exchange platform that contains the
          entire feature essential to a trader. <br /> 4. To safeguard the
          investment of our community through implementation of our anti-bot and
          anti-cheat system.
        </p>
        <h1>Vision</h1>
        <p>
          1. To become one of the world’s leading and most widely used token not
          just in the virtual world but also in all kinds of industry in the
          real world. <br /> 2. Envisioned to develop more immersive, realistic
          with high rewards gameplay.
        </p>
      </StyledCard>
    </StyledAim>
  );
};

export default Aim;

const StyledAim = styled.section`
  height: 100vh;
  padding: 3rem 5rem;
  display: grid;
  grid-auto-flow: column;
  margin-top: 3rem;
`;

const StyledCard = styled.div`
  background: #24266b;
  display: grid;
  place-items: center;
  grid-template-rows: 50px 50px 60px 60px 47px;
  border-radius: 15px;
  height: 30rem;
  width: auto;
  padding: 0 7rem;
  padding-top: 1rem;

  img {
    height: 6rem;
    width: auto;
  }

  h1 {
    font-size: 2rem;
    font-weight: lighter;
  }
`;
