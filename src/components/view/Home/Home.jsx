import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";
import hblogo from "../../assets/hblogo.png";
// import About from "./About";
// import LandOfFighter from "./LandOfFighter";
// import DailyStats from "./DailyStats";
// import TournaStats from "./TournaStats";
// import Tournaments from "./Tournaments";
// import Tournament from "./Tournament";
// import Channel from "./Channel";
import Goals from "./Goals";
import GameGraphics from "./GameGraphics";
import Address from "./Address";

const HomeComponent = () => {
  return (
    <>
      <HomeContainer className=" md:container md:mx-auto min-h-screen grid pt-16 grid-flow-col grid-cols-2 place-items-center">
        <ImageContainer className="img-container">
          <img
            className="object-fit h-full w-full p-0"
            src={hblogo}
            alt="hshblock landing logo"
          />
        </ImageContainer>
        <ScrollAnimation animateIn="fadeIn">
          <Description className="container mx-auto px-4">
            <h4 className="text-4xl">Welcome to</h4>
            <h1 className="text-7xl">HSHBLOCK!</h1>
            <p className="text-lg flex-wrap">
              A secured &amp; trusted crypto trading &amp; exchange platform for
              everybody.
            </p>
          </Description>
        </ScrollAnimation>
      </HomeContainer>
      {/* <About /> */}
      {/* <LandOfFighter /> */}
      {/* <DailyStats /> */}
      {/* <Tournament /> */}
      {/* <TournaStats /> */}
      {/* <Tournaments /> */}
      {/* <Channel /> */}
      <Goals />
      <GameGraphics />
      <Address />
    </>
  );
};

export default HomeComponent;

const HomeContainer = styled.div`
  background: #fbf6f6;

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

const ImageContainer = styled.div`
  background: none;
`;

const Description = styled.div`
  h4 {
    color: #f8a70a;
    font-weight: bold;
  }

  h1 {
    color: #f8a70a;
    font-weight: bold;
  }
  p {
    font-size: 1.2rem;
    color: #f8a70a;
  }

  //!  Media Query
  @media (max-width: 638.98px) {
    h1 {
      font-size: 3.5rem;
    }
  }

  @media (min-width: 640px) {
    h1 {
      font-size: 3.5rem;
    }
  }
`;
