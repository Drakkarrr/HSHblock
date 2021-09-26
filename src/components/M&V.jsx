import styled from "styled-components";
import boxlogo from "./assets/boxlogo.png";
import ScrollAnimation from "react-animate-on-scroll";

const Aim = () => {
  return (
    <StyledAim>
      <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
        <StyledCard>
          <img src={boxlogo} alt="block logo" />
          <ScrollAnimation animateIn="fadeIn">
            <h1>Mission</h1>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn">
            <p>
              1. To secure investors investments
              <br /> 2. To provide smooth gaming experience and receive rewards.{" "}
              <br /> 3. To apply new trading and exchange platform that contains
              the entire feature essential to a trader. <br /> 4. To safeguard
              the investment of our community through implementation of our
              anti-bot and anti-cheat system.
            </p>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn">
            <h1>Vision</h1>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn">
            <p>
              1. To become one of the world’s leading and most widely used token
              not just in the virtual world but also in all kinds of industry in
              the real world. <br /> 2. Envisioned to develop more immersive,
              realistic with high rewards gameplay.
            </p>
          </ScrollAnimation>
        </StyledCard>
      </ScrollAnimation>
    </StyledAim>
  );
};

export default Aim;

const StyledAim = styled.section`
  height: 100vh;
  padding: 3rem 5rem;
  display: grid;
  grid-auto-flow: column;

  //!  Media Query
  @media (max-width: 575.98px) {
    margin: 0;
    padding: 1rem 2rem;
  }
`;

const StyledCard = styled.div`
  background: #24266b;
  display: grid;
  place-items: center;
  grid-template-rows: 50px 50px 60px 60px 47px;
  border-radius: 15px;
  height: 100vh;
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

  //!  Media Query
  @media (max-width: 575.98px) {
    height: auto;
    grid-template-rows: 70px 70px 230px 80px 120px;
    height: 100vh;
    p {
      font-size: 1.3rem;
    }
  }
`;
