import homepage from "../images/homepage.jpg";
import ScrollAnimation from "react-animate-on-scroll";

const About = () => {
  return (
    <div className="container mx-auto px-4">
      <ScrollAnimation animateIn="fadeIn">
        <img src={homepage} alt="About hshblock" />
      </ScrollAnimation>
    </div>
  );
};

export default About;
