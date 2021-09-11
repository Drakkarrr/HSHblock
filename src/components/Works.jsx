import { Link } from "react-router-dom";
import styled from "styled-components";
import { StyledButton } from "./Cards";
import Cards from "./Cards-big";

const Works = () => {
  return (
    <StyledWork>
      <StyledLeft>
        <StyledText>
          <h4>We Do It Best</h4>
          <h2>See How It Works</h2>
          <p>
            Find out how you can invest and <br /> win with cryptocurrency
          </p>
          <Button>
            <Link to="#">Download Whitepaper</Link>
          </Button>
          <Cards />
        </StyledText>
      </StyledLeft>
      <div className="cards">
        <Cards />
        <div>
          <br />
        </div>
        <Cards />
      </div>
    </StyledWork>
  );
};

export default Works;

const StyledWork = styled.div`
  padding: 2rem 3rem;
  display: flex;
  justify-content: space-around;
`;

const StyledLeft = styled.div`
  display: grid;
`;

const StyledText = styled.div`
  padding: 1rem;
  h4 {
    padding: 1rem;
    padding-bottom: 0;
  }
  h2 {
    color: #f86bc3;
    font-size: 2.4rem;
    padding: 1rem;
    padding-bottom: 0;
  }
  p {
    font-size: 1rem;
    padding: 1rem;
    opacity: 0.5;
  }
`;

const Button = styled(StyledButton)`
  padding: 1rem;
  width: 13rem;
`;
