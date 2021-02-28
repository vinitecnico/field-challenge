import axios from 'axios';
const baseURL = 'http://api.citybik.es/v2'

const getNetworks = async () => {
    return axios.get(`${baseURL}/networks`);
}

const getStations = async (id) => {
    return axios.get(`${baseURL}/networks/${id}`);
}

export {
    getNetworks,
    getStations
}