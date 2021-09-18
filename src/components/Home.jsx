import styled from "styled-components";
import building from "./assets/building.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <StyledHome id="home">
      <StyledDescription>
        <h4>Most Trusted Crypto Company</h4>
        <h1>
          The Future <br /> Token Economy
        </h1>
        <p>Buy, sell and trade crypto to unlock the future of finance</p>
        <div className="buttons">
          <button>
            <Link to="#">Buy Now</Link>
          </button>
          <button>
            <Link to="#">Download Whitepaper</Link>
          </button>
        </div>
      </StyledDescription>
      <StyledImage>
        <img src={building} alt="Building" />
      </StyledImage>
    </StyledHome>
  );
};

export default Home;

const StyledHome = styled.section`
  height: 100vh;
  padding-top: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  background: rgb(29, 29, 99);
  background: linear-gradient(
    90deg,
    rgba(29, 29, 99, 1) 0%,
    rgba(88, 48, 149, 1) 50%
  );
`;

const StyledDescription = styled.div`
  padding: 1rem 2rem;
  height: 35rem;
  h4 {
    color: #f86bc3;
    padding: 1rem;
  }
  h1 {
    font-size: 3.5rem;
    line-height: 1.3;
    padding: 1rem;
  }
  p {
    font-size: 1.2rem;
    padding: 1rem;
  }
  button {
    border: 1px solid #f86bc3;
    color: #ffffff;
    background: none;
    font-size: 1rem;
    padding: 1rem 2rem;
    margin-left: 1rem;
    border-radius: 20px;
    cursor: pointer;
    &:hover {
      transition: 0.5s;
      background-color: #f86bc3;
    }
  }
  a {
    text-decoration: none;
    color: #ffffff;
  }
`;

const StyledImage = styled.div`
  height: 34rem;
  img {
    height: 100%;
    width: auto;
  }
`;
