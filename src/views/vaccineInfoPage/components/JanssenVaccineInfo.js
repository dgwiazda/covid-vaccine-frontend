import React, {useState} from 'react';

import VaccineInfoStyles from "./styles/VaccineInfoStyle";

function JanssenVaccineInfo() {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);

    return (
        <VaccineInfoStyles>
            <div className="title-wrapper"><h1>Janssen</h1></div>
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
                        Przed przyjęciem szczepionki COVID-19 Vaccine Janssen należy omówić to z lekarzem, farmaceutą
                        lub pielęgniarką:
                        <ul>
                            <li>
                                jeśli u pacjenta kiedykolwiek wystąpiła ciężka reakcja alergiczna po wstrzyknięciu
                                jakiejkolwiek innej szczepionki,
                            </li>
                            <li>
                                jeśli pacjent kiedykolwiek zemdlał po wkłuciu igły,
                            </li>
                            <li>
                                jeśli pacjent ma ciężkie zakażenie z wysoką temperaturą (powyżej 38°C). Pacjenta
                                można zaszczepić, jeśli występuje lekka gorączka lub lekkie zakażenie górnych dróg
                                oddechowych, np. przeziębienie,
                            </li>
                            <li>
                                jeśli pacjent ma problem z krzepnięciem krwi lub powstawaniem siniaków, lub jeśli
                                pacjent przyjmuje lek przeciwzakrzepowy (zapobiegający powstawaniu zakrzepom krwi),
                            </li>
                            <li>
                                jeśli układ odpornościowy pacjenta nie działa prawidłowo (niedobór odporności) lub
                                pacjent przyjmuje leki, które osłabiają układ odpornościowy (takie jak kortykosteroidy
                                w dużych dawkach, leki immunosupresyjne lub leki przeciwnowotworowe).
                            </li>
                        </ul><br/>

                        Jak w przypadku każdej szczepionki, zaszczepienie COVID-19 Vaccine Janssen może nie zapewniać
                        pełnej ochrony wszystkim osobom, które ją otrzymają. Nie wiadomo, jak długo pacjent będzie
                        chroniony.
                    </p>
                    <h3>DZIECI I MŁODZIEŻ</h3>
                    <p>
                        Szczepionka COVID-19 Vaccine Janssen nie jest zalecana do stosowania u dzieci i młodzieży w
                        wieku poniżej 18 lat. Obecnie nie ma wystarczających danych dotyczących stosowania szczepionki
                        COVID-19 Vaccine Janssen u dzieci i młodzieży w wieku poniżej 18 lat.
                    </p>
                    <h3>COVID-19 VACCINE JANSSEN A INNE LEKI</h3>
                    <p>
                        Należy powiedzieć lekarzowi lub farmaceucie o wszystkich lekach stosowanych przez pacjenta
                        obecnie lub ostatnio, a także o lekach, które pacjent planuje stosować oraz o jakichkolwiek
                        niedawno otrzymanych lub zaplanowanych szczepieniach.
                    </p>
                    <h3>CIĄŻA I KARMIENIE PIERSIĄ</h3>
                    <p>
                        Jeśli pacjentka jest w ciąży lub karmi piersią, przypuszcza, że może być w ciąży lub gdy
                        planuje mieć dziecko, powinna poradzić się lekarza, farmaceuty lub pielęgniarki przed
                        przyjęciem tej szczepionki.
                    </p>
                    <h3>PROWADZENIE POJAZDÓW I OBSŁUGIWANIE MASZYN</h3>
                    <p>
                        Niektóre z działań niepożądanych szczepionki COVID-19 Vaccine Janssen wymienione w punkcie 4
                        (Możliwe działania niepożądane) mogą przemijająco wpływać na zdolność prowadzenia pojazdów lub
                        obsługiwania maszyn. Przed przystąpieniem do prowadzenia pojazdów lub obsługiwania maszyn
                        należy poczekać, aż te działania niepożądane ustąpią.
                    </p>
                    <h3>COVID-19 VACCINE MODERNA ZAWIERA SÓD</h3>
                    <p>
                        Ta szczepionka zawiera mniej niż 1 mmol sodu (23 mg) na dawkę 0,5 ml, czyli uznaje się ją za
                        „wolną od sodu”.
                    </p>
                    <h3>SZCZEPIONKA COVID-19 VACCINE JANSSEN ZAWIERA ETANOL</h3>
                    <p>
                        Ta szczepionka zawiera 2 mg alkoholu (etanolu) w każdej dawce 0,5 ml. Ilość etanolu w tej
                        szczepionce jest równoważna ilości zawartej w mniej niż 1 ml piwa lub wina. Niewielka ilość
                        alkoholu w tej szczepionce nie będzie miała żadnych zauważalnych skutków.
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
                        Lekarz, farmaceuta lub pielęgniarka wstrzyknie szczepionkę w mięsień - zwykle w górną część
                        ramienia.
                    </p>
                    <h3>JAKA ILOŚĆ SZCZEPIONKI ZOSTANIE PODANA</h3>
                    <p>
                        Wstrzykuje się pojedynczą dawkę (0,5 ml) szczepionki COVID-19 Vaccine Janssen.<br/>

                        Po wstrzyknięciu lekarz, farmaceuta lub pielęgniarka będzie obserwować pacjenta przez około
                        15 minut w celu wykrycia objawów reakcji alergicznej.<br/>

                        W razie jakichkolwiek dalszych wątpliwości związanych ze stosowaniem tej szczepionki należy
                        zwrócić się do lekarza, farmaceuty lub pielęgniarki.
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
                        Jak każda szczepionka, COVID-19 Vaccine Janssen może powodować działania niepożądane, chociaż
                        nie u każdego one wystąpią. Większość działań niepożądanych wystąpiła w ciągu 1 lub 2 dni po
                        otrzymaniu szczepionki.<br/><br/>

                        W razie wystąpienia objawów ciężkiej reakcji alergicznej należy niezwłocznie zwrócić się do lekarza.
                        Reakcje takie mogą obejmować połączenie któregokolwiek z poniższych objawów:
                        <ul>
                            <li>uczucie omdlenia lub oszołomienia</li>
                            <li>zaburzenia rytmu serca</li>
                            <li>duszność</li>
                            <li>świszczący oddech</li>
                            <li>obrzęk warg, twarzy lub gardła</li>
                            <li>pokrzywka albo wysypka</li>
                            <li>nudności albo wymioty</li>
                            <li>ból brzucha</li>
                        </ul><br/>
                        Po podaniu tej szczepionki mogą wystąpić następujące działania niepożądane:<br/>

                        <b>Bardzo często:</b> mogą wystąpić u więcej niż 1 na 10 osób
                        <ul>
                            <li>ból głowy</li>
                            <li>nudności</li>
                            <li>duszność</li>
                            <li>ból mięśni</li>
                            <li>ból w miejscu wstrzyknięcia</li>
                            <li>zmęczenie</li>
                        </ul><br/>

                        <b>Często:</b> mogą wystąpić u mniej niż 1 na 10 osób
                        <ul>
                            <li>zaczerwienienie w miejscu wstrzyknięcia</li>
                            <li>obrzęk w miejscu wstrzyknięcia</li>
                            <li>dreszcze</li>
                            <li>ból stawów</li>
                            <li>kaszel</li>
                            <li>gorączka</li>
                        </ul><br/>

                        <b>Niezbyt często:</b> mogą wystąpić u mniej niż 1 na 100 osób
                        <ul>
                            <li>wysypka</li>
                            <li>osłabienie mięśni</li>
                            <li>uczucie osłabienia</li>
                            <li>ogólne złe samopoczucie</li>
                            <li>kichanie</li>
                            <li>ból gardła</li>
                            <li>ból pleców </li>
                            <li>drżenie</li>
                            <li>nadmierne pocenie</li>
                        </ul><br/>

                        <b>Rzadko:</b> mogą wystąpić u mniej niż 1 na 1 000 osób
                        <ul>
                            <li>reakcja alergiczna</li>
                            <li>pokrzywka</li>
                        </ul><br/>

                        <b>Częstość nieznana:</b> (nie może być określona na podstawie dostępnych danych)
                        <ul>
                            <li>ciężka reakcja alergiczna</li>
                        </ul><br/>

                        <h3 className="info-title">ZGŁASZANIE DZIAŁAŃ NIEPOŻĄDANYCH</h3>
                        Jeśli wystąpią jakiekolwiek objawy niepożądane, w tym wszelkie objawy niepożądane niewymienione
                        w tej ulotce należy powiedzieć o tym lekarzowi, farmaceucie lub pielęgniarce. Działania niepożądane
                        można zgłaszać bezpośrednio do Departamentu Monitorowania Niepożądanych Działań Produktów
                        Leczniczych Urzędu Rejestracji Produktów Leczniczych, Wyrobów Medycznych i Produktów
                        Biobójczych<br/><br/>

                        <b>Al. Jerozolimskie 181C,<br/>
                            PL-02-222 Warszawa<br/>
                            tel.:</b> + 48 22 49 21 301, <b>faks:</b> + 48 22 49 21 309.<br/><br/>

                        <b>Strona internetowa:</b> https://smz.ezdrowie.gov.pl.<br/>
                        i dołączyć numer serii (Lot), jeśli jest dostępny.
                        Działania niepożądane można zgłaszać również podmiotowi odpowiedzialnemu.<br/><br/>

                        Dzięki zgłaszaniu działań niepożądanych można będzie zgromadzić więcej informacji na temat
                        bezpieczeństwa stosowania leku.
                    </p>
                </div>
                :
                ""}
            <p id="source-info">Źródło: Ministerstwo Zdrowia<br/>Data aktualizacji: 17.04.2021</p>
        </VaccineInfoStyles>
    );
}

export default JanssenVaccineInfo;
