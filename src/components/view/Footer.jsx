import ScrollAnimation from "react-animate-on-scroll";
import styled from "styled-components";
import facebook from "./images/facebook.jpg";
import twitter from "./images/twitter.jpg";
import tiktok from "./images/tiktok.jpg";
import telegram from "./images/telegram.jpg";
import youtube from "./images/youtube.jpg";
// import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <FooterContainer className="container mx-auto px-4 pt-20">
      <ScrollAnimation animateIn="fadeIn">
        <Descriptrion className=" flex flex-col justify-center">
          <h1 className="email">admin@hshblock.com</h1>
          <h1 className="email">marketing@hshblock.com</h1>
          <h1>Visit Us!</h1>
          <h2>&copy;2021 All rights reserved</h2>
          <div className="icons flex">
            <a href="https://www.facebook.com/hshblock/">
              <img src={facebook} alt="Facebook" />
            </a>

            <a href="https://www.twitter.com/hshblock05/">
              <img src={twitter} alt="Twitter" />
            </a>

            <a href="https://www.tiktok.com/@hshblock?">
              <img src={tiktok} alt="Tiktok" />
            </a>

            <a href="https://t.me/hshblockofficial/">
              <img src={telegram} alt="Telegram" />
            </a>

            <a href="https://www.youtube.com/channel/UCBgsn4Y12N6Pf6o93ggIxZw/">
              <img src={youtube} alt="Youtube" />
            </a>
          </div>
        </Descriptrion>
      </ScrollAnimation>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  margin-top: 1rem;
  margin-bottom: 2rem;
  background: #fbf6f6;

  h1 {
    font-size: 6rem;
    color: #f8a70a;
    font-weight: bold;
  }

  @media (max-width: 638.98px) {
    h1 {
      font-size: 4.5rem;
    }
  }
`;

const Descriptrion = styled.div`
  align-items: center;
  h2 {
    color: #f8a70a;
    font-weight: bold;
    font-size: 1.3rem;
  }
  .icons {
    width: auto;
    img {
      height: 3rem;
      width: auto;
      padding: 0 8px;
      background: none;
    }
  }
  .email {
    font-size: 2.3rem;
    font-size: bold;
    @media (max-width: 638.98px) {
      font-size: 1rem;
    }
  }
`;
