import styled from "styled-components";
import logo from "./assets/hblogo.png";
import Header from "./Header";
import AboutUs from "./AboutUs";
import AboutUss from "./AboutUss";
import Aim from "./M&V";
import AboutUsss from "./AboutUsss";
import StatsTable from "./StatsTable";
import Pricing from "./Pricing";
import TournaWeek from "./TournaWeek";
import TournaYear from "./TournaYear";
import Disclaimer from "./Disclaimer";
import Privacy from "./PrivacyPolicy";

const Home = () => {
  return (
    <>
      <Header />
      <StyledHome id="home">
        <StyledImage>
          <img src={logo} alt="Block logo og hashblock" />
        </StyledImage>
        <StyledDescription>
          <h4>Welcome to</h4>
          <h1>HSHBLOCK !</h1>
          <p>
            A secured &amp; trusted community friendly crypto trading &amp;
            exchange platform for everybody.
          </p>
          <div className="buttons">
            <button>
              <a href="#about">About HSHBLOCK</a>
            </button>
          </div>
        </StyledDescription>
      </StyledHome>
      <AboutUs />
      <AboutUss />
      <Aim />
      <AboutUsss />
      <StatsTable />
      <Pricing />
      <TournaWeek />
      <TournaYear />
      <Disclaimer />
      <Privacy />
    </>
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
    font-size: 5.5rem;
    color: #f8a70a;
    line-height: 1.3;
    padding: 1rem;
  }
  p {
    font-size: 1.2rem;
    padding: 1rem;
  }
  button {
    border: 1px solid #f86bc3;
    color: #f8a70a;
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
    color: #f8a70a;
  }
`;

const StyledImage = styled.div`
  height: 35rem;
  img {
    height: 90%;
    width: auto;
  }
`;
