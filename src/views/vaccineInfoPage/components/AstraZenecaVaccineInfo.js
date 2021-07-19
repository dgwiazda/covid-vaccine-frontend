import React, {useState} from 'react';

import VaccineInfoStyles from "./styles/VaccineInfoStyle";

function AstraZenecaVaccineInfo() {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);

    return (
        <VaccineInfoStyles>
            <div className="title-wrapper"><h1>AstraZeneca</h1></div>
            <div className="button-wrapper">
                <button onClick={() => {
                    setShow1(!show1)
                }}>
                    <h2 className="headers">Informacje przed zażyciem szczepionki</h2>
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
                        Przed przyjęciem szczepionki COVID-19 Vaccine AstraZeneca należy omówić to z lekarzem,
                        farmaceutą
                        lub pielęgniarką:
                        <ul>
                            <li>
                                jeśli u pacjenta kiedykolwiek wystąpiła ciężka reakcja alergiczna po podaniu
                                jakiejkolwiek
                                innej szczepionki lub po podaniu szczepionki COVID-19 Vaccine AstraZeneca w przeszłości
                            </li>
                            <li>
                                jeśli pacjent kiedykolwiek zemdlał po wkłuciu igły
                            </li>
                            <li>
                                jeśli obecnie pacjent przechodzi ciężkie zakażenie, któremu towarzyszy wysoka
                                temperatura
                                (powyżej 38°C). Pacjent może jednak przyjąć szczepionkę, jeśli występuje u niego
                                niewielka
                                gorączka lub zakażenie górnych dróg oddechowych, takie jak przeziębienie
                            </li>
                            <li>
                                jeśli u pacjenta występuje problem z krzepnięciem krwi lub powstawaniem siniaków lub
                                jeśli
                                pacjent przyjmuje leki rozrzedzające krew (w celu zapobiegania zakrzepom krwi)
                            </li>
                            <li>
                                jeśli układ odpornościowy pacjenta nie działa prawidłowo (niedobór odporności) lub jeśli
                                pacjent przyjmuje leki osłabiające układ odpornościowy (takie jak kortykosteroidy w
                                dużych
                                dawkach, leki immunosupresyjne lub leki przeciwnowotworowe).
                            </li>
                        </ul>
                        W przypadku braku pewności, czy któryś z powyższych punktów dotyczy pacjenta,
                        należy powiedzieć o tym lekarzowi, farmaceucie lub pielęgniarce przed przyjęciem
                        szczepionki.<br/><br/>

                        Tak, jak w przypadku każdej innej szczepionki, cykl 2 dawek szczepionki COVID-19 Vaccine
                        AstraZeneca
                        może nie zapewniać pełnej ochrony wszystkim osobom, które ją otrzymały. Nie wiadomo, jak długo
                        ochrona ta będzie się utrzymywać. Obecnie istnieją ograniczone dane dotyczące skuteczności
                        szczepionki COVID-19 Vaccine AstraZeneca u osób w wieku 55 lat i starszych.
                    </p>
                    <h3>DZIECI I MŁODZIEŻ</h3>
                    <p>
                        Szczepionka COVID-19 Vaccine AstraZeneca nie jest zalecana do stosowania u dzieci w wieku
                        poniżej
                        18 lat. Obecnie nie ma wystarczających danych dotyczących stosowania szczepionki COVID19 Vaccine
                        AstraZeneca u dzieci i młodzieży w wieku poniżej 18 lat.
                    </p>
                    <h3>SZCZEPIONKA COVID-19 VACCINE ASTRAZENECA A INNE LEKI</h3>
                    <p>
                        Należy powiedzieć lekarzowi, farmaceucie lub pielęgniarce o wszystkich lekach stosowanych przez
                        pacjenta obecnie lub ostatnio, a także o lekach, które pacjent planuje stosować oraz o
                        jakichkolwiek niedawno otrzymanych lub zaplanowanych szczepieniach.
                    </p>
                    <h3>CIĄŻA I KARMIENIE PIERSIĄ</h3>
                    <p>
                        Jeśli pacjentka jest w ciąży lub karmi piersią, przypuszcza że może być w ciąży lub gdy planuje
                        mieć dziecko, powinien poradzić się lekarza, farmaceuty lub pielęgniarki przed przyjęciem
                        tej szczepionki.
                    </p>
                    <h3>PROWADZENIE POJAZDÓW I OBSŁUGIWANIE MASZYN</h3>
                    <p>
                        Niektóre z działań niepożądanych szczepionki COVID-19 Vaccine AstraZeneca mogą tymczasowo
                        wpływać
                        na zdolność prowadzenia pojazdów lub obsługiwania maszyn. W przypadku złego samopoczucia po
                        szczepieniu nie należy prowadzić pojazdów ani obsługiwać maszyn. Należy poczekać aż działania
                        te ustąpią przed przystąpieniem do prowadzenia pojazdów lub obsługiwania maszyn.<br/><br/>

                        SZCZEPIONKA COVID-19 VACCINE ASTRAZENECA ZAWIERA SÓD I ALKOHOL (ETANOL)
                        Ta szczepionka zawiera mniej niż 1mmol sodu (23mg) na dawkę 0,5 ml, to znaczy lek uznaje się
                        za „wolny od sodu”.<br/>
                        Ta szczepionka zawiera 2 mg alkoholu (etanolu) na dawkę 0,5 ml. Niewielka ilość alkoholu
                        w tym leku nie spowoduje żadnych zauważalnych skutków.
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
                        Szczepionkę COVID-19 Vaccine AstraZeneca podaje się jako wstrzyknięcie 0,5 ml do mięśnia
                        (najczęściej górnej części ramienia).<br/>

                        W trakcie i po każdym wstrzyknięciu szczepionki lekarz, farmaceuta lub pielęgniarka będą
                        obserwować
                        pacjenta przez około 15 minut, w celu monitorowania objawów reakcji alergicznej.<br/>

                        Pacjent otrzyma 2 wstrzyknięcia szczepionki COVID-19 Vaccine AstraZeneca. Drugie wstrzyknięcie
                        można podać w okresie od 4 do 12 tygodni po pierwszym wstrzyknięciu. Pacjent zostanie
                        poinformowany,
                        kiedy musi przyjść ponownie w celu otrzymania drugiej dawki szczepionki.<br/>

                        Po podaniu jako pierwszej dawki szczepionki COVID-19 Vaccine AstraZeneca, pacjent powinien
                        otrzymać
                        jako drugą dawkę także szczepionkę COVID-19 Vaccine AstraZeneca, aby ukończyć cykl
                        szczepienia.<br/><br/>

                        <h3 className="info-title">POMINIĘCIE WIZYTY W CELU PRZYJĘCIA DRUGIEJ DAWKI SZCZEPIONKI COVID-19
                            VACCINE ASTRAZENECA</h3>
                        W przypadku pominięcia wyznaczonej wizyty w celu przyjęcia drugiej dawki należy skonsultować się
                        z
                        lekarzem, farmaceutą lub pielęgniarką. Ważne jest, aby pacjent powrócił po drugą dawkę
                        szczepionki
                        COVID-19 Vaccine AstraZeneca. W przypadku pominięcia zaplanowanej drugiej dawki, pacjent może
                        nie
                        być w pełni chroniony przed COVID-19.
                    </p>
                </div>
                :
                ""}
            <div className="button-wrapper">
                <button onClick={() => {
                    setShow3(!show3)
                }}>
                    <h2 className="headers">Sposób podawania szczepionki</h2>
                </button>
            </div>
            {show3 ?
                <div className="info-div">
                    <p>
                        Jak każdy lek, ta szczepionka może powodować działania niepożądane, chociaż nie u każdego one
                        wystąpią. W przypadku zaobserwowania jakichkolwiek działań niepożądanych niewymienionych
                        w tej ulotce, należy poinformować o nich lekarza, farmaceutę lub pielęgniarkę.<br/><br/>

                        W przypadku wystąpienia objawów ciężkiej reakcji alergicznej pacjent powinien natychmiast
                        uzyskać pomoc medyczną. Takie reakcje mogą obejmować połączenie którychkolwiek
                        z niżej wymienionych objawów:
                        <ul>
                            <li>uczucie omdlenia lub oszołomienia</li>
                            <li>zaburzenia rytmu serca</li>
                            <li>duszność</li>
                            <li>świszczący oddech</li>
                            <li>obrzęk ust, twarzy lub gardła</li>
                            <li>pokrzywka lub wysypka</li>
                            <li>nudności lub wymioty</li>
                            <li>ból brzucha.</li>
                        </ul>
                        <br/>
                        Możliwe działania niepożądane, które mogą wystąpić po podaniu szczepionki COVID-19 Vaccine
                        AstraZeneca:
                        <br/><br/>
                        <b>BARDZO CZESTO</b> (mogą wystąpić u więcej niż 1 na 10 osób)
                        <ul>
                            <li>tkliwość, ból, ciepło, swędzenie lub siniaki w miejscu wstrzyknięcia</li>
                            <li>uczucie zmęczenia (znużenia) lub ogólne złe samopoczucie</li>
                            <li>dreszcze lub uczucie gorączki</li>
                            <li>ból głowy</li>
                            <li>mdłości (nudności)</li>
                            <li>ból stawów lub ból mięśni</li>
                        </ul>
                        <br/>
                        <b>CZĘSTO</b> (mogą wystąpić u maksymalnie 1 na 10 osób)
                        <ul>
                            <li>obrzęk lub zaczerwienienie w miejscu wstrzyknięcia</li>
                            <li>gorączka (>38°C)</li>
                            <li>wymioty lub biegunka</li>
                        </ul>
                        <br/>
                        <b>NIEZBYT CZĘSTO</b> (mogą wystąpić u maksymalnie 1 na 100 osób)
                        <ul>
                            <li>senność lub zawroty głowy</li>
                            <li>zmniejszony apetyt</li>
                            <li>powiększone węzły chłonne</li>
                            <li>nadmierne pocenie się, swędzenie skóry lub wysypka</li>
                        </ul>
                    </p>
                    <h3>ZGŁASZANIE DZIAŁAŃ NIEPOŻĄDANYCH</h3>
                    <p>
                        Jeśli wystąpią jakiekolwiek objawy niepożądane, w tym wszelkie objawy niepożądane niewymienione
                        w tej ulotce należy powiedzieć o tym lekarzowi, farmaceucie lub pielęgniarce.<br/>
                        Działania niepożądane można zgłaszać bezpośrednio do:<br/>
                        Polska, Departament Monitorowania Niepożądanych Działań Produktów Leczniczych Urzędu Rejestracji
                        Produktów Leczniczych, Wyrobów Medycznych i Produktów Biobójczych<br/>
                        <b>Al. Jerozolimskie 181C<br/>
                            PL-02 222 Warszawa<br/>
                            Tel.:</b> + 48 22 49 21 301<br/>
                        <b>Faks:</b> + 48 22 49 21 309<br/><br/>

                        <b>Strona internetowa:</b> https://smz.ezdrowie.gov.pl<br/><br/>

                        Dzięki zgłaszaniu działań niepożądanych można będzie zgromadzić więcej informacji na temat
                        bezpieczeństwa stosowania leku.
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

export default AstraZenecaVaccineInfo;
