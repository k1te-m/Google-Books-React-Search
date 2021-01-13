import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header.js";
import Nav from "./components/Nav.js";
import Saved from "./layout/Saved";
import Search from "./layout/Search";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Search />
          </Route>
          <Route exact path="/saved">
            <Saved />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
