import logo from './logo.svg';
import './App.css';
import {Redirect, Switch, Route} from 'react-router-dom';
import Landing from "./landing/Landing";
import LoginPage from "./login/Login"
import Landing2 from "./landing2/Landing2"

import RegistrationPage from "./registration/Registration"
import Rank from "./onboarding/Rank";
import Roleselection from "./onboarding/Roleselection";
import Preferences from "./onboarding/Preferences";
import Roles from "./onboarding/Roles";
import Dashboard from "./dashboard/Dashboard";
import Rolematching from "./role-match/role-match.js";
import Compatability from "./dashboard/Compatability";
import Backup from "./dashboard/Backup";

function App() {
  return (
          <Switch>
            <Route
                exact
                path="/"
                component={Landing} />
            <Route
                exact
                path="/introduction"
                component={Landing2} />

              <Route
                exact
                path="/login"
                component={LoginPage} />

              <Route
                exact
                path="/register"
                component={RegistrationPage} />

              <Route
                exact
                path="/onboarding/1"
                component={Rank} />
              <Route
                  exact
                  path="/onboarding/2"
                  component={Roles} />
              <Route
                  exact
                  path="/onboarding/3"
                  component={Preferences} />

                <Route
                    exact
                    path="/dashboard"
                    component={Dashboard}/>
        <Route
                path="/role-match"
                component={Rolematching} />
              <Route
                  path="/match"
                  component={Compatability}/>
              <Route
                  path="/match-backup"
                  component={Backup}/>
          </Switch>


  );
}

export default App;
