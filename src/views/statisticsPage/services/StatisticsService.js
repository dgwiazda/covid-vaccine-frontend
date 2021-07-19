import axios from "axios"

const statisticsUrl = "http://localhost:8080/api/statistics";
const vaccinesUrl = statisticsUrl + "/vaccines/";
const infectionsUrl = statisticsUrl + "/infections/";
const nopUrl = statisticsUrl + "/nop/";
const dateUrl = statisticsUrl + "/update-date";

class StatisticsService {

    getPredictedInfections(province) {
        return axios.get(statisticsUrl + "/prediction/" + province);
    }

    getInfectionsByProvince(province, deaths) {
        return axios.get(infectionsUrl + "count/province/" + province + "/deaths/" + deaths);
    }

    getNopCount() {
        return axios.get(nopUrl + "count");
    }

    getNopCountBySex() {
        return axios.get(nopUrl + "count/group-by/sex");
    }

    getChoosenNopCountBySex(nop, sex) {
        return axios.get(nopUrl + "count/nop/" + nop + "/sex/" + sex);
    }

    getUpdateDateTime() {
        return axios.get(dateUrl);
    }
    getVaccinesCountByprovince(province) {
        return axios.get(vaccinesUrl + "count/" + province);
    }

    getVaccinesCount() {
        return axios.get(vaccinesUrl);
    }
}

export default new StatisticsService();
