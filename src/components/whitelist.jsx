import styled from "styled-components";
import boxlogo from "./assets/boxlogo.png";
import { device } from "../breakpoints";

const Whitelist = () => {
  return (
    <StyledSection id="tournament">
      <StyledDescription>
        <img src={boxlogo} alt="Box logo of hshblock" />
        <h2>PRE-SALE FOR WHITELISTED</h2>
      </StyledDescription>
      <CardContainer>
        <tr>
          <th colSpan="3">DETAILS</th>
        </tr>

        <tr>
          <td>$Block for Pre-Sale</td>
          <td>10M</td>
          <td>Only whitelisted is allowed</td>
        </tr>

        <tr className="custom1">
          <td className="custom2"># Of Whitelisted</td>
          <td>1,000</td>
          <td></td>
        </tr>

        <tr>
          <td>$Block Price</td>
          <td>1 BNB = 10,000 $Block</td>
          <td></td>
        </tr>
        <tr>
          <td>Process</td>
          <td>First Come First Serve</td>
          <td></td>
        </tr>
        <tr>
          <td rowSpan="5">BNB Contribution</td>
          <td>0.5 BNB</td>
          <td>Assured 2 Fighters Random</td>
        </tr>

        <tr>
          <td>1 BNB</td>
          <td>
            Assured 3 Fighters Random <br /> and 1 Fighter of your Choice
          </td>
        </tr>

        <tr>
          <td>5 BNB</td>
          <td>
            Assured 4 Fighters Random <br /> and 6 Fighters of your Choice
          </td>
        </tr>

        <tr>
          <td>10 BNB</td>
          <td>
            Assured 5 Fighters Random <br /> and 13 Fighters of your Choice
          </td>
        </tr>

        <tr>
          <td>20 BNB</td>
          <td>
            Assured 6 Fighters Random <br /> and 27 Fighters of your Choice
          </td>
        </tr>

        <tr>
          <td>Discount</td>
          <td>Free Fighters</td>
          <td></td>
        </tr>

        <tr>
          <td>$Block Distribution</td>
          <td>20%</td>
          <td>20% Monthly Distribution</td>
        </tr>

        <tr>
          <td>Beta Test Normal</td>
          <td>Familiarization of Fighters</td>
          <td>Free 1 Random Fighter to All Beta Testers After Beta Test</td>
        </tr>
        <tr>
          <td>Beta Test Tournaments</td>
          <td>Rank 1</td>
          <td>3 Fighters of Your Choice</td>
        </tr>
        <tr>
          <td>Fighter Release</td>
          <td></td>
          <td>Launch of Market Place</td>
        </tr>
        <p>
          *** COST OF FIGHTER: 500 $BLOCK LAUNCH OF MARKET PLACE <br />
          *** ALL FREE NFT FIGHTER CAN’T BE SOLD IN MARKET PLACE <br />
          *** FREE NFT FIGHTER CAN ONLY BE USE IN INGAME DAILY QUEST,
          TOURNAMENTS AND STAKING
          <br />
          ***TOTAL FIGHTERS IN MARKET PLACE: 30 FIGHTHERS + 1 NEW FIGHTER EVERY
          MONTH
        </p>
      </CardContainer>
    </StyledSection>
  );
};

export default Whitelist;

const StyledSection = styled.div`
  height: 150vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 3rem;

  //!  Media Query
  @media only screen and ${device.xs} {
    height: 80vh;
  }

  @media only screen and ${device.sm} {
    height: auto;
  }

  /* @media only screen and ${device.lg} {
    background: green;
  } */
`;

const StyledDescription = styled.div`
  display: grid;
  place-items: center;
  height: 15rem;
  width: 70%;
  margin-top: 2rem;
  img {
    height: 6rem;
  }

  h2 {
    font-size: 2.3rem;
  }

  //!  Media Query
  @media only screen and ${device.xs} {
    h2 {
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }

    img {
      height: 10rem;
    }
  }

  @media only screen and ${device.sm} {
    margin-top: 0;
    h2 {
      font-size: 3rem;
    }

    img {
      height: 10rem;
    }
  }
`;

const CardContainer = styled.div`
  height: auto;
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
  @media only screen and ${device.xs} {
    p {
      font-size: 12px;
    }
  }

  td,
  th,
  tr {
    font-size: 12px;
  }

  @media only screen and ${device.sm} {
    p {
      font-size: 15px;
    }
    td,
    th,
    tr {
      width: 40rem;
      height: 3rem;
      font-size: 15px;
    }
  }
`;
