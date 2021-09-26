import styled from "styled-components";
import boxlogo from "./assets/boxlogo.png";
import ScrollAnimation from "react-animate-on-scroll";
import { StyledSection, StyledDescription, CardContainer } from "./TournaWeek";

const TournaYear = () => {
  return (
    <ScrollAnimation animateIn="wobble" initiallyVisible={true}>
      <StyledSection>
        <StyledDescription>
          <img src={boxlogo} alt="Box logo of hshblock" />
          <h2>YEARLY TOURNAMENTS REWARDS LAND OF FIGHTER</h2>
        </StyledDescription>
        <StyledCardContainer>
          <tr>
            <th colSpan="3">Ranking Rewards</th>
          </tr>

          <tr>
            <th colSpan="3">Yearly Tournament </th>
          </tr>

          <tr>
            <td>Rank 1</td>
            <td colSpan="3">35% of the Total Entry Pool + 3 Fighter Skins</td>
          </tr>

          <tr>
            <td>Rank 2</td>
            <td colSpan="3">16% of the Total Entry Pool +2 Fighter Skins</td>
          </tr>
          <tr>
            <td>Rank 3</td>
            <td colSpan="3">10% of the Total Entry Pool + 1 Fighter Skin</td>
          </tr>
          <tr>
            <td>Rank 4 to 20</td>
            <td colSpan="3">10% of the Total Entry Pool divided by 17</td>
          </tr>
          <tr>
            <td>In Game Normal Rewards Pool</td>
            <td colSpan="3">11% of the Total Entry Pool</td>
          </tr>

          <tr>
            <td>In Game Maintenance</td>
            <td colSpan="3">11% of the Total Entry Pool</td>
          </tr>

          <tr>
            <td className="custom">
              Community Rewards with at least 250 $Block and 1 Fighter holding
              throughout the year (Game Spectator - Lottery)
            </td>
            <td colSpan="3">7% of the Total Entry Pool</td>
          </tr>
        </StyledCardContainer>
      </StyledSection>
    </ScrollAnimation>
  );
};

export default TournaYear;

const StyledCardContainer = styled(CardContainer)`
  width: 82%;
  td.custom {
    padding: 0 10px;
  }

  //!  Media Query
  @media (max-width: 575.98px) {
    width: 90%;
  }
`;
