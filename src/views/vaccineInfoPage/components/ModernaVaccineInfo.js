import React, {useState} from 'react';

import VaccineInfoStyles from "./styles/VaccineInfoStyle";

function ModernaVaccineInfo() {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);

    return (
        <VaccineInfoStyles>
            <div className="title-wrapper"><h1>Moderna</h1></div>
            <div className="button-wrapper">
                <button onClick={() => {
                    setShow1(!show1)
                }}>
                    <h2>Informacje przed zażyciem szczepionki</h2>
                </button>
            </div>
            {show1 ?
                <div className="info-div">
                    <h3>KIEDY NIE PRZYJMOWAĆ SZCZEPIONKI</h3>
                    <p>
                        <ul>
                            <li>
                                jeśli pacjent ma uczulenie na substancję czynną lub którykolwiek z pozostałych
                                składników tej szczepionki.
                            </li>
                        </ul>
                    </p>
                    <h3>OSTRZEŻENIA I ŚRODKI OSTROŻNOŚCI</h3>
                    <p>
                        Przed przyjęciem COVID-19 Vaccine Moderna należy omówić to z lekarzem lub pielęgniarką, jeżeli:
                        <ul>
                            <li>
                                u pacjenta kiedykolwiek wystąpiła ciężka, zagrażająca życiu reakcja alergiczna po
                                wstrzyknięciu jakiejkolwiek innej szczepionki lub po podaniu COVID-19 Vaccine
                                Moderna w przeszłości.
                            </li>
                            <li>
                                u pacjenta występuje osłabienie lub upośledzenie układu immunologicznego.
                            </li>
                            <li>
                                u pacjenta występują zaburzenia krzepliwości.
                            </li>
                            <li>
                                u pacjenta występuje wysoka gorączka albo ciężkie zakażenie; pacjent może jednak
                                otrzymać szczepionkę, jeśli występuje u niego łagodna gorączka lub infekcja
                                górnych dróg oddechowych, taka jak przeziębienie.
                            </li>
                            <li>
                                u pacjenta występuje jakakolwiek poważna choroba.
                            </li>
                            <li>
                                u pacjenta występuje lęk związany ze wstrzyknięciami.
                            </li>
                            <li>
                                u pacjenta kiedykolwiek doszło do omdlenia po wkłuciu jakiejkolwiek igły.
                            </li>
                        </ul>
                        W przypadku zaistnienia którejkolwiek z powyższych sytuacji (albo gdy nie ma pewności),
                        przed przyjęciem COVID-19 Vaccine Moderna należy omówić to z lekarzem lub
                        pielęgniarką.<br/><br/>

                        Tak jak w przypadku każdej innej szczepionki, cykl 2 dawek COVID-19 Vaccine Moderna może
                        nie zapewniać pełnej ochrony wszystkim osobom, które go otrzymały oraz nie wiadomo jak
                        długo ochrona ta będzie się utrzymywać.
                    </p>
                    <h3>DZIECI I MŁODZIEŻ</h3>
                    <p>
                        COVID-19 Vaccine Moderna nie jest zalecana u dzieci i młodzieży w wieku poniżej 18 lat.
                    </p>
                    <h3>COVID-19 VACCINE MODERNA A INNE LEKI</h3>
                    <p>
                        Należy powiedzieć lekarzowi o wszystkich lekach przyjmowanych przez pacjenta obecnie
                        lub ostatnio, a także o lekach, które pacjent planuje przyjmować. COVID-19 Vaccine
                        Moderna może wpływać na działanie innych leków, a inne leki mogą wpływać na działanie
                        COVID-19 Vaccine Moderna.
                    </p>
                    <h3>CIĄŻA I KARMIENIE PIERSIĄ</h3>
                    <p>
                        Jeśli pacjentka jest w ciąży lub karmi piersią, przypuszcza że może być w ciąży
                        lub gdy planuje mieć dziecko, powinna poradzić się lekarza lub pielęgniarki
                        przed szczepieniem.
                    </p>
                    <h3>PROWADZENIE POJAZDÓW I OBSŁUGIWANIE MASZYN</h3>
                    <p>
                        Nie należy prowadzić pojazdów ani obsługiwać maszyn w przypadku złego samopoczucia
                        po szczepieniu. Należy zaczekać, dopóki wpływ szczepionki nie ustąpi przed
                        prowadzeniem pojazdów lub obsługiwaniem maszyn.
                    </p>
                    <h3>COVID-19 VACCINE MODERNA ZAWIERA SÓD</h3>
                    <p>
                        COVID-19 Vaccine Moderna zawiera mniej niż 23 mmol sodu na dawkę, to znaczy
                        szczepionkę uznaje się za „wolną od sodu”.
                    </p>
                </div>
                :
                ""}
            <div className="button-wrapper">
                <button onClick={() => {
                    setShow2(!show2)
                }}>
                    <h2>Sposób podawania szczepionki</h2>
                </button>
            </div>
            {show2 ?
                <div className="info-div">
                    <p>
                        COVID-19 Vaccine Moderna zostanie podana w postaci dwóch wstrzyknięć po 0,5 ml. Zaleca się,
                        aby drugą dawkę tej samej szczepionki podawać 28 dni po przyjęciu pierwszej dawki,
                        aby ukończyć cykl szczepienia.

                        Uprawniona osoba wykonująca zawód medyczny wstrzyknie pacjentowi szczepionkę w
                        mięsień (wstrzyknięcie domięśniowe) ramienia.

                        Podczas podawania każdego wstrzyknięcia szczepionki i przez około 15 minut po jego
                        podaniu lekarz lub pielęgniarka będzie obserwować pacjenta czy nie występują u niego
                        objawy reakcji alergicznej.

                        Niestawienie się na wizytę w celu przyjęcia drugiej dawki COVID-19 Vaccine Moderna
                        <ul>
                            <li>
                                W przypadku niestawienia się na wizytę należy jak najprędzej ustalić inny termin wizyty.
                            </li>
                            <li>
                                W przypadku pominięcia planowego wstrzyknięcia pacjent może nie być w pełni
                                chroniony przed wirusem wywołującym COVID-19.
                            </li>
                        </ul>

                        W razie jakichkolwiek dalszych wątpliwości związanych ze stosowaniem tej szczepionki,
                        należy zwrócić się do lekarza lub pielęgniarki.
                    </p>
                </div>
                :
                ""}
            <div className="button-wrapper">
                <button onClick={() => {
                    setShow3(!show3)
                }}>
                    <h2>Niepożądany odczyn poszczepienny</h2>
                </button>
            </div>
            {show3 ?
                <div className="info-div">
                    <p>
                        Jak każdy lek, szczepionka ta może powodować działania niepożądane, chociaż
                        nie u każdego one wystąpią.

                        Należy uzyskać pilną pomoc medyczną w przypadku wystąpienia któregokolwiek z poniższych
                        objawów przedmiotowych i podmiotowych reakcji alergicznej:
                        <ul>
                            <li>uczucie osłabienia lub zawroty głowy</li>
                            <li>zmiany rytmu serca</li>
                            <li>duszność</li>
                            <li>świszczący oddech</li>
                            <li>obrzęk ust, twarzy albo gardła</li>
                            <li>pokrzywka albo wysypka</li>
                            <li>nudności albo wymioty</li>
                            <li>ból brzucha</li>
                        </ul>

                        <h3 className="info-title">ZGŁASZANIE DZIAŁAŃ NIEPOŻĄDANYCH</h3>
                        Jeśli wystąpią jakiekolwiek objawy niepożądane, w tym wszelkie objawy niepożądane niewymienione
                        w
                        tej ulotce, należy powiedzieć o tym lekarzowi, farmaceucie lub pielęgniarce.<br/><br/>

                        Działania niepożądane można zgłaszać bezpośrednio do Departamentu Monitorowania Niepożądanych
                        Działań Produktów Leczniczych Urzędu Rejestracji Produktów Leczniczych, Wyrobów Medycznych i
                        Produktów Biobójczych:<br/><br/>

                        <b>Al. Jerozolimskie 181C,<br/>
                            02-222 Warszawa,<br/>
                            tel.:</b> + 48 22 49 21 301, <b>faks:</b> + 48 22 49 21 309.<br/><br/>

                        <b>Strona internetowa:</b> https://smz.ezdrowie.gov.pl.<br/><br/>

                        Dzięki zgłaszaniu działań niepożądanych można będzie zgromadzić więcej informacji na temat
                        bezpieczeństwa stosowania szczepionki.
                    </p>
                </div>
                :
                ""}
            <p id="source-info">Źródło: Ministerstwo Zdrowia<br/>Data aktualizacji: 17.03.2021</p>
        </VaccineInfoStyles>
    );
}

export default ModernaVaccineInfo;
