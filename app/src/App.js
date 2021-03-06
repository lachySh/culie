import logo from './logo.svg';
import './App.css';
import {Redirect, Switch, Route} from 'react-router-dom';
import Landing from "./landing/Landing";
import Onboarding from "./onboarding/Onboarding"
function App() {
  return (
          <Switch>
            <Route
                exact
                path="/"
                component={Landing} />
                <Route
                    exact
                    path="/onboarding"
                    component={Onboarding}/>

          </Switch>

  );
}

export default App;
