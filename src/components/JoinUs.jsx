import styled from "styled-components";
import SmallCards from "./Cards-small";

const JoinUs = () => {
  return (
    <StyledSection id="about">
      <StyledText>
        <h1>Join The Crypto Exchange</h1>
        <p>Invest in cryptocurrency with the most trusted crypto company</p>
      </StyledText>
      <CardContainer>
        <CardsSmall>
          <SmallCards />
          <SmallCards />
          <SmallCards />
        </CardsSmall>
        <CardBig>
          <BigCard>
            <h2>Coming Soon!</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ut
              eos commodi nihil officia ad laborum, voluptatem expedita, velit,
              nemo quam aspernatur modi. Provident voluptatem fugit
              reprehenderit sapiente, facere repudiandae ratione tempora, porro
              non. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Quis, deserunt.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              quia commodi quis quisquam veritatis error ea exercitationem
              veniam, itaque perferendis.
            </p>
          </BigCard>
        </CardBig>
        <CardsSmall>
          <SmallCards />
          <SmallCards />
          <SmallCards />
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

const StyledText = styled.div`
  text-align: center;
  padding: 1rem;
  h1 {
    padding-bottom: 1rem;
    font-size: 3rem;
  }
  p {
    opacity: 0.5;
  }
`;

const CardContainer = styled.div`
  height: 80%;
  width: 100%;
  margin-top: 4rem;
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
  top: -40px;
  display: grid;
  margin: 0;
  padding: 0;
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
  h2 {
    font-size: 4rem;
    font-weight: lighter;
    padding-top: 3rem;
  }
  p {
    padding: 2rem;
    position: absolute;
  }
`;
