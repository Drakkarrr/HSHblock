import styled from "styled-components";
import boxlogo from "../images/boxlogo.png";
import ScrollAnimation from "react-animate-on-scroll";

const Goals = () => {
  return (
    <Container className=" md:container md:mx-auto min-h-screen grid gap-2 grid-cols-2 pt-20">
      <ScrollAnimation animateIn="fadeIn">
        <Mission className="h-2/3 w-full px-8 py-14 min-h-screen">
          <center>
            <img className="h-28" src={boxlogo} alt="box logo" />
            <h1 className="text-8xl">Mission</h1>
          </center>
          <p className="text-2xl">
            1. To secure investors investments
            <br /> 2. To provide smooth gaming experience and receive rewards.{" "}
            <br /> 3. To apply new trading and exchange platform that contains
            the entire feature essential to a trader. <br /> 4. To safeguard the
            investment of our community through implementation of our anti-bot
            and anti-cheat system.
          </p>
        </Mission>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <Vision className="h-2/3 w-full px-8 py-14 min-h-screen">
          <center>
            <img className="h-28" src={boxlogo} alt="box logo" />
            <h1 className="text-8xl">Vision</h1>
          </center>
          <p className="text-2xl">
            1. To become one of the world’s leading and most widely used token
            not just in the virtual world but also in all kinds of industry in
            the real world. <br /> 2. Envisioned to develop more immersive,
            realistic with high rewards gameplay.
          </p>
        </Vision>
      </ScrollAnimation>
    </Container>
  );
};

export default Goals;

const Container = styled.div`
  //!  Media Query
  @media (max-width: 638.98px) {
    display: block;
  }
  @media (min-width: 640px) {
    display: block;
  }
  @media (min-width: 1024px) {
    display: flex;
  }
`;

const Mission = styled.div`
  background: #fbf6f6;
  border-radius: 30px;
  h1 {
    font-weight: bold;
    color: #f8a70a;
  }
  p {
    font-weight: bold;
    color: #f8a70a;
  }

  //!  Media Query
  @media (max-width: 638.98px) {
    background: none;
    h1 {
      font-size: 3rem;
    }
  }

  @media (min-width: 640px) {
    display: block;
    background: none;
    h1 {
      font-size: 7rem;
    }
    p {
      font-size: 2rem;
      line-height: normal;
      margin-top: 2rem;
    }
    img {
      height: 15rem;
    }
  }
`;

const Vision = styled.div`
  background: #fbf6f6;
  border-radius: 30px;
  h1 {
    font-weight: bold;
    color: #f8a70a;
  }
  p {
    font-weight: bold;
    color: #f8a70a;
  }
  @media (max-width: 638.98px) {
    background: none;
    h1 {
      font-size: 3rem;
    }
  }
  @media (min-width: 640px) {
    display: block;
    background: none;
    h1 {
      font-size: 7rem;
    }
    p {
      font-size: 2rem;
      line-height: normal;
      margin-top: 2rem;
    }
    img {
      height: 15rem;
    }
  }
`;
