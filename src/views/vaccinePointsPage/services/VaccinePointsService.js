import axios from "axios"

const vaccinePointsUrl = "http://localhost:8080/api/vaccine-points/";

class VaccinePointsService {

    getVaccinePointsCountByTown(town) {
        return axios.get(vaccinePointsUrl + "/town/count/" + town);
    }

    getVaccinePointsByTown(town) {
        return axios.get(vaccinePointsUrl + "/town/" + town);
    }

    getAll() {
        return axios.get(vaccinePointsUrl);
    }
}

export default new VaccinePointsService();
