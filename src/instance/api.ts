import axios from "axios";

const api = axios.create({
    baseURL: 'https://master-er-backend.herokuapp.com/',
});

export const setAuthToken = (token : string) => {
    if (token) {
        api.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    } else {
        delete api.defaults.headers.common['Authorization'];
    }
};



export default api