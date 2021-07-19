import React from 'react';

import styled from 'styled-components'
import {Jumbotron} from "react-bootstrap";

const Styles = styled.div`

  #nav-cell {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    button {
      width: 400px;
      height: 60px;
      background-color: darkcyan;
      border: none;
      margin-top: 20px;
      color: white;
    }
    
    button:hover {
      opacity: 0.7;
    }
  }
`;

function HomePage() {
    // hrefs
    const STATISTICS_URL = "/statistics";
    const VACCINES_INFO_URL = "/vaccines-description";
    const VACCINE_POINTS_URL = "/vaccine-points";

    return (
        <Styles>
            <Jumbotron/>
            <div id="nav-cell">
                <a href={STATISTICS_URL}><button><h3>Statystyki</h3></button></a>
                <a href={VACCINES_INFO_URL}><button><h3>Informacje</h3></button></a>
                <a href={VACCINE_POINTS_URL}><button><h3>Punkty szczepień</h3></button></a>
            </div>
        </Styles>
    );
}

export default HomePage;
