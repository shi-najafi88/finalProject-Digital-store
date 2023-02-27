import axios from "axios";

export const baseURL = '';

export const instance = axios.create({
    baseURL,
    timeout:80000,
});
