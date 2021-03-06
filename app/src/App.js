import logo from './logo.svg';
import './App.css';
import {Redirect, Switch, Route} from 'react-router-dom';
import Landing from "./landing/Landing";
import LoginPage from "./login/Login"
import RegistrationPage from "./registration/Registration"
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
                path="/register"
                component={RegistrationPage} />


          </Switch>

  );
}

export default App;
