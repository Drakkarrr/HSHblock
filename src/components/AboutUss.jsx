import styled from "styled-components";
import boxlogo from "./assets/boxlogo.png";

const Blogs = () => {
  return (
    <StyledContainer>
      <CardBig>
        <BigCard>
          <img src={boxlogo} alt="Block logo" />
          <h1>WHY WE BUILD HSHBLOCK?</h1>
          <p>
            We built HSHBLOCK because of our frustrations in the crypto world.
            There are lots of investors, including ourselves, that have been
            scammed all the time by these opportunistic people. Their only
            purpose is to rob the money of the community. We built HSHBLOCK to
            protect the investments of the community, grow exponentially, and to
            end the traditional NFT idle game.
          </p>
        </BigCard>
      </CardBig>
      <CardBig>
        <BigCard>
          <img src={boxlogo} alt="Block logo" />
          <h1>WHAT IS #BLOCK?</h1>
          <p style={{ marginTop: 0 }}>
            $BLOCK is our in-game token that will circulate in the ecosystem of
            our game and other future projects.
          </p>
        </BigCard>
      </CardBig>
    </StyledContainer>
  );
};

export default Blogs;

const StyledContainer = styled.div`
  height: 80vh;
  margin-top: 4rem;
  display: flex;
  justify-content: space-around;
`;

const CardBig = styled.div`
  position: relative;
  width: 30rem;
`;

const BigCard = styled.div`
  background: #24266b;
  display: grid;
  place-items: center;
  grid-template-rows: 50px 50px 50px;
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
