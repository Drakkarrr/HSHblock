import tournadetails from "../images/tournadetails.jpg";
import ScrollAnimation from "react-animate-on-scroll";

const About = () => {
  return (
    <div className="container mx-auto px-4 pt-20">
      <ScrollAnimation animateIn="fadeIn">
        <img src={tournadetails} alt="About hshblock" />
      </ScrollAnimation>
    </div>
  );
};

export default About;
