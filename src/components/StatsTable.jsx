import styled from "styled-components";

const MyComponent = () => {
  return (
    <StyledTableContainer>
      <StyledTable>
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

        <br />
        <br />

        <tr>
          <th colSpan="2">MONTHLY QUEST</th>
          <th>REWARDS</th>
        </tr>
        <tr>
          <td>BOSS FIGHT</td>
          <td>Minimum 1 Fighter</td>
          <td>$BLOCK</td>
        </tr>
        <p>
          *** FIGHTER STAMINA WILL RESET AT 00:00 UTC <br />
          *** BOTS AND CHEATS WILL BE TOTALLY BANNED <br /> *** EVERY MONTH 1
          NEW CHARACTER WILL BE ADDED IN MARKET <br /> *** WITHDRAWAL AFTER 15
          DAYS
        </p>
      </StyledTable>
    </StyledTableContainer>
  );
};

export default MyComponent;

const StyledTableContainer = styled.div`
  height: 80vh;
  padding: 1rem 8rem;
  display: grid;
  justify-content: center;

  //!  Media Query
  @media (max-width: 575.98px) {
    width: 100vw;
    height: 50vh;
  }
`;

const StyledTable = styled.div`
  height: 27rem;
  padding: 1.2rem 3rem;
  padding-top: 3rem;
  width: 40rem;
  text-align: center;
  background: #24266b;
  border-radius: 20px;
  p {
    text-align: start;
    margin-top: 1.5rem;
  }
  td,
  th,
  tr {
    border: 1px solid black;
    width: 20rem;
    height: auto;
  }

  //!  Media Query
  @media (max-width: 575.98px) {
    width: 95vw;
    height: 28rem;
    p {
      font-size: 8.6px;
    }
  }
`;
