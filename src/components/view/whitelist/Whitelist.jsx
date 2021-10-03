import whitelist from "../images/whitelist.jpg";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Whitelist = () => {
  return (
    <div className="container mx-auto px-4 pt-20">
      <img src={whitelist} alt="hsh block whitelist" />
      <div>
        <center>
          <Header className="font-bold text-8xl hvr-pulse-shrink shadow-lg">
            <NavLink
              className="p-7"
              target="_blank"
              to={{
                pathname:
                  "https://docs.google.com/forms/d/17HNVF71OojTVSYTZdK-UU54Po8bHNExUXTO1JFI4lIE/edit",
              }}
            >
              Join Us
            </NavLink>
          </Header>
        </center>
      </div>
    </div>
  );
};

export default Whitelist;

const Header = styled.h1`
  margin-top: 3rem;
  color: #f8a70a;

  //!  Media Query
  @media (max-width: 638.98px) {
    margin-top: 1rem;
    border-radius: 50px;
    padding: 1rem 0;
    font-size: 3rem;
  }

  //!  Media Query
  @media (min-width: 640px) {
    margin-top: 1rem;
    border-radius: 50px;
    padding: 1rem 0;
  }
`;
