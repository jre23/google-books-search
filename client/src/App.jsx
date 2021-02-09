import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavLinks from "./components/NavLinks";
import Search from "./components/pages/Search";
import Saved from "./components/pages/Saved";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router >
      <div>
        <NavLinks />
        <Switch>
          <Route exact path="/"> <Search /> </Route>
          <Route exact path="/search"> <Search /> </Route>
          <Route exact path="/saved" > <Saved /> </Route>
          <Route> <Search /> </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
