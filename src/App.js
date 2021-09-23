import GlobalStyle from "./styles";
import Home from "./components/Home";
import Whitelist from "./components/Whitelist";
import { Route, Switch } from "react-router";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/whitelist" component={Whitelist} />
      </Switch>
    </div>
  );
}

export default App;
