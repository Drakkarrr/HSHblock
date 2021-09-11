import GlobalStyle from "./styles";
import Header from "./components/Header";
import Home from "./components/Home";
import JoinUs from "./components/JoinUs";
import Works from "./components/Works";
// import Blogs from "./components/Blogs";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Home />
      <JoinUs />
      <Works />
      {/* <Blogs /> */}
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
