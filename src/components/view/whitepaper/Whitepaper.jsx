import whitepaper1 from "../images/whitepaper1.jpg";
import whitepaper2 from "../images/whitepaper2.jpg";
import whitepaper3 from "../images/whitepaper3.jpg";
import whitepaper4 from "../images/whitepaper4.jpg";
import whitepaper5 from "../images/whitepaper5.jpg";
import whitepaper6 from "../images/whitepaper6.jpg";
import whitepaper7 from "../images/whitepaper7.jpg";
import whitepaper8 from "../images/whitepaper8.jpg";
import whitepaper9 from "../images/whitepaper9.jpg";
import whitepaper10 from "../images/whitepaper10.jpg";
import whitepaper11 from "../images/whitepaper11.jpg";
import whitepaper12 from "../images/whitepaper12.jpg";
import whitepaper13 from "../images/whitepaper13.jpg";
import whitepaper14 from "../images/whitepaper14.jpg";
import styled from "styled-components";

const Tokenomics = () => {
  return (
    <Container className="container mx-auto px-4 pt-20">
      <img src={whitepaper1} alt="hshblock whitepaper" />
      <img src={whitepaper2} alt="hshblock whitepaper" />
      <img src={whitepaper3} alt="hshblock whitepaper" />
      <img src={whitepaper4} alt="hshblock whitepaper" />
      <img src={whitepaper5} alt="hshblock whitepaper" />
      <img src={whitepaper6} alt="hshblock whitepaper" />
      <img src={whitepaper7} alt="hshblock whitepaper" />
      <img src={whitepaper8} alt="hshblock whitepaper" />
      <img src={whitepaper9} alt="hshblock whitepaper" />
      <img src={whitepaper10} alt="hshblock whitepaper" />
      <img src={whitepaper11} alt="hshblock whitepaper" />
      <img src={whitepaper12} alt="hshblock whitepaper" />
      <img src={whitepaper13} alt="hshblock whitepaper" />
      <img src={whitepaper14} alt="hshblock whitepaper" />
    </Container>
  );
};

export default Tokenomics;

const Container = styled.div`
  @media (max-width: 638.98px) {
    padding: 3.5rem 0;
    padding-bottom: 0;
    margin: 0;
    img {
      object-fit: cover;
      height: 12.7rem;
    }
  }
`;
