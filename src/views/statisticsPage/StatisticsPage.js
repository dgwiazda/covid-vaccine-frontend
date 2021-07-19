import React, {useEffect, useState} from 'react';

import {Line, PolarArea} from "react-chartjs-2";

import {Button} from "react-bootstrap";

import styled from 'styled-components';

import StatisticsService from "./services/StatisticsService";
import SelectProvince from "./components/SelectProvince";
import NopTable from "./components/NopTable";

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
  
  main {
    display: flex;
    margin-bottom: 50px;
  }
  
  #nop-statistics {
    margin: 50px 5vw 0 5vw;
    display: flex;
    flex-direction: column;
    width: 100%;
    
    p {
      display: block;
      width: 100%;
      text-align: center;
    }
    
    #nop-tables {
      display: flex;
      
      #nop-woman-table {
        margin-right: 5vw;
        width: 42vw;
        h2 {
          text-align: center;
        }
      }
      
      #nop-man-table {
        width: 42vw;
        h2 {
          text-align: center;
        }
      }
    }
  }
  
  #nop-chart-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
      color: darkcyan;
    }
    #polar-chart-div {
      width: 50vw;
    }
  }
  
  #vaccines-infections-charts {
    margin: 50px 5vw 0 5vw;
    text-align: center;
    
    #bar-title-items {
      display: flex;
      flex-direction: column;
      align-items: center;
      
      #selector-button {
        display: flex;
        align-items: center;
        
        button {
          margin-left: 50px;
        }
      }
    }
  }
  
  #prediction-div{
    margin: 50px 5vw 0 5vw;
    text-align: center;
    #prediction-label {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  
  #summarize{
    margin: 50px 200px;
  }
  
  .bold-li {
    font-weight: 700;
    color: darkcyan;
  }
  
  p#source-info {
    margin: 20px 0 0 30px;
  }
  
  h1, h2, b {
    color: darkcyan;
  }
`;

function StatisticsPage() {
    const [vaccinesData, setVaccinesData] = useState([]);
    const [vaccinesLabels, setVaccinesLabels] = useState([]);
    const [showDeaths, setShowDeaths] = useState(false);
    const [infectionsDeathsData, setInfectionsDeathsData] = useState([]);
    const [infectionsDeathsLabels, setInfectionsDeathsLabels] = useState([]);
    const [predictedInfectionsData, setPredictedInfectionsData] = useState([]);
    const [predictedInfectionsLabels, setPredictedInfectionsLabels] = useState([]);
    const [vaccinesProvince, setVaccinesProvince] = useState("Cały kraj");
    const [infectionsProvince, setInfectionsProvince] = useState("Cały kraj");
    const [vaccinesCount, setVaccinesCount] = useState(0);
    const [nopRowCount, setNopRowCount] = useState(0);
    const [nopManRowCount, setManNopRowCount] = useState(0);
    const [nopWomanRowCount, setWomanNopRowCount] = useState(0);
    const [nopManZaczerwienienie, setNopManZaczerwienienie] = useState(0);
    const [nopWomanZaczerwienienie, setNopWomanZaczerwienienie] = useState(0);
    const [nopManOmdlenie, setNopManOmdlenie] = useState(0);
    const [nopWomanOmdlenie, setNopWomanOmdlenie] = useState(0);
    const [nopManUtrata, setNopManUtrata] = useState(0);
    const [nopWomanUtrata, setNopWomanUtrata] = useState(0);
    const [nopManBol, setNopManBol] = useState(0);
    const [nopWomanBol, setNopWomanBol] = useState(0);
    const [nopManDusznosci, setNopManDusznosci] = useState(0);
    const [nopWomanDusznosci, setNopWomanDusznosci] = useState(0);
    const [nopManTachykardia, setNopManTachykardia] = useState(0);
    const [nopWomanTachykardia, setNopWomanTachykardia] = useState(0);
    const [nopManOslabienie, setNopManOslabienie] = useState(0);
    const [nopWomanOslabienie, setNopWomanOslabienie] = useState(0);
    const [nopManNudnosci, setNopManNudnosci] = useState(0);
    const [nopWomanNudnosci, setNopWomanNudnosci] = useState(0);
    const [nopManDretwienie, setNopManDretwienie] = useState(0);
    const [nopWomanDretwienie, setNopWomanDretwienie] = useState(0);
    const [nopManOdczyn, setNopManOdczyn] = useState(0);
    const [nopWomanOdczyn, setNopWomanOdczyn] = useState(0);
    const [nopManBolesnosc, setNopManBolesnosc] = useState(0);
    const [nopWomanBolesnosc, setNopWomanBolesnosc] = useState(0);
    const [nopManDreszcze, setNopManDreszcze] = useState(0);
    const [nopWomanDreszcze, setNopWomanDreszcze] = useState(0);
    const [nopManKaszel, setNopManKaszel] = useState(0);
    const [nopWomanKaszel, setNopWomanKaszel] = useState(0);
    const [nopManWymioty, setNopManWymioty] = useState(0);
    const [nopWomanWymioty, setNopWomanWymioty] = useState(0);
    const [nopManZle, setNopManZle] = useState(0);
    const [nopWomanZle, setNopWomanZle] = useState(0);
    const [nopManGoraczka, setNopManGoraczka] = useState(0);
    const [nopWomanGoraczka, setNopWomanGoraczka] = useState(0);
    const [nopManWysypka, setNopManWysypka] = useState(0);
    const [nopWomanWysypka, setNopWomanWysypka] = useState(0);
    const [nopManReakcja, setNopManReakcja] = useState(0);
    const [nopWomanReakcja, setNopWomanReakcja] = useState(0);
    const [nopManZgon, setNopManZgon] = useState(0);
    const [nopWomanZgon, setNopWomanZgon] = useState(0);
    const [updateDateTime, setUpdateDateTime] = useState("");
    const [predictedInfectionsProvince, setPredictedInfectionsProvince] = useState("Cały kraj");
    const dataPolar = {
        labels: ['Omdlenie', 'Utrata Przytomności', 'Ból głowy', "Duszności", "Tachykardia", "Osłabienie", "Drętwienie",
            "Odczyn w miejscu wstrzyknięcia", "Bolesność i powiększenie regionalnych węzłów chłonnych", "Dreszcze", "Kaszel",
            "Wymioty", "Złe samopoczucie", "Gorączka", "Wysypka", "Reakcja alergiczna", "Zgon", "Nudności",
        ],
        datasets: [
            {
                label: '# przypadków',
                data: [
                    Number(nopManOmdlenie) + Number(nopWomanOmdlenie),
                    Number(nopManUtrata) + Number(nopWomanUtrata),
                    Number(nopManBol) + Number(nopWomanBol),
                    Number(nopManDusznosci) + Number(nopWomanDusznosci),
                    Number(nopManTachykardia) + Number(nopWomanTachykardia),
                    Number(nopManOslabienie) + Number(nopWomanOslabienie),
                    Number(nopManDretwienie) + Number(nopWomanDretwienie),
                    Number(nopManOdczyn) + Number(nopWomanOdczyn),
                    Number(nopManBolesnosc) + Number(nopWomanBolesnosc),
                    Number(nopManDreszcze) + Number(nopWomanDreszcze),
                    Number(nopManKaszel) + Number(nopWomanKaszel),
                    Number(nopManWymioty) + Number(nopWomanWymioty),
                    Number(nopManZle) + Number(nopWomanZle),
                    Number(nopManGoraczka) + Number(nopWomanGoraczka),
                    Number(nopManWysypka) + Number(nopWomanWysypka),
                    Number(nopManReakcja) + Number(nopWomanReakcja),
                    Number(nopManZgon) + Number(nopWomanZgon),
                    Number(nopManNudnosci) + Number(nopWomanNudnosci),
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(213, 0, 121, 0.5)',
                    'rgba(13, 43, 243, 0.5)',
                    'rgba(44, 3, 53, 0.5)',
                    'rgba(123, 243, 32, 0.5)',
                    'rgba(32, 232, 232, 0.5)',
                    'rgba(32, 131, 212, 0.5)',
                    'rgba(34, 241, 3, 0.5)',
                    'rgba(45, 3, 134, 0.5)',
                    'rgba(155, 32, 121, 0.5)',
                    'rgba(57, 50, 121, 0.5)',
                    'rgba(255, 100, 255, 0.5)',
                    'rgba(132, 32, 255, 0.5)',
                    'rgba(0, 32, 255, 0.5)',
                ],
                borderWidth: 1,
            },
        ],
    };

    // runs at start
    useEffect(() => {
        StatisticsService.getVaccinesCountByprovince(vaccinesProvince).then(response => {
            setVaccinesData(response.data.data);
            setVaccinesLabels(response.data.time);
        });
        StatisticsService.getInfectionsByProvince(infectionsProvince, false).then(response => {
            setInfectionsDeathsData(response.data.data);
            setInfectionsDeathsLabels(response.data.time);
        });
        StatisticsService.getVaccinesCount().then(response => {
            setVaccinesCount(response.data);
        });
        StatisticsService.getNopCount().then(response => {
            setNopRowCount(response.data);
        });
        StatisticsService.getNopCountBySex().then(response => {
            setManNopRowCount(response.data[0]);
            setWomanNopRowCount(response.data[1]);
        });
        StatisticsService.getChoosenNopCountBySex("Zaczerwienienie", "K").then(response => {
            setNopWomanZaczerwienienie(response.data);
        });
        StatisticsService.getChoosenNopCountBySex("Zaczerwienienie", "M").then(response => {
            setNopManZaczerwienienie(response.data);
        });
        StatisticsService.getChoosenNopCountBySex("omdlenie", "K").then(response => {
            setNopWomanOmdlenie(response.data);
        });
        StatisticsService.getChoosenNopCountBySex("omdlenie", "M").then(response => {
            setNopManOmdlenie(response.data);
        });
        StatisticsService.getChoosenNopCountBySex("utrata przytomności", "K").then(response => {
            setNopWomanUtrata(response.data);
        });
        StatisticsService.getChoosenNopCountBySex("utrata przytomności", "M").then(response => {
            setNopManUtrata(response.data);
        });
        StatisticsService.getChoosenNopCountBySex("ból głowy", "K").then(response => {
            setNopWomanBol(response.data);
        });
        StatisticsService.getChoosenNopCountBySex("ból głowy", "M").then(response => {
            setNopManBol(response.data);
        });
        StatisticsService.getChoosenNopCountBySex("duszności", "K").then(response => {
            setNopWomanDusznosci(response.data);
        });
        StatisticsService.getChoosenNopCountBySex("duszności", "M").then(response => {
            setNopManDusznosci(response.data);
        });
        StatisticsService.getChoosenNopCountBySex("tachykardia", "K").then(response => {
            setNopWomanTachykardia(response.data);
        });
        StatisticsService.getChoosenNopCountBySex("tachykardia", "M").then(response => {
            setNopManTachykardia(response.data);
        });
        StatisticsService.getChoosenNopCountBySex("osłabienie", "K").then(response => {
            setNopWomanOslabienie(response.data);
        });
        StatisticsService.getChoosenNopCountBySex("osłabienie", "M").then(response => {
            setNopManOslabienie(response.data);
        });
        StatisticsService.getChoosenNopCountBySex("nudności", "K").then(response => {
            setNopWomanNudnosci(response.data);
        });
        StatisticsService.getChoosenNopCountBySex("nudności", "M").then(response => {
            setNopManNudnosci(response.data);
        });
        StatisticsService.getChoosenNopCountBySex("drętwienie", "K").then(response => {
            setNopWomanDretwienie(response.data);
        });
        StatisticsService.getChoosenNopCountBySex("drętwienie", "M").then(response => {
            setNopManDretwienie(response.data);
        });
        StatisticsService.getChoosenNopCountBySex("odczyn w miejscu wstrzyknięcia", "K").then(response => {
            setNopWomanOdczyn(response.data);
        });
        StatisticsService.getChoosenNopCountBySex("odczyn w miejscu wstrzyknięcia", "M").then(response => {
            setNopManOdczyn(response.data);
        });
        StatisticsService.getChoosenNopCountBySex("węzłów chłonnych", "K").then(response => {
            setNopWomanBolesnosc(response.data);
        });
        StatisticsService.getChoosenNopCountBySex("węzłów chłonnych", "M").then(response => {
            setNopManBolesnosc(response.data);
        });
        StatisticsService.getChoosenNopCountBySex("dreszcze", "K").then(response => {
            setNopWomanDreszcze(response.data);
        });
        StatisticsService.getChoosenNopCountBySex("dreszcze", "M").then(response => {
            setNopManDreszcze(response.data);
        });
        StatisticsService.getChoosenNopCountBySex("kaszel", "K").then(response => {
            setNopWomanKaszel(response.data);
        });
        StatisticsService.getChoosenNopCountBySex("kaszel", "M").then(response => {
            setNopManKaszel(response.data);
        });
        StatisticsService.getChoosenNopCountBySex("wymioty", "K").then(response => {
            setNopWomanWymioty(response.data);
        });
        StatisticsService.getChoosenNopCountBySex("wymioty", "M").then(response => {
            setNopManWymioty(response.data);
        });
        StatisticsService.getChoosenNopCountBySex("złe samopoczucie", "K").then(response => {
            setNopWomanZle(response.data);
        });
        StatisticsService.getChoosenNopCountBySex("złe samopoczucie", "M").then(response => {
            setNopManZle(response.data);
        });
        StatisticsService.getChoosenNopCountBySex("gorączka", "K").then(response => {
            setNopWomanGoraczka(response.data);
        });
        StatisticsService.getChoosenNopCountBySex("gorączka", "M").then(response => {
            setNopManGoraczka(response.data);
        });
        StatisticsService.getChoosenNopCountBySex("wysypka", "K").then(response => {
            setNopWomanWysypka(response.data);
        });
        StatisticsService.getChoosenNopCountBySex("wysypka", "M").then(response => {
            setNopManWysypka(response.data);
        });
        StatisticsService.getChoosenNopCountBySex("reakcja alergiczna", "K").then(response => {
            setNopWomanReakcja(response.data);
        });
        StatisticsService.getChoosenNopCountBySex("reakcja alergiczna", "M").then(response => {
            setNopManReakcja(response.data);
        });
        StatisticsService.getChoosenNopCountBySex("zgon", "K").then(response => {
            setNopWomanZgon(response.data);
        });
        StatisticsService.getChoosenNopCountBySex("zgon", "M").then(response => {
            setNopManZgon(response.data);
        });
        StatisticsService.getUpdateDateTime().then(response => {
            convertDate(response.data);
        });
        StatisticsService.getPredictedInfections(predictedInfectionsProvince).then(response => {
            setPredictedInfectionsData(response.data.data);
            setPredictedInfectionsLabels(response.data.time);
        });
    }, [])

    // runs while switching deaths/infections or switching province on deaths/infections chart
    useEffect(() => {
        if (showDeaths) {
            StatisticsService.getInfectionsByProvince(infectionsProvince, true).then(response => {
                setInfectionsDeathsData(response.data.data);
            })
        } else {
            StatisticsService.getInfectionsByProvince(infectionsProvince, false).then(response => {
                setInfectionsDeathsData(response.data.data);
            })
        }
    }, [showDeaths, infectionsProvince])

    // runs while switching province on vaccines chart
    useEffect(() => {
        StatisticsService.getVaccinesCountByprovince(vaccinesProvince).then(response => {
            setVaccinesData(response.data.data);
        })
    }, [vaccinesProvince])

    // runs while switching province on predictions chart
    useEffect(() => {
        StatisticsService.getPredictedInfections(predictedInfectionsProvince).then(response => {
            setPredictedInfectionsData(response.data.data);
            setPredictedInfectionsLabels(response.data.time);
        })
    }, [predictedInfectionsProvince])

    // converts date to YYYY-MM-DD HH-mm
    const convertDate = (date) => {
        let tempDate = "";
        tempDate += date.substr(0, 10); //date
        tempDate += " " + date.substr(11, 5); //time
        setUpdateDateTime(tempDate);
    }

    const changeVaccinesProvince = (e) => {
        setVaccinesProvince(e.target.value);
    }

    const changeInfectionsProvince = (e) => {
        setInfectionsProvince(e.target.value);
    }

    const changePredictedInfectionsProvince = (e) => {
        setPredictedInfectionsProvince(e.target.value);
    }

    const roundToTwoAfterComma = (number) => {
        let n = (number * 100 * 100) / 100;
        return n.toFixed(2);
    }

    const roundToThreeAfterComma = (number) => {
        let n = (number * 100 * 100) / 100;
        return n.toFixed(3);
    }

    const roundToFiveAfterComma = (number) => {
        let n = (number * 100 * 100) / 100;
        return n.toFixed(5);
    }

    //  ---------------- PAGE ---------------------
    return (
        <Styles>
            {/*  --------------------- HEADER -------------------------*/}
            <header>
                <h1>Statystyki</h1>
                <a href="/"><Button>Cofnij</Button></a>
            </header>

            {/*  --------------------- NOP TABLES -------------------------*/}
            <main>
                <div id="nop-statistics">
                    <p>
                        Dotychczas w Polsce wykonano <b>{vaccinesCount}</b> szczepień przeciwko COVID-19.<br/>
                        Dane na podstawie <b>{nopRowCount}</b> zgłoszonych niepożądanych odczynów
                        z czego <b>{nopManRowCount}</b> to mężczyźni, a <b>{nopWomanRowCount}</b> to kobiety.
                    </p>
                    <div id="nop-tables">
                        <div id="nop-woman-table">
                            <h2>Kobiety</h2>
                            <NopTable
                                zaczerwienienie={nopWomanZaczerwienienie}
                                omdlenie={nopWomanOmdlenie}
                                utrata={nopWomanUtrata}
                                bol={nopWomanBol}
                                dusznosci={nopWomanDusznosci}
                                tachykardia={nopWomanTachykardia}
                                oslabienie={nopWomanOslabienie}
                                nudnosci={nopWomanNudnosci}
                                dretwienie={nopWomanDretwienie}
                                odczyn={nopWomanOdczyn}
                                bolesnosc={nopWomanBolesnosc}
                                dreszcze={nopWomanDreszcze}
                                kaszel={nopWomanKaszel}
                                wymioty={nopWomanWymioty}
                                zle={nopWomanZle}
                                goraczka={nopWomanGoraczka}
                                wysypka={nopWomanWysypka}
                                reakcja={nopWomanReakcja}
                                zgon={nopWomanZgon}
                            />
                        </div>
                        <div id="nop-man-table">
                            <h2>Mężczyźni</h2>
                            <NopTable
                                zaczerwienienie={nopManZaczerwienienie}
                                omdlenie={nopManOmdlenie}
                                utrata={nopManUtrata}
                                bol={nopManBol}
                                dusznosci={nopManDusznosci}
                                tachykardia={nopManTachykardia}
                                oslabienie={nopManOslabienie}
                                nudnosci={nopManNudnosci}
                                dretwienie={nopManDretwienie}
                                odczyn={nopManOdczyn}
                                bolesnosc={nopManBolesnosc}
                                dreszcze={nopManDreszcze}
                                kaszel={nopManKaszel}
                                wymioty={nopManWymioty}
                                zle={nopManZle}
                                goraczka={nopManGoraczka}
                                wysypka={nopManWysypka}
                                reakcja={nopManReakcja}
                                zgon={nopManZgon}
                            />
                        </div>
                    </div>
                </div>
            </main>

            {/*  --------------------- NOP CHART -------------------------*/}
            <div id="nop-chart-div">
                <h2>Wykres częstości występowania konkretnych NOP-ów</h2>
                <div id="polar-chart-div">
                    <PolarArea
                        type="polarArea"
                        data={dataPolar}
                    />
                </div>
            </div>

            {/*  --------------------- VACCINES/INFECTIONS CHARTS -------------------------*/}
            <div id="vaccines-infections-charts">
                <h2>Ilość zaszczepionych</h2>
                <SelectProvince changeFunction={changeVaccinesProvince}/>
                <Line
                    data={{
                        labels: vaccinesLabels,
                        datasets: [
                            {
                                label: "zaszczepionych",
                                data: vaccinesData,
                                backgroundColor: "rgba(99, 255, 132, 0.2)",
                                borderColor: "rgba(99, 255, 132, 1)",
                                borderWidth: 1,
                            }
                        ],
                    }}
                    type='line'
                    options={{
                        aspectRatio: 5,
                    }}
                />
                <div id="bar-title-items">
                    <h2>Zmarli/Zarażeni</h2>
                    <div id="selector-button">
                        <SelectProvince changeFunction={changeInfectionsProvince}/>
                        <Button variant={showDeaths ? "warning" : "danger"} onClick={() => {
                            setShowDeaths(!showDeaths)
                        }}>{showDeaths ? "Zarażeni" : "Zmarli"}</Button>
                    </div>
                </div>
                <Line
                    data={{
                        labels: infectionsDeathsLabels,
                        datasets: [
                            {
                                label: showDeaths ? "zmarłych" : "zarażonych",
                                data: infectionsDeathsData,
                                backgroundColor: showDeaths ? "rgba(255, 99, 132, 0.2)" : "rgba(229, 135, 40, 0.2)",
                                borderColor: showDeaths ? "rgba(255, 99, 132, 1)" : "rgba(229, 135, 40, 1)",
                                borderWidth: 1,
                            },
                        ],
                    }}
                    type='line'
                    options={{
                        aspectRatio: 5,
                    }}
                />
            </div>

            {/*  --------------------- PREDICTION CHART -------------------------*/}
            <div id="prediction-div">
                <div id="prediction-label">
                    <h2>Przewidywane zachorowania w najbliższych 10 dniach</h2>
                    <SelectProvince changeFunction={changePredictedInfectionsProvince}/>
                </div>
                <div>
                    <Line
                        data={{
                            labels: predictedInfectionsLabels,
                            datasets: [
                                {
                                    label: "zarażonych",
                                    data: predictedInfectionsData,
                                    backgroundColor: "rgba(0, 0, 255, 0.2)",
                                    borderColor: "rgba(0, 0, 255, 1)",
                                    borderWidth: 1,
                                },
                            ],
                        }}
                        type='line'
                        options={{
                            aspectRatio: 3,
                        }}
                    />
                </div>

            </div>

            {/*  --------------------- SOURCE -------------------------*/}
            <p id="source-info">
                <b>Źródło:</b> Ministerstwo Zdrowia<br/>
                <b>Data aktualizacji:</b> {updateDateTime}
            </p>

            {/*  --------------------- SUMMARIZE WITH PERCENTS -------------------------*/}
            <div id="summarize">
                <h1>Podsumowanie</h1>
                <p>
                    Na podstawie powyższych danych można wysnuć ciekawe wnioski. Pierwsze co rzuca się w oczy to
                    znaczna przewaga zgłoszonych niepożądanych odczynów poszczepiennych przez kobiety. Stanowią
                    one <b>{roundToTwoAfterComma(nopWomanRowCount / nopRowCount)}%</b> wszystkich zgłoszeń. Można
                    więc stwierdzić, że kobiety ciężej znoszą szczepienie na COVID-19.<br/><br/>

                    Najczęstszymi i najistotniejszymi niepożądanymi odczynami poszczepiennymi są: <br/>
                    <ul>
                        <li className="bold-li">Zaczerwienienie i krótkotrwała bolesność w miejscu wkłucia</li>
                        <ul>
                            <li>
                                {roundToTwoAfterComma((nopManZaczerwienienie) / nopManRowCount)}%
                                niepożądanych odczynów wśród mężczyzn
                            </li>
                            <li>
                                {roundToTwoAfterComma((nopWomanZaczerwienienie) / nopWomanRowCount)}%
                                niepożądanych odczynów wśród kobiet
                            </li>
                            <li>
                                {roundToTwoAfterComma((Number(nopManZaczerwienienie) + Number(nopWomanZaczerwienienie)) / nopRowCount)}%
                                wszystkich niepożądanych zgłoszeń
                            </li>
                            <li>
                                {roundToThreeAfterComma((Number(nopManZaczerwienienie) + Number(nopWomanZaczerwienienie)) / vaccinesCount)}%
                                wszystkich szczepień
                            </li>
                        </ul>
                        <li className="bold-li">Gorączka</li>
                        <ul>
                            <li>
                                {roundToTwoAfterComma((nopManGoraczka) / nopManRowCount)}%
                                niepożądanych odczynów wśród mężczyzn
                            </li>
                            <li>
                                {roundToTwoAfterComma((nopWomanGoraczka) / nopWomanRowCount)}%
                                niepożądanych odczynów wśród kobiet
                            </li>
                            <li>
                                {roundToTwoAfterComma((Number(nopManGoraczka) + Number(nopWomanGoraczka)) / nopRowCount)}%
                                wszystkich niepożądanych zgłoszeń
                            </li>
                            <li>
                                {roundToFiveAfterComma((Number(nopManGoraczka) + Number(nopWomanGoraczka)) / vaccinesCount)}%
                                wszystkich szczepień
                            </li>
                        </ul>
                        <li className="bold-li">Osłabienie</li>
                        <ul>
                            <li>
                                {roundToTwoAfterComma((nopManOslabienie) / nopManRowCount)}%
                                niepożądanych odczynów wśród mężczyzn
                            </li>
                            <li>
                                {roundToTwoAfterComma((nopWomanOslabienie) / nopWomanRowCount)}%
                                niepożądanych odczynów wśród kobiet
                            </li>
                            <li>
                                {roundToTwoAfterComma((Number(nopManOslabienie) + Number(nopWomanOslabienie)) / nopRowCount)}%
                                wszystkich niepożądanych zgłoszeń
                            </li>
                            <li>
                                {roundToFiveAfterComma((Number(nopManOslabienie) + Number(nopWomanOslabienie)) / vaccinesCount)}%
                                wszystkich szczepień
                            </li>
                        </ul>
                        <li className="bold-li">Ból głowy</li>
                        <ul>
                            <li>
                                {roundToTwoAfterComma((nopManBol) / nopManRowCount)}%
                                niepożądanych odczynów wśród mężczyzn
                            </li>
                            <li>
                                {roundToTwoAfterComma((nopWomanBol) / nopWomanRowCount)}%
                                niepożądanych odczynów wśród kobiet
                            </li>
                            <li>
                                {roundToTwoAfterComma((Number(nopManBol) + Number(nopWomanBol)) / nopRowCount)}%
                                wszystkich niepożądanych zgłoszeń
                            </li>
                            <li>
                                {roundToFiveAfterComma((Number(nopManBol) + Number(nopWomanBol)) / vaccinesCount)}%
                                wszystkich szczepień
                            </li>
                        </ul>
                        <li className="bold-li">Dreszcze</li>
                        <ul>
                            <li>
                                {roundToTwoAfterComma((nopManDreszcze) / nopManRowCount)}%
                                niepożądanych odczynów wśród mężczyzn
                            </li>
                            <li>
                                {roundToTwoAfterComma((nopWomanDreszcze) / nopWomanRowCount)}%
                                niepożądanych odczynów wśród kobiet
                            </li>
                            <li>
                                {roundToTwoAfterComma((Number(nopManDreszcze) + Number(nopWomanDreszcze)) / nopRowCount)}%
                                wszystkich niepożądanych zgłoszeń
                            </li>
                            <li>
                                {roundToFiveAfterComma((Number(nopManDreszcze) + Number(nopWomanDreszcze)) / vaccinesCount)}%
                                wszystkich szczepień
                            </li>
                        </ul>
                        <li className="bold-li">Wymioty</li>
                        <ul>
                            <li>
                                {roundToTwoAfterComma((nopManWymioty) / nopManRowCount)}%
                                niepożądanych odczynów wśród mężczyzn
                            </li>
                            <li>
                                {roundToTwoAfterComma((nopWomanWymioty) / nopWomanRowCount)}%
                                niepożądanych odczynów wśród kobiet
                            </li>
                            <li>
                                {roundToTwoAfterComma((Number(nopManWymioty) + Number(nopWomanWymioty)) / nopRowCount)}%
                                wszystkich niepożądanych zgłoszeń
                            </li>
                            <li>
                                {roundToFiveAfterComma((Number(nopManWymioty) + Number(nopWomanWymioty)) / vaccinesCount)}%
                                wszystkich szczepień
                            </li>
                        </ul>
                        <li className="bold-li">Zgon</li>
                        <ul>
                            <li>
                                {roundToTwoAfterComma((nopManZgon) / nopManRowCount)}%
                                niepożądanych odczynów wśród mężczyzn
                            </li>
                            <li>
                                {roundToTwoAfterComma((nopWomanZgon) / nopWomanRowCount)}%
                                niepożądanych odczynów wśród kobiet
                            </li>
                            <li>
                                {roundToTwoAfterComma((Number(nopManZgon) + Number(nopWomanZgon)) / nopRowCount)}%
                                wszystkich niepożądanych zgłoszeń
                            </li>
                            <li>
                                {roundToFiveAfterComma((Number(nopManZgon) + Number(nopWomanZgon)) / vaccinesCount)}%
                                wszystkich szczepień
                            </li>
                        </ul>
                    </ul>
                </p>
            </div>
        </Styles>
    )
        ;
}

export default StatisticsPage;
