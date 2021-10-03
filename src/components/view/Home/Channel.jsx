import ytchannel from "../images/ytchannel.jpg";
import ScrollAnimation from "react-animate-on-scroll";

const About = () => {
  return (
    <div className="container mx-auto px-4 pt-20">
      <ScrollAnimation animateIn="fadeIn">
        <img src={ytchannel} alt="yt channel hshblock" />
      </ScrollAnimation>
    </div>
  );
};

export default About;
