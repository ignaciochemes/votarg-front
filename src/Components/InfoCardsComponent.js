import { HowToVote } from "@mui/icons-material"
import { Card, CardContent, Fade, Grid, Skeleton, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect, useState } from "react"
import { InfoCardHandleCountTotalVotes } from "../WebService/InfoCardWebService"

export const InfoCardsComponent = () => {
    const [loading, setLoading] = useState(true);
    const [votes, setVotes] = useState(0);

    const fetchTotalVotes = async () => {
        const response = await InfoCardHandleCountTotalVotes();
        if (response.result.totalVotes == null) return setVotes(0);
        const votesToNumber = parseInt(response.result.totalVotes);
        const votesToNumberWithDots = votesToNumber.toLocaleString('pt-BR');
        setVotes(votesToNumberWithDots);
    }

    useEffect(() => {
        fetchTotalVotes();
        setTimeout(() => {
            setLoading(false);
        }, 1800)
    }, [])

    return (
        <Grid container spacing={3} style={{
            marginTop: "1rem",
            justifyContent: "center",
        }}>
            <Grid item xs={12} sm={6} md={4}>
                <Card style={{
                    backgroundColor: "#f5f5f5",
                }}>
                    <Fade in={true}>
                        <CardContent>
                            {loading ? (
                                <>
                                    <Skeleton variant="text" />
                                    <Skeleton variant="rectangule" height={25} />
                                </>
                            ) : (
                                <>
                                    <Box display="flex" mb={0}>
                                        <Fade in={true} timeout={1000}>
                                            <Typography variant="h5" component="h2"
                                                style={{
                                                    fontSize: "1.4rem",
                                                    marginTop: "0.5rem",
                                                }}>
                                                Votos registrados: {votes}
                                            </Typography>
                                        </Fade>
                                        <HowToVote style={{
                                            marginLeft: "auto",
                                            marginRight: "1rem",
                                            color: "#00b0ff",
                                            marginTop: "0.5rem",
                                        }} />
                                    </Box>
                                </>
                            )}
                        </CardContent>
                    </Fade>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card style={{
                    backgroundColor: "#f5f5f5",
                }}>
                    <Fade in={true}>
                        <CardContent>
                            {loading ? (
                                <>
                                    <Skeleton variant="text" />
                                    <Skeleton variant="rectangule" height={25} />
                                </>
                            ) : (
                                <>
                                    <Box display="flex" mb={0}>
                                        <Fade in={true} timeout={1000}>
                                            <Typography variant="h5" component="h2"
                                                style={{
                                                    fontSize: "1.4rem",
                                                    marginTop: "0.5rem",
                                                }}>
                                                Votos registrados: {votes}
                                            </Typography>
                                        </Fade>
                                        <HowToVote style={{
                                            marginLeft: "auto",
                                            marginRight: "1rem",
                                            color: "#00b0ff",
                                            marginTop: "0.5rem",
                                        }} />
                                    </Box>
                                </>
                            )}
                        </CardContent>
                    </Fade>
                </Card>
            </Grid>
        </Grid>
    )
}