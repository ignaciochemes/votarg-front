import { CircularProgress, Grid, Grow } from "@mui/material";
import { useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import { CardWebService } from "../WebService/CardWebService";
import AvisoLegalCard from "./AvisoLegal";
import CardComponent from "./CardComponent";
import { InfoCardsComponent } from "./InfoCardsComponent";
import { ChartComponent } from "./ChartComponent";
import { AddblockService } from "../Services/AddblockService";

export default function MainGrid() {
    const [loading, setLoading] = useState(true);
    const [cards, setCards] = useState([]);

    const fetchCardContent = async () => {
        const response = await CardWebService();
        const shuffledCards = response.result.sort(() => 0.5 - Math.random());
        setCards(shuffledCards);
    }

    useEffect(() => {
        const loadingFetch = async () => {
            await AddblockService();
            await fetchCardContent();
            setLoading(false);
        }
        loadingFetch();
    }, []);

    return (
        <div>
            <AvisoLegalCard />
            <InfoCardsComponent />
            <Grid container spacing={2} style={{
                marginTop: "1rem",
                paddingRight: "1rem",
                paddingLeft: "1rem",

            }}>
                {cards.map(card => (
                    <Grow in={true} timeout={500}>
                        <Grid item xs={12} sm={6} md={3} key={card.id}>
                            <CardComponent
                                id={card.id}
                                title={card.name}
                                votos={card.votos}
                                logo={card.logo}
                            />
                        </Grid>
                    </Grow>
                ))}
            </Grid>
            {loading ? (
                <Grid container spacing={3} style={{
                    marginTop: "5rem",
                    justifyContent: "center",
                }}>
                    <CircularProgress />
                </Grid>
            ) : (
                <Grid container spacing={3} style={{
                    marginTop: "1rem",
                    paddingRight: "1rem",
                    paddingLeft: "1rem",
                }}>
                    <Grid item xs={12} sm={5} md={6}>
                        <ChartComponent />
                    </Grid>
                    <Grid item xs={12} sm={5} md={6}>
                        <ChartComponent />
                    </Grid>
                </Grid>
            )}
            <ToastContainer />
        </div >
    )
}