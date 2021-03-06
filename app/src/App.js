import logo from './logo.svg';
import './App.css';
import {Redirect, Switch, Route} from 'react-router-dom';
import styled from 'styled-components'
import Landing from "./landing/Landing";
import Rank from "./onboarding/Rank"
import OnboardingBoilerplate from "./onboarding/OnboardingBoilerplate";
import Roles from "./onboarding/Roles";
function App() {
  return (
        <Container>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={Landing} />
                <Route
                    exact
                    path="/onboarding/1"
                    component={Rank}/>
                    <Route
                        exact
                        path="/boilerplate"
                        component={OnboardingBoilerplate}/>
                <Route
                    exact
                    path="/onboarding/2"
                    component={Roles}/>
            </Switch>



        </Container>

  );
}

const Container = styled.div`
    background: #FFFCF7 


`



export default App;
