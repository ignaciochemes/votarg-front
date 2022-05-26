const axios = require('axios');

export const CardWebService = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URI}/partidos`);
    return response.data;
}

export const CardHandleVoteWebService = async (idPartido) => {
    const remoteIp = await axios.get(`${process.env.REACT_APP_CLIENT_IP}`);
    const response = await axios.post(`${process.env.REACT_APP_BACKEND_URI}/partidos/${idPartido}/votar`, { ip: remoteIp.data.IPv4 });
    return response.data;
}