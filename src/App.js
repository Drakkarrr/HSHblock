import GlobalStyle from "./styles";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import AboutUss from "./components/AboutUss";
import Aim from "./components/M&V";
import AboutUsss from "./components/AboutUsss";
import StatsTable from "./components/StatsTable";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
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
      <Footer />
    </div>
  );
}

export default App;
