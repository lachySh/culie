import logo from './logo.svg';
import './App.css';
import {Redirect, Switch, Route} from 'react-router-dom';
import Landing from "./landing/Landing";
import Rolematching from "./role-match/role-match.js";

function App() {
  return (
          <Switch>
            <Route
                exact
                path="/"
                component={Landing} />
            <Route
                exact
                path="/role-match"
                component={Rolematching} />

          </Switch>

  );
}

export default App;
