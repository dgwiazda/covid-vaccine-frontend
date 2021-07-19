import React from 'react'

import {Router, Switch, Route} from 'react-router-dom';

import VaccineInfoPage from "./views/vaccineInfoPage/VaccineInfoPage";
import Footer from "./views/homePage/components/Footer";
import {history} from "./helpers/history"

import styled from 'styled-components'
import HomePage from "./views/homePage/HomePage";
import StatisticsPage from "./views/statisticsPage/StatisticsPage";
import VaccinePointsPage from "./views/vaccinePointsPage/VaccinePointsPage";

const Styles = styled.div`

  #wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  #page-footer {
    margin-top: auto;
  }
`;

function App() {
    return (
        <Styles>
            <Router history={history}>
                <div id="wrapper">
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/vaccines-description" component={VaccineInfoPage}/>
                        <Route path="/statistics" component={StatisticsPage}/>
                        <Route path="/vaccine-points" component={VaccinePointsPage}/>
                    </Switch>
                    <div id="page-footer">
                        <Footer/>
                    </div>
                </div>
            </Router>
        </Styles>
    )
        ;
}

export default App;
