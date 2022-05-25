import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia, Skeleton } from '@mui/material';
import { HandleVote } from '../Services/HandleVoteService';
import { useEffect, useState } from 'react';
import { Box } from '@mui/system';

export default function CardComponent({ id, title, votos, logo }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1800);
    })

    return (
        <Card style={{
            backgroundColor: "#fff",
            boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.2)",
        }}>
            {loading ? (
                <>
                    <Skeleton variant="rectangule" style={{
                        height: 0,
                        paddingTop: '56.25%'
                    }} />
                    <Skeleton variant="text" height={50} style={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: '0.6rem',
                        marginBottom: "auto",
                        width: '85%',
                    }} />
                    <Skeleton variant="text" height={15} style={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        width: '85%',
                    }} />
                    <Skeleton variant="text" height={15} style={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        width: '85%',
                    }} />
                    <Box display="flex" mb={0}>
                        <Skeleton variant="text" height={70} style={{
                            marginLeft: "1rem",
                            marginRight: "auto",
                            marginBottom: "0.1rem",
                            marginTop: "auto",
                            width: "45%",
                        }} />
                        <Skeleton variant="text" height={70} style={{
                            marginLeft: 'auto',
                            marginRight: '1rem',
                            marginBottom: "0.1rem",
                            marginTop: "auto",
                            width: '20%',
                        }} />
                    </Box>
                </>
            ) : (
                <>
                    <CardMedia
                        style={{
                            height: 0,
                            paddingTop: '56.25%',
                        }}
                        image={logo}
                        title={title}
                    />
                    <CardContent>
                        <Typography variant="h5" component="h2" style={{
                            textAlign: "center",
                        }}>
                            {title}
                        </Typography>
                        <Typography variant="body2" component="p" style={{
                            marginTop: "1rem",
                        }}>
                            esto es un texto de prueba
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            variant='contained'
                            size="small"
                            sx={{
                                backgroundColor: "#000",
                                color: "#f5f5f5",
                                fontSize: "1rem",
                                fontWeight: "bold",
                                textTransform: "none",
                                borderRadius: "0.2",
                                border: "1px solid #f5f5f5",
                                "&:hover": {
                                    backgroundColor: "#f5f5f5",
                                    color: "#000",
                                },
                            }}
                            onClick={() => HandleVote(id)}
                        >VOTAR</Button>
                        <Typography variant="body2" component="p" style={{
                            marginLeft: "auto",
                            marginRight: "1rem",
                        }}>
                            Votos: {votos}
                        </Typography>
                    </CardActions>
                </>
            )}
        </Card>
    );
}