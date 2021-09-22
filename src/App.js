import GlobalStyle from "./styles";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import AboutUss from "./components/AboutUss";
import Aim from "./components/M&V";
import AboutUsss from "./components/AboutUsss";
import StatsTable from "./components/StatsTable";
import Pricing from "./components/Pricing";
import TournaWeek from "./components/TournaWeek";
import TournaYear from "./components/TournaYear";
import Disclaimer from "./components/Disclaimer";
import Privacy from "./components/PrivacyPolicy";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Home />
      <AboutUs />
      <AboutUss />
      <Aim />
      <AboutUsss />
      <StatsTable />
      <Pricing />
      <TournaWeek />
      <TournaYear />
      <Disclaimer />
      <Privacy />
    </div>
  );
}

export default App;
