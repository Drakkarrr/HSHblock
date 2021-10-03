import ScrollAnimation from "react-animate-on-scroll";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useState, useRef } from "react";

const Address = () => {
  const [copySuccess, setCopySuccess] = useState("Copy");
  const textAreaRef = useRef(null);
  const copyToClipboard = (e) => {
    textAreaRef.current.select();
    document.execCommand("Copy");

    e.target.focus();
    setCopySuccess("Copied!");
  };

  return (
    <Addresss className="container mx-auto px-4 pt-10">
      <center>
        <ScrollAnimation animateIn="fadeIn">
          <TextHead>Official Contract Address:</TextHead>
          <AddContainer className="flex justify-center">
            <textarea
              style={{ fontSize: "1.2rem" }}
              ref={textAreaRef}
              value="0xbd5266d1de3b318281136992675b1f0b2a6233a5"
            />
            {document.queryCommandSupported("Copy") && (
              <div>
                <button className="hvr-grow" onClick={copyToClipboard}>
                  {copySuccess}
                </button>
              </div>
            )}
          </AddContainer>
          <div className="buttons">
            <button className="buy-now hvr-grow text-2xl mt-3">
              <NavLink
                target="_blank"
                to={{
                  pathname:
                    "https://bscscan.com/tx/0xbbb6771d77644d23558c3efa21cd5e076eb98cb636b68623853a7eddcdbf2bf3",
                }}
              >
                BSCSCAN
              </NavLink>
            </button>
            <button className="pancake buy-now hvr-grow text-2xl mt-3">
              <NavLink
                target="_blank"
                to={{
                  pathname: "https://pancakeswap.finance/swap#/swap",
                }}
              >
                PANCAKESWAP
              </NavLink>
            </button>
          </div>
        </ScrollAnimation>
      </center>
    </Addresss>
  );
};

export default Address;

const Addresss = styled.div`
  button.buy-now {
    background: #fbf6f6;
    border-radius: 30px;
    padding: 1rem;
    margin-top: 3rem;
    width: 10rem;
  }

  .buttons {
    button {
      margin: 10px;
    }
    .pancake {
      width: auto;
    }
  }
  //!  Media Query
  color: #f8a70a;
  @media (max-width: 638.98px) {
    width: 100vw;
    h1 {
      font-size: 13px;
    }
  }

  @media (min-width: 640px) {
    button {
      padding: 10px;
      border-radius: 25px;
      margin: 0;
      margin-top: 1rem;
    }
    h1 {
      font-size: 1.9rem;
    }
  }
`;

const AddContainer = styled.div`
  button {
    margin: 0;
    width: 8rem;
    font-size: 1.3rem;
    background: #fbf6f6;
  }

  textarea {
    height: 2.5rem;
    overflow: hidden;
    font-size: 2rem;
    width: 55rem;
  }

  //!  Media Query
  @media (max-width: 638.98px) {
    height: auto;
    display: block;
    textarea {
      overflow: hidden;
      font-size: 20px;
      width: 100%;
      text-align: center;
      padding: 0 3rem;
      height: 6rem;
    }
    button {
      width: 8rem;
    }
  }

  @media (min-width: 640px) {
    textarea {
      font-size: 20px;
      text-align: center;
    }
    button {
      font-size: 13px;
    }
  }
`;

const TextHead = styled.h1`
  width: 30%;
  margin-right: 15rem;

  @media (max-width: 638.98px) {
    width: 50%;
    font-size: 8rem;
    margin-right: 5rem;
  }

  @media (min-width: 640px) {
    width: 50%;
    font-size: 8rem;
    margin-right: 15rem;
  }
`;
