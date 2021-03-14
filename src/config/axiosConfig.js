import axios from 'axios';

// Instance
const instance = axios.create();

// Config
instance.defaults.baseURL = process.env.REACT_APP_HOMEWORK_HELP_API_AWS;
instance.defaults.headers.post['Content-Type'] = 'application/json';


// Interceptors

instance.interceptors.request.use(request => {
    console.log("HACIENDO REQUEST");
    // Edit request config
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

instance.interceptors.response.use(response => {
    console.log("LLEGANDO RESPUESTA");
    console.info("Interceptor resp: ", response);

    if(response.data.token) {
        instance.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
        console.log("SE SETTEO TOKEN EN CABECERA AXIOS");
    }

    // Edit response config
    return response;
}, error => {
    // console.log(error);
    return Promise.reject(error);
});

export default instance;