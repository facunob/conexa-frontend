import axios from 'axios';

const apiUrl = 'https://conexa-backend.onrender.com/api';

const getPlanets = (page: number) => {
    return axios.get(`${apiUrl}/planets/?page=${page}`);
}

export default {
    getPlanets,
}