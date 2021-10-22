import styled from "styled-components";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service",
        "template",
        e.target,
        "user_9gN6iA4H8s4O2TxiPGiDs"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container className="container mx-auto  pt-14">
      <h1>Talk to us!</h1>
      <Form onSubmit={sendEmail}>
        <label className="name">Fullname</label>
        <input
          className="name"
          type="text"
          name="user-name"
          placeholder="Name"
        />
        <label className="email">Email</label>
        <input
          className="email"
          type="email"
          name="user-email"
          placeholder="Email"
        />
        <label className="message">Message</label>
        <textarea
          className="message"
          name="message"
          placeholder="Enter a message"
        ></textarea>
        <input className="button" type="submit" value="send" />
      </Form>
    </Container>
  );
};

export default ContactUs;

const Container = styled.div`
  background: #fbf6f6;
  height: 120vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 80px 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  place-items: center;

  @media (max-width: 638.98px) {
    display: block;
  }
  h1 {
    font-size: 6rem;
    margin-top: 2rem;
    color: #f8a70a;
    font-weight: bold;
    @media (max-width: 638.98px) {
      font-size: 3rem;
      margin-top: 0;
      text-align: center;
    }
    @media (min-width: 1024px) {
      margin-top: 3rem;
    }
  }
`;

const Form = styled.form`
  height: auto;
  display: flex;
  flex-direction: column;
  width: 80vw;
  height: 90%;
  padding: 1.7rem 3rem;
  border: 1px solid black;
  label.name,
  label.email,
  label.message {
    font-size: 1.5rem;
    color: #f8a70a;
    font-weight: bold;
    padding: 8px 0;
  }
  input {
    border-style: unset;
    border-radius: 8px;
    padding: 3px 5px;
    border: 1px solid black;
    &:focus,
    &:active {
      border-style: none;
      transition: 5s ease-in;
    }
  }

  input.name,
  input.email {
    font-size: 1rem;
    color: #f8a70a;
  }
  textarea.message {
    font-size: 1rem;
    color: #f8a70a;
    padding: 8px 10px;
    height: 20rem;
    border: 1px solid black;
    border-radius: 8px;
    &:focus,
    &:active {
      border-style: none;
      transition: 5s ease-in;
    }
  }
  input.button {
    border-radius: 3.5rem;
    color: #f8a70a;
    font-size: 1rem;
    width: 7rem;
    margin-top: 15px;
    cursor: pointer;
    font-weight: bold;
  }

  @media (max-width: 638.98px) {
    width: 100vw;
    padding: 0 2rem;
    border: hidden;
  }
`;
