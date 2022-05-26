import { toast } from 'react-toastify';
import { CardHandleVoteWebService } from "../WebService/CardWebService";

export const HandleVote = async (id, ip) => {
    console.log(id, ip);
    let toastLoading;
    try {
        toastLoading = toast.loading('Votando...')
        await CardHandleVoteWebService(id, ip);
        setTimeout(() => {
            return toast.update(toastLoading, {
                type: "success",
                render: 'Voto registrado',
                isLoading: false,
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,

            });
        }, 1000);
    } catch (error) {
        setTimeout(() => {
            return toast.update(toastLoading, {
                type: "error",
                render: 'Error al registrar el voto',
                isLoading: false,
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,

            });
        }, 1000);
    }
}