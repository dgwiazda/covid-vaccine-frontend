import React, {Fragment, useEffect, useState} from 'react';

import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow
} from "react-google-maps";

import styled from 'styled-components'
import {Button} from "react-bootstrap";
import VaccinePointsService from "./services/VaccinePointsService";
import VaccinePointsTable from "./components/VaccinePointsTable";
import StatisticsService from "../statisticsPage/services/StatisticsService";

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
  
  #map {
    height: 100vh;
    width: 100vw;
  }
  
  #table-selector-div {
    padding: 1rem;
    background-color: darkcyan;
    h4 {
      color: white;
      margin-left: 3vw;
    }
    #table-input {
      margin-left: 3vw;
      margin-bottom: 15px;
      width: 300px;
      color: darkcyan;
      padding: 10px 10px 10px 15px;
      font-size: large;
      border: 1px solid darkcyan;
      border-radius: 3px;
    }
  }
  
  #table-div {
    background-color: darkcyan;
  }
  
  table {
    border-spacing: 0;
    border: 1px solid black;
    width: 93vw;
    margin: 0 auto;
    background-color: #fbfbf9;
    thead {
    
      tr {
       :first-child {
         th {
           font-size: large;
           text-align: center;
         }
       }
       :nth-child(2) {
          text-align: center;
       }
    }
      
    tr {
      }
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      :last-child {
        border-right: 0;
      }
    }
    th {
      color: darkcyan;
    }
    td:first-child {
      color: darkcyan;
      font-weight: bold;
      text-align: center;
    }
  }
  .pagination {
    padding: 0.5rem;
    margin-left: 3vw;
    color: white;
  }
  
  p#source-info {
    margin: 20px 0 30px 30px;
    
    b {
      color: darkcyan;
    }
  }

`;

// for map
const googleMapURL = "https://maps.googleapis.com/maps/api/js?key=" +
    "AIzaSyCdul0als7SOcOJNio3DVEoQy26S9N1Nlc";

function VaccinePointsPage() {
    const [count, setCount] = useState(0);
    const [selected, setSelected] = useState(null);
    const [vaccinePoints, setVaccinePoints] = useState([]);
    const [townInput, setTownInput] = useState("");
    const [updateDateTime, setUpdateDateTime] = useState("");

    useEffect(() => {
        StatisticsService.getUpdateDateTime().then(response => {
            convertDate(response.data);
        });
    }, []);

    // runs while searching for town for table
    useEffect(() => {
        if (townInput === "") {
            VaccinePointsService.getAll().then(response => {
                setVaccinePoints(response.data);
            })
        } else {
            VaccinePointsService.getVaccinePointsByTown(townInput).then(response => {
                setVaccinePoints(response.data);
            })
        }
    }, [townInput]);

    // function for getting vaccine points count by town
    const getCount = marker => {
        VaccinePointsService.getVaccinePointsCountByTown(marker.town).then(response => {
            setCount(response.data);
            setSelected(marker);
        });
    }

    // function for handlig town input for table
    const handleSelect = event => {
        if (event.key === 'Enter') {
            setTownInput(event.target.value);
        }
    }

    // columns for VaccinePointsTable props
    const columns = React.useMemo(
        () => [
            {
                Header: 'Punkty Szczepień w Polsce',
                columns: [
                    {
                        Header: '#',
                        accessor: 'id',
                    },
                    {
                        Header: 'Nazwa',
                        accessor: 'name',
                    },
                    {
                        Header: 'Miasto',
                        accessor: 'town',
                    },
                    {
                        Header: 'Ulica',
                        accessor: 'street',
                    },
                    {
                        Header: 'Oddział NFZ',
                        accessor: 'nfzDepartment',
                    },
                    {
                        Header: 'Data dodania',
                        accessor: 'additionDate',
                    },
                ],
            },
        ],
        []
    );

    // converts date to YYYY-MM-DD HH-mm
    const convertDate = (date) => {
        let tempDate = "";
        tempDate += date.substr(0, 10); //date
        tempDate += " " + date.substr(11, 5); //time
        setUpdateDateTime(tempDate);
    }

    // choosen towns markers on map data
    const markers = [
        {
            "id": 1,
            "count": count,
            "town": "Gdynia",
            "lat": 54.518890,
            "lng": 18.530540
        },
        {
            "id": 2,
            "count": count,
            "town": "Gdańsk",
            "lat": 54.352024,
            "lng": 18.646639
        },
        {
            "id": 3,
            "count": count,
            "town": "Słupsk",
            "lat": 54.464298,
            "lng": 17.031260
        },
        {
            "id": 4,
            "count": count,
            "town": "Koszalin",
            "lat": 54.189949,
            "lng": 16.181030
        },
        {
            "id": 5,
            "count": count,
            "town": "Szczecin",
            "lat": 53.428543,
            "lng": 14.552812
        },
        {
            "id": 6,
            "count": count,
            "town": "Szczecinek",
            "lat": 53.710979,
            "lng": 16.691111
        },
        {
            "id": 7,
            "count": count,
            "town": "Gorzów Wielkopolski",
            "lat": 52.732201,
            "lng": 15.237570
        },
        {
            "id": 8,
            "count": count,
            "town": "Piła",
            "lat": 53.151741,
            "lng": 16.742889
        },
        {
            "id": 9,
            "count": count,
            "town": "Poznań",
            "lat": 52.406376,
            "lng": 16.925167
        },
        {
            "id": 10,
            "count": count,
            "town": "Zielona Góra",
            "lat": 51.936619,
            "lng": 15.508690
        },
        {
            "id": 11,
            "count": count,
            "town": "Leszno",
            "lat": 51.841690,
            "lng": 16.572941
        },
        {
            "id": 12,
            "count": count,
            "town": "Legnica",
            "lat": 51.204491,
            "lng": 16.159241
        },
        {
            "id": 13,
            "count": count,
            "town": "Jelenia Góra",
            "lat": 50.904171,
            "lng": 15.735570
        },
        {
            "id": 14,
            "count": count,
            "town": "Wałbrzych",
            "lat": 50.785290,
            "lng": 16.286930
        },
        {
            "id": 15,
            "count": count,
            "town": "Wrocław",
            "lat": 51.107883,
            "lng": 17.038538
        },
        {
            "id": 16,
            "count": count,
            "town": "Chojnice",
            "lat": 53.695251,
            "lng": 17.562820
        },
        {
            "id": 17,
            "count": count,
            "town": "Grudziądz",
            "lat": 53.487419,
            "lng": 18.756310
        },
        {
            "id": 18,
            "count": count,
            "town": "Bydgoszcz",
            "lat": 53.121132,
            "lng": 17.992970
        },
        {
            "id": 19,
            "count": count,
            "town": "Gniezno",
            "lat": 52.538551,
            "lng": 17.597549
        },
        {
            "id": 20,
            "count": count,
            "town": "Konin",
            "lat": 52.226139,
            "lng": 18.243139
        },
        {
            "id": 21,
            "count": count,
            "town": "Kalisz",
            "lat": 51.766441,
            "lng": 18.086830
        },
        {
            "id": 22,
            "count": count,
            "town": "Ostrów Wielkopolski",
            "lat": 51.650028,
            "lng": 17.815729
        },
        {
            "id": 23,
            "count": count,
            "town": "Częstochowa",
            "lat": 50.811817,
            "lng": 19.120310
        },
        {
            "id": 24,
            "count": count,
            "town": "Opole",
            "lat": 50.667728,
            "lng": 17.928600
        },
        {
            "id": 25,
            "count": count,
            "town": "Katowice",
            "lat": 50.264893,
            "lng": 19.023781
        },
        {
            "id": 26,
            "count": count,
            "town": "Kraków",
            "lat": 50.064651,
            "lng": 19.944981
        },
        {
            "id": 27,
            "count": count,
            "town": "Kielce",
            "lat": 50.869930,
            "lng": 20.640961
        },
        {
            "id": 28,
            "count": count,
            "town": "Piotrków Trybunalski",
            "lat": 51.405251,
            "lng": 19.688290
        },
        {
            "id": 29,
            "count": count,
            "town": "Łódź",
            "lat": 51.759247,
            "lng": 19.455982
        },
        {
            "id": 30,
            "count": count,
            "town": "Włocławek",
            "lat": 52.653160,
            "lng": 19.059940
        },
        {
            "id": 31,
            "count": count,
            "town": "Płock",
            "lat": 52.552601,
            "lng": 19.661501
        },
        {
            "id": 32,
            "count": count,
            "town": "Mława",
            "lat": 53.111801,
            "lng": 20.381540
        },
        {
            "id": 33,
            "count": count,
            "town": "Iława",
            "lat": 53.595982,
            "lng": 19.568411
        },
        {
            "id": 34,
            "count": count,
            "town": "Olsztyn",
            "lat": 53.775711,
            "lng": 20.477980
        },
        {
            "id": 35,
            "count": count,
            "town": "Elbląg",
            "lat": 54.167130,
            "lng": 19.407820
        },
        {
            "id": 36,
            "count": count,
            "town": "Giżycko",
            "lat": 54.034950,
            "lng": 21.771240
        },
        {
            "id": 37,
            "count": count,
            "town": "Suwałki",
            "lat": 54.099918,
            "lng": 22.926979
        },
        {
            "id": 38,
            "count": count,
            "town": "Augustów",
            "lat": 53.844040,
            "lng": 22.982401
        },
        {
            "id": 39,
            "count": count,
            "town": "Ełk",
            "lat": 53.828053,
            "lng": 22.364662
        },
        {
            "id": 40,
            "count": count,
            "town": "Łomża",
            "lat": 53.178120,
            "lng": 22.059032
        },
        {
            "id": 41,
            "count": count,
            "town": "Białystok",
            "lat": 53.132488,
            "lng": 23.168840
        },
        {
            "id": 42,
            "count": count,
            "town": "Ostrołęka",
            "lat": 53.085312,
            "lng": 21.570940
        },
        {
            "id": 43,
            "count": count,
            "town": "Warszawa",
            "lat": 52.229675,
            "lng": 21.012230
        },
        {
            "id": 44,
            "count": count,
            "town": "Siedlce",
            "lat": 52.166451,
            "lng": 22.275940
        },
        {
            "id": 45,
            "count": count,
            "town": "Biała Podlaska",
            "lat": 52.033852,
            "lng": 23.118740
        },
        {
            "id": 46,
            "count": count,
            "town": "Radom",
            "lat": 51.406670,
            "lng": 21.125441
        },
        {
            "id": 47,
            "count": count,
            "town": "Puławy",
            "lat": 51.416481,
            "lng": 21.969040
        },
        {
            "id": 48,
            "count": count,
            "town": "Lublin",
            "lat": 51.246910,
            "lng": 22.573620
        },
        {
            "id": 49,
            "count": count,
            "town": "Chełm",
            "lat": 51.132648,
            "lng": 23.473761
        },
        {
            "id": 50,
            "count": count,
            "town": "Sandomierz",
            "lat": 50.682240,
            "lng": 21.750177
        },
        {
            "id": 51,
            "count": count,
            "town": "Zamość",
            "lat": 50.717369,
            "lng": 23.252760
        },
        {
            "id": 52,
            "count": count,
            "town": "Stalowa Wola",
            "lat": 50.570961,
            "lng": 22.061590
        },
        {
            "id": 53,
            "count": count,
            "town": "Mielec",
            "lat": 50.293308,
            "lng": 21.443569
        },
        {
            "id": 54,
            "count": count,
            "town": "Bielsko Biała",
            "lat": 49.807621,
            "lng": 19.055840
        },
        {
            "id": 55,
            "count": count,
            "town": "Tarnów",
            "lat": 50.015732,
            "lng": 20.986601
        },
        {
            "id": 56,
            "count": count,
            "town": "Przemyśl",
            "lat": 49.783699,
            "lng": 22.768030
        },
        {
            "id": 57,
            "count": count,
            "town": "Rzeszów",
            "lat": 50.041187,
            "lng": 21.999121
        },
        {
            "id": 58,
            "count": count,
            "town": "Nowy Sącz",
            "lat": 49.617180,
            "lng": 20.713390
        },
    ]

    // google maps
    const CMap = withScriptjs(withGoogleMap(() =>
        <GoogleMap
            defaultZoom={6.9}
            defaultCenter={{lat: 52.253160, lng: 20.059940}}
        >
            {markers.map((marker) => (
                <Marker
                    key={marker.id}
                    position={{lat: marker.lat, lng: marker.lng}}
                    onClick={() => {
                        getCount(marker);
                    }}
                />
            ))}

            {selected ? (
                <InfoWindow
                    position={{lat: selected.lat, lng: selected.lng}}
                    onCloseClick={() => {
                        setSelected(null);
                    }}
                >
                    <div>
                        <h6>{selected.town}</h6>
                        <p>Liczba punktów szczepień: <b>{count}</b></p>
                    </div>
                </InfoWindow>
            ) : null}
        </GoogleMap>
    ));

    // ------------------------------ PAGE ----------------------------------
    return (
        <Styles>
            {/*  --------------------- HEADER -------------------------*/}
            <header>
                <h1>Punkty szczepień</h1>
                <a href="/"><Button>Cofnij</Button></a>
            </header>

            {/*  --------------------- GOOGLE MAPS -------------------------*/}
            <Fragment>
                <CMap
                    googleMapURL={googleMapURL}
                    loadingElement={<div style={{height: `100%`}}/>}
                    containerElement={<div style={{height: `700px`}}/>}
                    mapElement={<div style={{height: `100%`}}/>}
                    center={{lat: 25.03, lng: 121.6}}
                >
                </CMap>
            </Fragment>

            {/*  --------------------- TABLE -------------------------*/}
            <div id="table-selector-div">
                <h4>Szukaj</h4>
                <input id="table-input" type="text" placeholder="Miasto" onKeyDown={handleSelect}/>
            </div>
            <div id="table-div">
                <VaccinePointsTable columns={columns} data={vaccinePoints}/>
            </div>

            {/*  --------------------- SOURCE -------------------------*/}
            <p id="source-info">
                <b>Źródło:</b> Ministerstwo Zdrowia<br/>
                <b>Data aktualizacji:</b> {updateDateTime}
            </p>
        </Styles>
    );
}

export default VaccinePointsPage;
