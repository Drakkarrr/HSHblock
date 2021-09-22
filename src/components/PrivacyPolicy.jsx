// import styled from "styled-components";
import BoxLogo from "./assets/boxlogo.png";
import {
  StyledFooter,
  StyledDescription,
  StyledLetterContainer,
} from "./Disclaimer";

const Disclaimer = () => {
  return (
    <StyledFooter>
      <StyledLetterContainer>
        <StyledDescription>
          <img src={BoxLogo} alt="Block logo of Hashblock" />
          <h2>PRIVACY POLICY</h2>
        </StyledDescription>
        <p style={{ lineHeight: "15px" }}>
          <span style={{ fontSize: "1.3rem" }}>Section A – Introduction</span>
          <br />
          <br /> 1. Introduction <br /> 1.1 Protecting your privacy and keeping
          your personal information confidential is very important to us. This
          Privacy Policy (“Policy”) sets out how we collect and manage your
          personal and sensitive information, in compliance with applicable
          privacy laws. <br /> 1.2 In this Policy, we use the terms “we” “us”
          “our” or “HSHBLOCK” to refers to HSHBLOCK Inc.
          <br /> 1.3 Wallet address information is an information about you that
          is capable (or reasonably capable) of identifying you, whether the
          information or opinion is true or not, and regardless of whether the
          information is recorded in a material form.
          <br />
          <br />
          <br />
          <span style={{ fontSize: "1.3rem" }}>
            Section B – Collection of personal information
          </span>
          <br />
          <br /> 2. Why we collect your wallet address and email information{" "}
          <br /> 2.1 We only collect wallet address information and email when
          it’s reasonably necessary for us to do business with you. <br /> 2.2
          We use your wallet address and email information to: <br /> (a) verify
          your identity; <br /> (b) respond to any feedback, queries or
          complaints; <br /> (c) provide you with technical support; <br /> (d)
          take measures to detect and prevent fraud, crime or other activity
          which may cause harm to our business or our products and services.{" "}
          <br /> 3. Information we may collect 3.1 The personal information we
          collect about you generally includes the following: <br /> (a) email
          address
          <br /> (b) wallet address
          <br /> 4. How we collect wallet address and email information
          <br />
          4.1 We may collect information from you electronically, for instance,
          when you visit our website.
          <br /> 5. Incomplete or inaccurate information
          <br />
          5.1 If you provide us with incomplete or inaccurate information, we
          may not be able to provide you with the products or services that you
          ask for.
          <br /> 6. Consent
          <br /> 6.1 In most cases, we’ll obtain your consent to use and
          disclose wallet address and email information for our intended
          purposes either before or at the time that we collect it.
          <br /> 6.2 If you don’t give us your consent or withdraw your consent,
          we may not be able to provide you with the products or services you
          ask for.
          <br /> 7. Withdrawing consent
          <br /> 7.1 You can withdraw your consent at any time. To withdraw your
          consent, please email support@HSHBLOCK.com in the first instance.
          <br /> 8. Anonymity and pseudonymity
          <br /> 8.1 In certain situations we may be able to give you the option
          of using a pseudonym or remain anonymous when you deal with us. We’re
          only able to provide you with this option when it’s practical for us
          to do so, and if we’re not required by law to identify you.
          <br /> 9. Dealing with unsolicited personal information
          <br /> 9.1 If we receive personal information about you that we
          haven’t ask for, we’ll only retain it if we determine that:
          <br /> (a) the information received is reasonably necessary for us to
          do business with you; and
          <br /> (b) you’ve either consented to the information being collected,
          or it wasn’t practical or reasonable for us to obtain your consent in
          the circumstances.
          <br /> 9.2 If these conditions aren’t met, we will destroy or
          de-identify the information.
          <br /> 9.3 If the unsolicited information we receive about you is
          sensitive information, we’ll get your consent to retain it, regardless
          of what the circumstances are. www.HSHBLOCK.com <br />
          10. Security of wallet address and email information
          <br />
          10.1 We’re committed to protecting the wallet address and email
          information we hold about you from misuse,
          <br /> 10.2 We’ve implemented a range of practices and policies to
          provide a robust security environment. We ensure the on-going adequacy
          of these measures by regularly reviewing them.
          <br /> 10.3 Our security measures include:
          <br /> (a) educating our employees about their obligations when they
          collect and handle personal information;
          <br /> (b) requiring our employees to use passwords when accessing our
          systems;
          <br /> (c) encrypting data sent from your computer to our systems
          during internet transactions and client access codes transmitted
          across networks;
          <br /> (d) employing firewalls, intrusion detection systems and virus
          scanning tools to protect against unauthorized persons and viruses
          from entering our systems;
          <br /> (e) using dedicated secure networks or encryption when we
          transmit electronic data for purposes of outsourcing;
          <br /> (f) practicing a clean desk policy for all premises and
          providing secure storage for physical records.
          <br /> 10.4 Where we identify that we no longer need certain personal
          information, we ensure that it’s effectively and securely destroyed.
          For example, we may shred paper records or use other means such as
          degaussing and deletion in the case of electronic equipment and
          records.
        </p>
      </StyledLetterContainer>
    </StyledFooter>
  );
};

export default Disclaimer;
