import styled from "styled-components";
import boxlogo from "../images/boxlogo.png";
import ScrollAnimation from "react-animate-on-scroll";

const LandOfFighter = () => {
  return (
    <Container className="container md:container md:mx-auto pt-20 min-h-screen grid gap-2 grid-cols-2 grid-flow-col place-items-center">
      <div className="h-screen  w-full grid place-items-center">
        <ScrollAnimation animateIn="fadeIn">
          <Sustainability className="sustainability h-full w-full px-8 py-14">
            <center>
              <img className="h-28" src={boxlogo} alt="box logo" />
            </center>
            <h1 className="text-6xl">SUSTAINABILITY</h1>
            <p className="text-2xl">
              1. HSHBLOCK website contains Ads – 70% of the earnings will be put
              in the in-game rewards pool. <br />
              <br /> 2. HSHBLOCK has its own YouTube Channel - 70% of the
              earnings will be put into the in-game rewards pool. <br />
              <br /> 3. In-game contains Ads before and after each Daily Quest-
              70% of the earnings will be put into the in-game rewards pool.{" "}
              <br />
              <br /> 4. Weekly and Yearly Tournaments % rewards will be put in
              the in-game rewards pool.
            </p>
          </Sustainability>
        </ScrollAnimation>
      </div>
      <ScrollAnimation animateIn="fadeIn">
        <div className="h-screen w-full grid place-items-center">
          <LandOfFighterContainer className="land-of-fighter h-full w-full px-8 py-14">
            <center>
              <img className="h-28" src={boxlogo} alt="box logo" />
            </center>
            <h1 className="text-6xl">INGAME PLAY TO EARN MORE</h1>
            <p className="text-2xl">
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
          </LandOfFighterContainer>
        </div>
      </ScrollAnimation>

      {/* <div className="h-screen w-full grid place-items-center">
        <StatsTable className="stats-table h-full w-full px-1 py-14">
          <center>
            <img className="h-28" src={boxlogo} alt="box logo" />
            <h1 className="text-3xl">QUEST</h1>
          </center>
          <div className="table h-1/4">
            <tr>
              <th colSpan="2">DAILY QUEST</th>
              <th>REWARDS</th>
            </tr>
            <tr>
              <td>Survival Mode</td>
              <td>Minimum 1 Fighter</td>
              <td>$BLOCK</td>
            </tr>
            <tr>
              <td>PVP</td>
              <td>Minimum 3 Fighters</td>
              <td>$BLOCK</td>
            </tr>
            <tr>
              <td>PRACTICE MODE</td>
              <td></td>
              <td>NO REWARD</td>
            </tr>
            <tr>
              <th colSpan="2">MONTHLY QUEST</th>
              <th>REWARDS</th>
            </tr>
            <tr>
              <td>BOSS FIGHT</td>
              <td>Minimum 1 Fighter</td>
              <td>$BLOCK</td>
            </tr>
          </div>
          <p className="text-sm py-4">
            *** FIGHTER STAMINA WILL RESET AT 00:00 UTC <br />
            *** BOTS AND CHEATS WILL BE TOTALLY BANNED <br /> *** EVERY MONTH 1
            NEW CHARACTER WILL BE ADDED IN MARKET <br /> *** WITHDRAWAL AFTER 15
            DAYS
          </p>
        </StatsTable>
      </div> */}
    </Container>
  );
};

export default LandOfFighter;

const Container = styled.div`
  //!  Media Query
  @media (max-width: 638.98px) {
    display: block;
  }

  @media (min-width: 640px) {
    display: block;
    background: none;
  }

  @media (min-width: 1024px) {
    display: flex;
  }
`;

const Sustainability = styled.div`
  border-radius: 30px;
  background: #fbf6f6;
  text-align: center;
  background: none;
  h1 {
    font-weight: bold;
    color: #f8a70a;
  }
  p {
    font-weight: bold;
    color: #f8a70a;
    text-align: left;
  }

  //!  Media Query
  @media (max-width: 638.98px) {
    width: 100vw;
    padding-top: 0;

    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
      line-height: 1.5;
      margin-top: 2rem;
    }
  }

  @media (min-width: 1024px) {
    background: none;
  }
`;

const LandOfFighterContainer = styled.div`
  border-radius: 30px;
  background: #fbf6f6;
  padding-bottom: 3px;
  h1 {
    font-weight: bold;
    color: #f8a70a;
    text-align: center;
  }
  p {
    font-weight: bold;
    color: #f8a70a;
    padding-top: 2rem;
  }

  //!  Media Query
  @media (max-width: 638.98px) {
    width: 100vw;
    padding-top: 0;
    background: none;
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
      line-height: 1.5;
    }
  }

  @media (min-width: 640px) {
    background: none;
    h1 {
      font-size: 3rem;
    }
    p {
      font-size: 1.3rem;
      line-height: 1.4;
    }
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 3rem;
    }
    p {
      font-size: 1.3rem;
      line-height: 1.4;
    }
  }
`;

// const StatsTable = styled.div`
//   border-radius: 30px;
//   background: #fbf6f6;
//   h1 {
//     font-weight: bold;
//     color: #f8a70a;
//   }

//   td,
//   th,
//   tr {
//     border: 1px solid black;
//     width: 20rem;
//     height: auto;
//     color: #f8a70a;
//     text-align: center;
//   }
//   p {
//     font-weight: bold;
//     color: #f8a70a;
//     font-size: 13px;
//   }
// `;
