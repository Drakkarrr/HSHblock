import styled from "styled-components";
import { StyledButton } from "./Cards";
import boxlogo from "./assets/boxlogo.png";
import ScrollAnimation from "react-animate-on-scroll";

const Works = () => {
  return (
    <>
      <StyledWork id="roadmap">
        <StyledLeft>
          <ScrollAnimation animateIn="fadeIn">
            <StyledText>
              <h4>We Do It Best !</h4>
              <h2>
                You're in good hands with <span>SHSBLOCK</span>
              </h2>
              <p>Invest • Play • Earn</p>
              <Button>
                <a href="#tournament">See Our Tournaments</a>
              </Button>
            </StyledText>
          </ScrollAnimation>
          <CardBig>
            <ScrollAnimation animateIn="flipInY" animateOut="flipOutY">
              <BigCard>
                <img src={boxlogo} alt="Block logo" />
                <h1>SUSTAINABILITY</h1>
                <p>
                  1. HSHBLOCK website contains Ads – 70% of the earnings will be
                  put in the in-game rewards pool. <br />
                  <br /> 2. HSHBLOCK has its own YouTube Channel - 70% of the
                  earnings will be put into the in-game rewards pool. <br />
                  <br /> 3. In-game contains Ads before and after each Daily
                  Quest- 70% of the earnings will be put into the in-game
                  rewards pool. <br />
                  <br /> 4. Weekly and Yearly Tournaments % rewards will be put
                  in the in-game rewards pool.
                </p>
              </BigCard>
            </ScrollAnimation>
          </CardBig>
        </StyledLeft>
        <div className="cards"></div>
      </StyledWork>
      <StyledSawera>
        <div className="ads"></div>
        <ScrollAnimation animateIn="flipInY" animateOut="flipOutY">
          <StyledAzumi>
            <img src={boxlogo} alt="Block logo" />
            <h1 className="custom">LAND OF FIGHTER INGAME PLAY TO EARN</h1>
            <p>
              Land of Fighter is one of the games that HSHBLOCK developed. The
              game features a total of 30 Fighters. Every Fighter has its own
              skills, strengths, and weaknesses. Each Fighters controls are
              fundamentally identical; each has a jump, light attack, heavy
              attack, dodge, block, and 3 skills to succeed in each event.
              Skills can be synced with the other two members for a synergy
              boost, with an especially powerful attack being unleashed if all 3
              party members sync up simultaneously. Players can switch Fighters
              during battle.
            </p>
          </StyledAzumi>
        </ScrollAnimation>
      </StyledSawera>
    </>
  );
};

export default Works;

const StyledWork = styled.div`
  padding: 2rem 3rem;
  display: flex;
  justify-content: space-around;
`;

const StyledLeft = styled.div`
  display: grid;
`;

const StyledText = styled.div`
  padding: 1rem;
  h4 {
    padding: 1rem;
    padding-bottom: 0;
    color: #f86bc3;
  }
  h2 {
    color: #f8a70a;
    font-size: 2rem;
    padding: 1rem;
    padding-bottom: 0;
  }
  p {
    font-size: 1rem;
    padding: 1rem;
  }
`;

const Button = styled(StyledButton)`
  padding: 1rem;
  width: 13rem;
  margin-bottom: 3rem;
  a {
    color: #f8a70a;
  }
`;

const CardBig = styled.div`
  position: relative;
  display: grid;
  margin: 0;
  padding: 0;
`;

const BigCard = styled.div`
  background: #24266b;
  display: grid;
  place-items: center;
  grid-template-rows: repeat(3, 50px);
  border-radius: 15px;
  height: 30rem;
  width: auto;
  padding: 0 2rem;
  padding-top: 1rem;
  img {
    height: 6rem;
    width: auto;
  }
  h1 {
    font-size: 2rem;
    font-weight: lighter;
  }
  p {
    margin-top: 7rem;
    padding: 2rem;
    position: absolute;
  }

  //!  Media Query
  @media (max-width: 575.98px) {
    h1 {
      padding-bottom: 1rem;
    }
  }
`;

const StyledSawera = styled.div`
  padding: 2rem 3rem;
  display: flex;
  justify-content: space-around;
`;

const StyledAzumi = styled.div`
  background: #24266b;
  display: grid;
  place-items: center;
  grid-template-rows: repeat(3, 50px);
  border-radius: 15px;
  height: 30rem;
  width: auto;
  padding: 0 2rem;
  padding-top: 1rem;
  position: relative;
  img {
    height: 6rem;
    width: auto;
  }
  h1 {
    font-size: 2rem;
    font-weight: lighter;
  }
  p {
    margin-top: 3rem;
    padding: 2rem;
    position: absolute;
  }

  //!  Media Query
  @media (max-width: 575.98px) {
    h1 {
      font-weight: lighter;
      padding: 0 35px;
      padding-top: 15px;
      text-align: center;
    }

    p {
      position: relative;
      top: 70px;
      margin: 0;
      padding: 0;
      padding-top: 4px;
      font-size: 1.1rem;
    }
  }
`;
