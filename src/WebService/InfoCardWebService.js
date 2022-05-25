import axios from "axios"

export const InfoCardHandleCountTotalVotes = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URI}/votes`);
    return response.data;
}