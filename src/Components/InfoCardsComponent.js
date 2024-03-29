import { HowToVote } from "@mui/icons-material";
import {
    Button,
    Card,
    CardContent,
    Fade,
    Grid,
    Skeleton,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { InfoCardHandleCountTotalVotes } from "../WebService/InfoCardWebService";
import ServerStatusComponent from "./ServerStatusComponent";

export const InfoCardsComponent = () => {
    const [loading, setLoading] = useState(true);
    const [votes, setVotes] = useState(0);

    const fetchTotalVotes = async () => {
        const response = await InfoCardHandleCountTotalVotes();
        if (response.result.totalVotes == null) return setVotes(0);
        const votesToNumber = parseInt(response.result.totalVotes);
        const votesToNumberWithDots = votesToNumber.toLocaleString("pt-BR");
        setVotes(votesToNumberWithDots);
    };

    useEffect(() => {
        fetchTotalVotes();
        setTimeout(() => {
            setLoading(false);
        }, 1800);
    }, []);

    return (
        <Grid
            container
            spacing={3}
            style={{
                marginTop: "1rem",
                paddingRight: "1rem",
                paddingLeft: "1rem",
                justifyContent: "center",
            }}
        >
            <Grid item xs={12} sm={8} md={6}>
                <Card
                    style={{
                        backgroundColor: "#fff",
                        borderRadius: "0.3rem",
                        boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.2)",
                    }}
                >
                    <Fade in={true}>
                        <CardContent>
                            {loading ? (
                                <>
                                    <Skeleton variant="text" />
                                    <Skeleton
                                        variant="rectangule"
                                        height={25}
                                    />
                                </>
                            ) : (
                                <>
                                    <Box display="flex">
                                        <Fade in={true} timeout={1000}>
                                            <Typography
                                                variant="h5"
                                                component="h2"
                                                style={{
                                                    fontSize: "1.4rem",
                                                    marginTop: "0.75rem",
                                                }}
                                            >
                                                Votos registrados: {votes}
                                            </Typography>
                                        </Fade>
                                        <HowToVote
                                            style={{
                                                marginLeft: "auto",
                                                marginRight: "1rem",
                                                color: "#00b0ff",
                                                marginTop: "0.75rem",
                                            }}
                                        />
                                    </Box>
                                </>
                            )}
                        </CardContent>
                    </Fade>
                </Card>
            </Grid>
            <Grid item xs={12} sm={8} md={6}>
                <Card
                    style={{
                        height: "100%",
                        backgroundColor: "#fff",
                        borderRadius: "0.3rem",
                        boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.2)",
                    }}
                >
                    <Fade in={true}>
                        <CardContent
                            style={{
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            {loading ? (
                                <>
                                    <Skeleton variant="text" />
                                    <Skeleton
                                        variant="rectangule"
                                        height={25}
                                    />
                                </>
                            ) : (
                                <>
                                    <Box display="flex" mb={0}>
                                        <Fade in={true} timeout={1000}>
                                            <Typography
                                                variant="h5"
                                                component="h2"
                                                style={{
                                                    fontSize: "1rem",
                                                    fontFamily: "monospace",
                                                    marginTop: "0.3rem",
                                                }}
                                            >
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    style={{
                                                        marginRight: "1rem",
                                                    }}
                                                    href="https://status.tech-matte.tk/status/votarg"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    STATUS
                                                </Button>
                                                BACKEND | API | DB
                                            </Typography>
                                        </Fade>
                                        <div
                                            style={{
                                                marginLeft: "auto",
                                                marginTop: "0.4rem",
                                                display: "flex",
                                            }}
                                        >
                                            <ServerStatusComponent />
                                        </div>
                                    </Box>
                                </>
                            )}
                        </CardContent>
                    </Fade>
                </Card>
            </Grid>
        </Grid>
    );
};
