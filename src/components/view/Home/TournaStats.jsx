import styled from "styled-components";
import boxlogo from "../images/boxlogo.png";

const TournaStats = () => {
  return (
    <div className="container md:container md:mx-auto pt-20 min-h-screen">
      <TournStat className="px-8 py-14">
        <center>
          <img className="h-28" src={boxlogo} alt="box logo" />
          <h1 className="text-3xl">
            LAND OF FIGHTER TOURNAMENTS PAY TO EARN MORE
          </h1>
        </center>
        <div className="tounament-table">
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
        </div>
      </TournStat>
    </div>
  );
};

export default TournaStats;

const TournStat = styled.div`
  border-radius: 30px;
  background: #fbf6f6;
  h1 {
    font-weight: bold;
    color: #f8a70a;
  }

  td,
  th,
  tr {
    border: 1px solid black;
    font-weight: bold;
    color: #f8a70a;
    vertical-align: middle;
    text-align: center;
  }
  p {
    font-weight: bold;
    color: #f8a70a;
    text-align: left;
  }
`;
