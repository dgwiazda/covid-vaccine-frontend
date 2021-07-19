import React from "react";

function SelectProvince(props) {
    const provinces = [
        "Cały kraj", "dolnośląskie", "kujawsko-pomorskie", "lubelskie",
        "lubuskie", "łódzkie", "małopolskie", "mazowieckie", "opolskie",
        "podkarpackie", "podlaskie", "pomorskie", "śląskie", "świętokrzyskie",
        "warmińsko-mazurskie", "wielkopolskie", "zachodniopomorskie"
    ];
    return (
        <div>
            <select id="lang" onChange={props.changeFunction}>
                <option>{provinces[0]}</option>
                <option>{provinces[1]}</option>
                <option>{provinces[2]}</option>
                <option>{provinces[3]}</option>
                <option>{provinces[4]}</option>
                <option>{provinces[5]}</option>
                <option>{provinces[6]}</option>
                <option>{provinces[7]}</option>
                <option>{provinces[8]}</option>
                <option>{provinces[9]}</option>
                <option>{provinces[10]}</option>
                <option>{provinces[11]}</option>
                <option>{provinces[12]}</option>
                <option>{provinces[13]}</option>
                <option>{provinces[14]}</option>
                <option>{provinces[15]}</option>
                <option>{provinces[16]}</option>
            </select>
        </div>
    )
}

export default SelectProvince;