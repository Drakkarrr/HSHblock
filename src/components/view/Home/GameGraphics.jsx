import { Carousel } from "3d-react-carousal";
import ScrollAnimation from "react-animate-on-scroll";
import lof1 from "../images/lof1.jpg";
import lof2 from "../images/lof2.jpg";
import lof3 from "../images/lof3.jpg";
import lof4 from "../images/lof4.jpg";
import bomani from "../images/bomani.jpg";
import perri from "../images/perri.jpg";

import styled from "styled-components";

const GameGraph = () => {
  let slides = [
    <img src={lof1} alt="1" />,
    <img src={lof2} alt="2" />,
    <img src={lof3} alt="3" />,
    <img src={lof4} alt="4" />,
    <img src={bomani} alt="5" />,
    <img src={perri} alt="6" />,
  ];

  return (
    <Container className="md:container md:mx-auto min-h-screen">
      <center>
        <ScrollAnimation animateIn="fadeIn">
          <h1 className="p-7 font-bold text-6xl">Land Of Fighters</h1>
        </ScrollAnimation>
      </center>
      <Carousel slides={slides} autoplay={false} />
    </Container>
  );
};

export default GameGraph;

const Container = styled.div`
  h1 {
    color: #f8a70a;
  }
`;
