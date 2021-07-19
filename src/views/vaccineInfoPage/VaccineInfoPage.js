import React, {useState} from 'react';

import styled from 'styled-components';

import {Button, Tab, Tabs} from 'react-bootstrap';

import ModernaVaccineInfo from "./components/ModernaVaccineInfo";
import ComirnatyVaccineInfo from "./components/ComirnatyVaccineInfo";
import AstraZenecaVaccineInfo from "./components/AstraZenecaVaccineInfo";
import JanssenVaccineInfo from "./components/JanssenVaccineInfo";

const Styles = styled.div`

  header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 110px;
    color: lightseagreen;
    
    h1 {
      position: relative;
    }
    
    a {
      color: white;
      text-decoration: none;
      position: absolute;
      right: 5vw;
      
      .btn {
        background-color: darkcyan;
        border: none;
      }
    }
    
    a:hover {
      opacity: 0.7;
    }
  }
  
  .nav-tabs {
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid lightseagreen;
    
    a {
      font-size: large;
      color: black;
      font-weight: bold;
    }
    
    .nav-link.active {
      color: red;
      border-color: lightseagreen lightseagreen white; 
    }
  }
  
  tr {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
  }
  td {
    margin: 20px 80px 0 80px;
    white-space: pre-wrap;
  }
  
  
  @media (max-width: 420px) {
    header {
      flex-direction: column;
      a {
        position: unset;
      }
    }
  }
`;

function VaccineInfoPage() {
    const [key, setKey] = useState("moderna");

    return (
        <Styles>
            <header>
                <h1>Informacje na temat szczepionek</h1>
                <a href="/"><Button>Cofnij</Button></a>
            </header>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
            >
                <Tab eventKey="moderna" title="Moderna">
                    <ModernaVaccineInfo/>
                </Tab>
                <Tab eventKey="comirnaty" title="Comirnaty">
                    <ComirnatyVaccineInfo/>
                </Tab>
                <Tab eventKey="astraZeneca" title="AzstraZeneca">
                    <AstraZenecaVaccineInfo/>
                </Tab>
                <Tab eventKey="janssen" title="Janssen">
                    <JanssenVaccineInfo/>
                </Tab>
            </Tabs>
        </Styles>
    );
}

export default VaccineInfoPage;
