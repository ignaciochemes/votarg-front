const axios = require('axios');

export const CardWebService = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URI}/partidos`);
    return response.data;
}

export const CardHandleVoteWebService = async (idPartido) => {
    const requestIp = await axios.get(`${process.env.REACT_APP_CLIENT_IP}`);
    const body = {
        ip: requestIp.data.IPv4,
    }
    const response = await axios.post(`${process.env.REACT_APP_BACKEND_URI}/partidos/${idPartido}/votar`, body);
    return response.data;
}