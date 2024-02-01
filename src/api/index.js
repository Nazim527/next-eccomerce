import axios from 'axios';

export const instance = axios.create({
    baseURL: "http://64.226.66.94/",
    headers: {
        "Content-Type": "application/json"
    }
})