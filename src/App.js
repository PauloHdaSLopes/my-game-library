// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import RecentlyPlayed from "./pages/RecentlyPlayed";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import Page404 from "./pages/Page404";

import { GlobalStyle } from "./Components/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <RecentlyPlayed />
          </Route>
          <Route path="/analytics">
            <Analytics />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route>
            <Page404 />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
