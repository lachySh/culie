import logo from './logo.svg';
import './App.css';
import {Redirect, Switch, Route} from 'react-router-dom';
import Landing from "./landing/Landing";
import LoginPage from "./login/Login"
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


          </Switch>

  );
}

export default App;
