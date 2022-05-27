import { toast } from "react-toastify";
import { AddblockWebService } from "../WebService/AddblockWebService";

export const AddblockService = async () => {
    try {
        await AddblockWebService();
    } catch (error) {
        return toast.error('Desactive el adblock', {
            position: "top-center",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }

}