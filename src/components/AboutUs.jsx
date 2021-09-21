import styled from "styled-components";
import boxlogo from "./assets/boxlogo.png";

const JoinUs = () => {
  return (
    <StyledSection id="about">
      <CardContainer>
        <CardsSmall>
          {/* <SmallCards />
          <SmallCards />
          <SmallCards /> */}
        </CardsSmall>
        <CardBig>
          <BigCard>
            <img src={boxlogo} alt="Block logo" />
            <h1>WHAT IS HSHBLOCK?</h1>
            <p>
              HSHBLOCK is a wide platform that is focused on helping the
              community through our multiple play to earn game features. It is a
              platform integrated into Binance Smart Chain that will
              revolutionize the NFT gaming award system such as: In-game
              rewards, NFT/$BLOCK staking, and Player-to-Player Tradeoff. <br />
              <br />
              HSHBLOCK will also engage in trading and exchange platforms and
              other blockchain services. Through our $BLOCK token, we will
              achieve all our long-term plans for the good of our community.
            </p>
          </BigCard>
        </CardBig>
        <CardsSmall>
          {/* <SmallCards />
          <SmallCards />
          <SmallCards /> */}
        </CardsSmall>
      </CardContainer>
    </StyledSection>
  );
};

export default JoinUs;

const StyledSection = styled.section`
  display: grid;
  grid-template-rows: 1fr 4fr;
  place-items: center;
  padding-top: 3rem;
  height: 100vh;
`;

const CardContainer = styled.div`
  height: 80%;
  width: 100%;
  padding: 1rem 3rem;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-auto-flow: column;
  justify-content: center;
`;

const CardsSmall = styled.div`
  display: grid;
  height: 22rem;
  place-items: center;
  padding: 0;
  margin: 0;
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
    margin-top: 5rem;
    padding: 2rem;
    position: absolute;
  }
`;
