import styled from "styled-components";
import boxlogo from "../images/boxlogo.png";
import weekly from "../images/weekly.jpg";
import yearly from "../images/yearly.jpg";
import ScrollAnimation from "react-animate-on-scroll";

const Tournaments = () => {
  return (
    <Container className=" md:container md:mx-auto min-h-screen grid gap-2 grid-cols-2 pt-0">
      <Weekly className="h-2/3 w-full px-8 py-2 min-h-screen">
        <center>
          <ScrollAnimation animateIn="fadeIn">
            <img className="h-28" src={boxlogo} alt="box logo" />
          </ScrollAnimation>
          {/* <h1 className="text-3xl">WEEKLY TOURNAMENTS REWARDS</h1> */}
        </center>
        {/* <div className="weekly-table h-2/3">
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
        </div> */}
        <ScrollAnimation animateIn="fadeIn">
          <img src={weekly} alt="weekly tournament" />
        </ScrollAnimation>
      </Weekly>
      <Yearly className="h-2/3 w-full px-8 py-2 min-h-screen">
        <center>
          <ScrollAnimation animateIn="fadeIn">
            <img className="h-28" src={boxlogo} alt="box logo" />
          </ScrollAnimation>
          {/* <h1 className="text-3xl">YEARLY TOURNAMENTS REWARDS</h1> */}
        </center>
        <ScrollAnimation animateIn="fadeIn">
          <img src={yearly} alt="yearly tournament" />
        </ScrollAnimation>
        {/* <div className="yearly-table h-2/3">
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
        </div> */}
      </Yearly>
    </Container>
  );
};

export default Tournaments;

const Container = styled.div`
  //!  Media Query
  @media (max-width: 638.98px) {
    display: block;
  }

  @media (min-width: 640px) {
    display: block;
  }

  @media (min-width: 1024px) {
    display: flex;
  }
`;

const Weekly = styled.div`
  background: #fbf6f6;
  border-radius: 30px;
  h1 {
    font-weight: bold;
    color: #f8a70a;
    padding-bottom: 1.2rem;
  }
  p {
    font-weight: bold;
    color: #f8a70a;
  }

  td,
  th,
  tr {
    font-size: 12px;
    border: 1px solid black;
    font-weight: bold;
    color: #f8a70a;
    text-align: center;
    vertical-align: middle;
  }

  //!  Media Query
  @media (max-width: 638.98px) {
    height: auto;
  }
`;

const Yearly = styled.div`
  background: #fbf6f6;
  border-radius: 30px;
  h1 {
    font-weight: bold;
    color: #f8a70a;
    padding-bottom: 1.2rem;
  }
  p {
    font-weight: bold;
    color: #f8a70a;
  }
  td,
  th,
  tr {
    font-size: 12.5px;
    border: 1px solid black;
    font-weight: bold;
    color: #f8a70a;
    text-align: center;
    vertical-align: middle;
  }
`;
