import dailystats from "../images/dailystats.jpg";
import ScrollAnimation from "react-animate-on-scroll";

const About = () => {
  return (
    <div className="container mx-auto px-4 pt-20">
      <ScrollAnimation animateIn="fadeIn">
        <img src={dailystats} alt="About hshblock" />
      </ScrollAnimation>
    </div>
  );
};

export default About;
