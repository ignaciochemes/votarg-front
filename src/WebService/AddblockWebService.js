import axios from "axios";

export const AddblockWebService = async () => {
    const response = await axios.get(`${process.env.REACT_APP_CLIENT_IP}`);
    return response.data;
}