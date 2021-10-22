import "tailwindcss/tailwind.css";
import { Route, Switch } from "react-router";
import Navbar from "./components/view/Navbar";
import Home from "./pages/Home";
// import Roadmap from "./pages/Roadmap";
// import Tokenomics from "./pages/Tokenomics";
import Privacy from "./pages/Privacy";
import Disclaimer from "./pages/Disclaimer";
import Whitepaper from "./pages/Whitepaper";
import Whitelist from "./pages/Whitelist";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/view/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/roadmap" component={Roadmap} />
        <Route path="/tokenomics" component={Tokenomics} /> */}
        <Route path="/privacy" component={Privacy} />
        <Route path="/disclaimer" component={Disclaimer} />
        <Route path="/whitepaper" component={Whitepaper} />
        <Route path="/whitelist" component={Whitelist} />
        <Route path="/contact-us" component={ContactUs} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
