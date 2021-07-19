import React from "react";

import {Table} from "react-bootstrap";

import styled from "styled-components";

const Styles = styled.div`

  table {
    thead {
      tr {
        th {
          color: darkcyan;
        }
      }
    }
  }
  
  tr {
    td:first-child {
      color: darkcyan;
    }
  }

`;

function NopTable(props) {
    return (
        <Styles>
            <Table bordered hover size="sm">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Niepożądany odczyn</th>
                    <th>Ilość wystąpień</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Zaczerwienienie i krótkotrwała bolesność w miejscu wkłucia</td>
                    <td>{props.zaczerwienienie}</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Omdlenie</td>
                    <td>{props.omdlenie}</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Utrata przytomności</td>
                    <td>{props.utrata}</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Ból głowy</td>
                    <td>{props.bol}</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Duszności</td>
                    <td>{props.dusznosci}</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Tachykardia</td>
                    <td>{props.tachykardia}</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Osłabienie</td>
                    <td>{props.oslabienie}</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Nudności</td>
                    <td>{props.nudnosci}</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Drętwienie</td>
                    <td>{props.dretwienie}</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Odczyn w miejscu wstrzyknięcia</td>
                    <td>{props.odczyn}</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Bolesność i powiększenie regionalnych węzłów chłonnych</td>
                    <td>{props.bolesnosc}</td>
                </tr>
                <tr>
                    <td>12</td>
                    <td>Dreszcze</td>
                    <td>{props.dreszcze}</td>
                </tr>
                <tr>
                    <td>13</td>
                    <td>Kaszel</td>
                    <td>{props.kaszel}</td>
                </tr>
                <tr>
                    <td>14</td>
                    <td>Wymioty</td>
                    <td>{props.wymioty}</td>
                </tr>
                <tr>
                    <td>15</td>
                    <td>Złe samopoczucie</td>
                    <td>{props.zle}</td>
                </tr>
                <tr>
                    <td>16</td>
                    <td>Gorączka</td>
                    <td>{props.goraczka}</td>
                </tr>
                <tr>
                    <td>17</td>
                    <td>Wysypka</td>
                    <td>{props.wysypka}</td>
                </tr>
                <tr>
                    <td>18</td>
                    <td>Reakcja alergiczna</td>
                    <td>{props.reakcja}</td>
                </tr>
                <tr>
                    <td>19</td>
                    <td>Zgon</td>
                    <td>{props.zgon}</td>
                </tr>
                </tbody>
            </Table>
        </Styles>
    )
}

export default NopTable;