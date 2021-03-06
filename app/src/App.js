import logo from './logo.svg';
import './App.css';
import {Redirect, Switch, Route} from 'react-router-dom';
import styled from 'styled-components'
import Landing from "./landing/Landing";
import Onboarding from "./onboarding/Onboarding"
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
                    path="/onboarding"
                    component={Onboarding}/>

            </Switch>



        </Container>

  );
}

const Container = styled.div`
    background: #FFFCF7 


`



export default App;
