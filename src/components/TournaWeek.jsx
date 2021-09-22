import styled from "styled-components";
import boxlogo from "./assets/boxlogo.png";

const TournaWeek = () => {
  return (
    <StyledSection id="pricing">
      <StyledDescription>
        <img src={boxlogo} alt="Box logo of hshblock" />
        <h2>WEEKLY TOURNAMENTS REWARDS LAND OF FIGHTER</h2>
      </StyledDescription>
      <CardContainer>
        <tr>
          <th colSpan="3">Ranking Rewards</th>
        </tr>

        <tr>
          <th colSpan="3">Weekly Tournament </th>
        </tr>

        <tr className="custom1">
          <td>Rank 1</td>
          <td colSpan="3">20% of the Total Entry Pool</td>
        </tr>

        <tr>
          <td>Rank 2</td>
          <td colSpan="3">10% of the Total Entry Pool</td>
        </tr>
        <tr>
          <td>Rank 3</td>
          <td colSpan="3">7% of the Total Entry Pool</td>
        </tr>
        <tr>
          <td>Rank 4 to 20</td>
          <td colSpan="3">10% of the Total Entry Pool divided by 17</td>
        </tr>
        <tr>
          <td>Yearly Event Pool</td>
          <td colSpan="3">20% of the Total Entry Pool</td>
        </tr>

        <tr>
          <td>In Game Normal Rewards Pool</td>
          <td colSpan="3">15% of the Total Entry Pool</td>
        </tr>

        <tr>
          <td>In Game Maintenance</td>
          <td colSpan="3">15% of the Total Entry Pool</td>
        </tr>

        <tr>
          <td className="custom">
            Community Rewards with at least 250 $Block and 1 Fighter holding
            throughout the month (Game Spectator - Lottery)
          </td>
          <td colSpan="3">3% of the Total Entry Pool</td>
        </tr>
      </CardContainer>
    </StyledSection>
  );
};

export default TournaWeek;

export const StyledSection = styled.div`
  height: 120vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 3rem;
`;

export const StyledDescription = styled.div`
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
`;

export const CardContainer = styled.div`
  height: 30rem;
  width: 80%;
  background: #24266b;
  text-align: center;
  border-radius: 20px;
  padding: 3rem 12rem;
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
  td.custom {
    padding: 0 10px;
  }
`;
