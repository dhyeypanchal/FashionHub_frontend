import axios from 'axios';

const instance = axios.create({
    baseURL: "https://fashionhub-backend.onrender.com"
});

export default instance;