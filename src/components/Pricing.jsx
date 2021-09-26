import styled from "styled-components";
import boxlogo from "./assets/boxlogo.png";
import ScrollAnimation from "react-animate-on-scroll";

const Pricing = () => {
  return (
    <ScrollAnimation animateIn="wobble" initiallyVisible={true}>
      <StyledSection id="tournament">
        <StyledDescription>
          <img src={boxlogo} alt="Box logo of hshblock" />
          <h4>HSHBLOCK brings you fun &amp; exciting tournament</h4>
          <h2>LAND OF FIGHTER TOURNAMENTS PAY TO EARN MORE</h2>
        </StyledDescription>
        <CardContainer>
          <tr>
            <th colSpan="3">DETAILS</th>
          </tr>

          <tr>
            <td>Numbers of fighters</td>
            <td colSpan="2">Minimum of 3 Fighters</td>
          </tr>

          <tr className="custom1">
            <td rowSpan="5" className="custom2">
              PVP
            </td>
            <td>Weekly</td>
            <td>Entry Bet - 0.10 BNB</td>
          </tr>

          <tr>
            <td rowSpan="4">Yearly</td>
            <td>Joined At least 12 Weekly Events - Free</td>
          </tr>
          <tr>
            <td>Joined At least 6 Weekly Events – 0.02 BNB</td>
          </tr>
          <tr>
            <td>Joined Less than 6 Events - 0.2 BNB</td>
          </tr>
          <tr>
            <td>Join Zero Event - 5 BNB</td>
          </tr>
          <tr>
            <td>
              Players with 20 and above Fighters can put 4 entries in
              tournaments
            </td>
            <td rowSpan="2" colSpan="2">
              The player will choose the best team to advance after the quarter
              finals
            </td>
          </tr>
          <tr>
            <td>
              Players with 10 to 19 Fighters can put 2 entries in tournaments
            </td>
            {/* <td>tournaments</td> */}
          </tr>
          <tr>
            <td>Bracketing</td>
            <td colSpan="2">Single Elimination</td>
          </tr>
          <p>
            *** 3 ROUNDS FOR EACH FIGHT <br />
            *** BOTS AND CHEATS WILL BE TOTALLY BANNED <br />
            *** WEEKLY TOURNAMENT REGISTRATION THURSDAY 00:00 UTC TO FRIDAY
            20:00 UTC <br /> *** WEEKLY TOURNAMENT STARTS: SATURDAY 00:00 UTC
            ENDS: SUNDAY 23:00 UTC REWARDS: MONDAY 00:00 – 23:00 UTC <br /> ***
            FIRST YEARLY TOURNAMENT REGISTRATION DECEMBER 18 2022 00:00 UTC TO
            DECEMBER 20 2022 23:00 UTC <br /> *** FIRST YEARLY TOURNAMENT
            STARTS: DECEMER 21 2022 00:00 UTC ENDS: DECEMBER 22 2022 20:00 UTC
            REWARDS: <br />
            <span style={{ marginLeft: "1.4rem" }}>
              DECEMBER 23 2022 00:00 ONWARDS TO DECEMBER 24 2022
            </span>
          </p>
        </CardContainer>
      </StyledSection>
    </ScrollAnimation>
  );
};

export default Pricing;

const StyledSection = styled.div`
  height: 120vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 3rem;

  //!  Media Query
  @media (max-width: 575.98px) {
    height: 150%;
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    height: 140vh;
  }
`;

const StyledDescription = styled.div`
  display: grid;
  place-items: center;
  height: 15rem;
  width: 70%;
  margin-top: 4rem;
  img {
    height: 6rem;
  }
  h4 {
    font-size: 1rem;
    letter-spacing: 1px;
    color: #fe5e9d;
  }
  h2 {
    font-size: 2.3rem;
  }

  //!  Media Query
  @media (max-width: 575.98px) {
    margin-bottom: 4rem;
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    margin-top: 2rem;
    h2 {
      font-size: 1.7rem;
    }
  }
`;

const CardContainer = styled.div`
  height: 35rem;
  width: 80%;
  background: #24266b;
  text-align: center;
  padding: 1.2rem 3rem;
  padding-top: 3rem;
  border-radius: 20px;
  p {
    text-align: start;
    margin-top: 1.5rem;
    font-size: 9px;
  }
  td,
  th,
  tr {
    border: 1px solid black;
    width: 20rem;
    height: auto;
    font-size: 9px;
    text-align: center;
    vertical-align: middle;
  }

  //!  Media Query
  @media (max-width: 575.98px) {
    width: 95%;
    height: 50rem;
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    height: 100vw;
    margin-bottom: 10rem;
  }
`;
