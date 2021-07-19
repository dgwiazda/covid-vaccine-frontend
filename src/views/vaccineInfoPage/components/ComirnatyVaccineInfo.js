import React, {useState} from 'react';

import VaccineInfoStyles from "./styles/VaccineInfoStyle";

function ComirnatyVaccineInfo() {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);

    return (
        <VaccineInfoStyles>
            <div className="title-wrapper"><h1>Comirnaty</h1></div>
            <div className="button-wrapper">
                <button onClick={() => {
                    setShow1(!show1)
                }}>
                    <h2 className="headers">Informacje przed zażyciem szczepionki</h2>

                </button>
            </div>
            {show1 ?
                <div className="info-div">
                    <h3>KIEDY NIE PODAWAĆ SZCZEPIONKI COMIRNATY</h3>
                    <p>
                        <ul>
                            <li>
                                jeśli pacjent ma uczulenie na substancję czynną lub którykolwiek z pozostałych
                                składników tego leku.
                            </li>
                        </ul>
                    </p>
                    <h3>OSTRZEŻENIA I ŚRODKI OSTROŻNOŚCI</h3>
                    <p>
                        Przed otrzymaniem szczepionki należy omówić to z lekarzem, farmaceutą lub pielęgniarką, jeśli:
                        <ul>
                            <li>
                                u pacjenta kiedykolwiek wystąpiła ciężka reakcja alergiczna lub problemy z oddychaniem
                                po wstrzyknięciu jakiejkolwiek innej szczepionki lub po podaniu szczepionki
                                Comirnaty w przeszłości.
                            </li>
                            <li>
                                pacjent kiedykolwiek zemdlał po podaniu wstrzyknięcia z użyciem igły.
                            </li>
                            <li>
                                u pacjenta występuje ciężka choroba lub infekcja przebiegająca z wysoką gorączką.
                                Pacjent może jednak otrzymać szczepionkę, jeśli występuje u niego nieznaczna gorączka
                                lub infekcja górnych dróg oddechowych, taka jak przeziębienie.
                            </li>
                            <li>
                                pacjent ma problemy z krzepnięciem krwi, łatwo powstają u niego siniaki
                                lub stosuje lek przeciwzakrzepowy.
                            </li>
                            <li>
                                pacjent ma osłabiony układ immunologiczny w wyniku choroby, takiej jak zakażenie
                                wirusem HIV lub przyjmuje leki, takie jak kortykosteroidy,
                                wpływające na układ immunologiczny.
                            </li>
                        </ul>
                        Tak jak w przypadku każdej innej szczepionki, cykl 2 dawek szczepionki Comirnaty może
                        nie zapewniać pełnej ochrony wszystkim osobom, które go otrzymały oraz nie wiadomo
                        jak długo ochrona ta będzie się utrzymywać.
                    </p>
                    <h3>DZIECI I MŁODZIEŻ</h3>
                    <p>
                        Szczepionka Comirnaty nie jest zalecana do stosowania u dzieci w wieku poniżej 16 lat.
                    </p>
                    <h3>SZCZEPIONKA COMIRNATY A INNE LEKI</h3>
                    <p>
                        Należy powiedzieć lekarzowi lub farmaceucie o wszystkich lekach stosowanych przez pacjenta
                        obecnie
                        lub ostatnio, a także o lekach, które pacjent planuje stosować oraz o jakichkolwiek
                        niedawno otrzymanych szczepionkach.
                    </p>
                    <h3>CIĄŻA I KARMIENIE PIERSIĄ</h3>
                    <p>
                        Jeśli pacjentka jest w ciąży lub karmi piersią, przypuszcza że może być w ciąży lub gdy
                        planuje mieć dziecko, powinna poradzić się lekarza lub farmaceuty przed otrzymaniem tej
                        szczepionki.
                    </p>
                    <h3>PROWADZENIE POJAZDÓW I OBSŁUGIWANIE MASZYN</h3>
                    <p>
                        Niektóre z działań szczepionki wymienione w punkcie 4 (Możliwe działania niepożądane) mogą
                        tymczasowo wpływać na zdolność prowadzenia pojazdów lub obsługiwania maszyn. Należy poczekać
                        aż działania te ustąpią przed przystąpieniem do prowadzenia pojazdów lub obsługiwania maszyn.
                    </p>
                    <h3>SZCZEPIONKA COMIRNATY ZAWIERA POTAS I SÓD</h3>
                    <p>
                        Szczepionka zawiera mniej niż 1 mmol (39 mg) potasu na dawkę, to znaczy szczepionkę uznaje
                        się za „wolną od potasu”.
                        Szczepionka zawiera mniej niż 1 mmol (23 mg) sodu na dawkę, to znaczy szczepionkę uznaje
                        się za „wolną od sodu”.
                    </p>
                </div>
                :
                ""}

            <div className="button-wrapper">
                <button onClick={() => {
                    setShow2(!show2)
                }}>
                    <h2 className="headers">Sposób podawania szczepionki</h2>
                </button>
            </div>
            {show2 ?
                <div className="info-div">
                    <p>
                        Szczepionkę Comirnaty podaje się po rozcieńczeniu jako wstrzyknięcie 0,3 ml do mięśnia
                        górnej części ramienia. Pacjent otrzyma 2 wstrzyknięcia. Zaleca się podanie drugiej dawki tej
                        samej szczepionki po upływie 3 tygodni od podania pierwszej dawki, aby ukończyć cykl
                        szczepienia.
                        W razie jakichkolwiek dalszych wątpliwości związanych ze stosowaniem szczepionki Comirnaty,
                        należy zwrócić się do lekarza, farmaceuty lub pielęgniarki.
                    </p>
                </div>
                :
                ""}

            <div className="button-wrapper">
                <button onClick={() => {
                    setShow3(!show3)
                }}>
                    <h2 className="headers">Niepożądany odczyn poszczepienny</h2>
                </button>
            </div>
            {show3 ?
                <div className="info-div">
                    <p>
                        Jak każda szczepionka, szczepionka Comirnaty może powodować działania niepożądane,
                        chociaż nie u każdego one wystąpią.<br/><br/>

                        <b>BARDZO CZĘSTE DZIAŁANIA NIEPOŻĄDANE:</b> mogą wystąpić u więcej niż 1 na 10 osób
                        <ul>
                            <li>w miejscu wstrzyknięcia: ból, obrzęk,</li>
                            <li>zmęczenie,</li>
                            <li>ból głowy,</li>
                            <li>ból mięśni,</li>
                            <li>ból stawów,</li>
                            <li>dreszcze, gorączka.</li>
                        </ul>
                        <br/>
                        <b>CZĘSTE DZIAŁANIA NIEPOŻĄDANE:</b> mogą wystąpić u maksymalnie 1 na 10 osób
                        <ul>
                            <li>zaczerwienienie w miejscu wstrzyknięcia,</li>
                            <li>nudności.</li>
                        </ul>
                        <br/>
                        <b>NIEZBYT CZĘSTE DZIAŁANIA NIEPOŻĄDANE:</b> mogą wystąpić u maksymalnie 1 na 100 osób
                        <ul>
                            <li>powiększone węzły chłonne,</li>
                            <li>złe samopoczucie,</li>
                            <li>ból kończyny,</li>
                            <li>bezsenność,</li>
                            <li>swędzenie w miejscu wstrzyknięcia.</li>
                        </ul>
                        <br/>
                        <b>RZADKIE DZIAŁANIA NIEPOŻĄDANE:</b> mogą wystąpić u maksymalnie 1 na 1 000 osób
                        <ul>
                            <li>przemijające jednostronne porażenie nerwu twarzowego.</li>
                        </ul>
                        <br/>
                        <b>CZĘSTOŚĆ NIEZNANA</b> (częstość nie może być określona na podstawie dostępnych danych)
                        <ul>
                            <li>ciężka reakcja alergiczna.</li>
                        </ul>
                    </p>
                    <h3>ZGŁASZANIE DZIAŁAŃ NIEPOŻĄDANYCH</h3>
                    <p>
                        Jeśli wystąpią jakiekolwiek objawy niepożądane, w tym wszelkie objawy niepożądane niewymienione
                        w
                        tej ulotce, należy powiedzieć o tym lekarzowi, farmaceucie lub pielęgniarce.<br/><br/>

                        Działania niepożądane można zgłaszać bezpośrednio do Departamentu Monitorowania Niepożądanych
                        Działań Produktów Leczniczych Urzędu Rejestracji Produktów Leczniczych,
                        Wyrobów Medycznych i Produktów Biobójczych<br/><br/>

                        <b>Al. Jerozolimskie 181C<br/>
                            PL-02 222 Warszawa<br/>
                            Tel.:</b> + 48 22 49 21 301<br/>
                        <b>Faks</b>: + 48 22 49 21 309<br/><br/>

                        <b>Strona internetowa:</b> https://smz.ezdrowie.gov.pl<br/><br/>

                        Dzięki zgłaszaniu działań niepożądanych można będzie zgromadzić więcej informacji na
                        temat bezpieczeństwa stosowania leku.
                    </p>
                </div>
                :
                ""}
            <p id="source-info">
                <b>Źródło:</b> Ministerstwo Zdrowia<br/>
                <b>Data aktualizacji:</b> 17.03.2021
            </p>
        </VaccineInfoStyles>
    );
}

export default ComirnatyVaccineInfo;
