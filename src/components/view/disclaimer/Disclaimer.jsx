import styled from "styled-components";
import boxlogo from "../images/boxlogo.png";

const Privacy = () => {
  return (
    <Container className="container mx-auto  pt-14">
      <div className=" w-full">
        <center>
          <img className="h-28" src={boxlogo} alt="box logo" />
          <h1 className="text-6xl">DISCLAIMER</h1>
        </center>
      </div>
      <p>
        All the information on this website is published in good faith and for
        general information purposes only. We do not make any warranties about
        the completeness, reliability and accuracy of this information. Any
        action you take upon the information on our website is strictly at your
        own risk. We are not liable for any losses and damages in connection
        with the use of our website.
        <br />
        <br />
        From our website, you can visit other websites by following hyperlinks
        to these sites. While we strive to provide only links to useful and
        ethical websites, we have no control over the content and nature of
        these sites and the links to other websites do not imply a
        recommendation for all the content found on these sites.
        <br />
        <br />
        Please also be aware that when you leave our website, other sites may
        have different privacy policies and terms which are beyond our control.
        <br />
        <br />
        As between us, you shall be solely responsible to pay any and all sales,
        use, value-added and other taxes, duties, and assessments (except taxes
        on our net income) now or hereafter claimed or imposed by any
        governmental authority (“Taxes”) associated with your use of the Site
        (including, without limitation, any Taxes that may become payable as a
        result of your ownership, transfer, or growing of any Product that is in
        your ownership).
        <br />
        <br />
        You understand and agree that your access to and use of the Site, the
        Game, and the Contracts are at your own risk, and that the Site, the
        Game, and the Contracts are provided "as is" and "as available" without
        warranties of any kind, whether express or implied.
        <br />
        <br />
        You fully agree that we can publish your wallet address in our social
        media accounts but are limited to: a) whitelisting; b) tournaments
        winners’ rewards distributions; c) other rewards from HSHBLOCK.
        <br />
        <br />
        You fully acknowledge and accept the security risks of providing
        information and dealing online over the internet and agree that we have
        no liability or responsibility for any breach of security by any party.
        <br />
        <br />
        We shall not be responsible or liable to you for any losses you incur as
        the result of your use of the Ethereum network, and the Metamask
        electronic wallet including but not limited to any losses, damages or
        claims arising from: a) hack wallet ; b)stolen seed phrase ; c) user
        error, d) forgotten passwords on your wallet; e) server failure or data
        loss; f) corrupted wallet; g) unauthorized access or activities by third
        parties, including but not limited to the use of viruses, phishing, or
        other means of attack in Metamask.
        <br />
        <br />
        Cryptocurrencies are high risk and intangible digital assets that exist
        only by virtue of the ownership record maintained on the Binance
        network. All Contracts are conducted and occur on the decentralized
        ledger within the Binance network. We have no control over and make no
        guarantees or promises with respect to Contracts. We are not responsible
        for losses due to blockchains or any other features of the Ethereum
        network.
      </p>
    </Container>
  );
};

export default Privacy;

const Container = styled.div`
  h1 {
    font-weight: bold;
    color: #f8a70a;
  }
  p {
    font-weight: bold;
    font-size: 1.5rem;
    color: #f8a70a;
  }

  //!  Media Query
  @media (max-width: 638.98px) {
    p {
      padding: 0 1rem;
    }
  }

  @media (min-width: 640px) {
    p {
      padding: 0 1rem;
    }
  }
`;
