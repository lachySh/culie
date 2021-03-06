import logo from './logo.svg';
import './App.css';
import {Redirect, Switch, Route} from 'react-router-dom';
import Landing from "./landing/Landing";
import LoginPage from "./login/Login"
import Landing2 from "./landing2/Landing2"

function App() {
  return (
          <Switch>
            <Route
                exact
                path="/"
                component={Landing} />
              
              <Route
                exact
                path="/login"
                component={LoginPage} />

              <Route
                exact
                path="/landing2"
                component={Landing2} />
          </Switch>

  );
}

export default App;
