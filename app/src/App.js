import logo from './logo.svg';
import './App.css';
import {Redirect, Switch, Route} from 'react-router-dom';
import Landing from "./landing/Landing";
function App() {
  return (
          <Switch>
            <Route
                exact
                path="/"
                component={Landing} />


          </Switch>

  );
}

export default App;
