import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

export default function AvisoLegalCard() {
    const [legalAdvice, setLegalAdvice] = useState(false);

    return (
        <>
            {legalAdvice ? (
                <Card sx={{ minWidth: 275 }} style={{
                    marginTop: "1rem",
                    backgroundColor: "#f5f5f5",
                }}>
                    <CardContent>
                        <Typography variant="h5" component="h2" style={{
                            fontWeight: "bold",
                            fontSize: "1.5rem",
                            color: "#000",
                            textAlign: "center",
                            marginBottom: "1rem",
                        }}>
                            Leer
                        </Typography>
                        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                            Este proyecto es sin fines de lucro y no tiene objetivos comerciales, no tiene
                            ningun tipo de intencion de recolectar estadisticas, ni tiene ningun tipo de
                            intencion de obtener datos que vulneren la privacidad de datos personales.
                            El objetivo es mostrar una forma de participación ciudadana, que permita a los
                            ciudadanos simular su voto para las elecciones 2023 de los partidos politicos
                            a la presidencia de la República.
                            No hay ninguna asociacion, sociedad, fundacion o entidad detras del proyecto.
                            La informacion recolectada sera de publico dominio y no sera utilizada para
                            ningun otro fin.
                            El proyecto no guarda ninguna informacion personal y no tiene ningún tipo de
                            relación con los candidatos. El proyecto es una iniciativa de ciudadanos,
                            independiente de cualquier partido político.
                            Mediante el uso de esta aplicación, los ciudadanos podrán votar por los partidos politicos
                            que deseen. El voto es anónimo y no se registra ningún dato del mismo.
                            Es unico y no se puede revertir, por lo que, si desea votar por un candidato,
                            tenga en cuenta que no puede votar por más de uno.
                        </Typography>
                        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                            Los desarrolladores de esta aplicación no se hacen responsables del mal uso del
                            codigo fuente o de la informacion recolectada.
                        </Typography>
                        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                            Se encuentra a disposición de los ciudadanos para cualquier duda el codigo fuente
                            del proyecto haciendo click en el siguiente boton.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            variant='contained'
                            size="small"
                            href='https://github.com/siegmund0/votarg-front'
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                backgroundColor: "#f5f5f5",
                                color: "#000",
                                fontSize: "0.9rem",
                                fontWeight: "bold",
                                textTransform: "none",
                                borderRadius: "0.2",
                                border: "1px solid #000",
                                "&:hover": {
                                    backgroundColor: "#000",
                                    color: "#f5f5f5",
                                },
                                mx: "auto",
                                mb: "auto",
                            }}
                        >Frontend Votarg - GitHub</Button>
                        <Button
                            variant='contained'
                            size="small"
                            href='https://github.com/siegmund0/votarg-backend'
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                backgroundColor: "#f5f5f5",
                                color: "#000",
                                fontSize: "0.9rem",
                                fontWeight: "bold",
                                textTransform: "none",
                                borderRadius: "0.2",
                                border: "1px solid #000",
                                "&:hover": {
                                    backgroundColor: "#000",
                                    color: "#f5f5f5",
                                },
                                mx: "auto",
                                mb: "auto",
                            }}
                        >Backend Votarg - GitHub</Button>
                    </CardActions>
                    <CardContent>
                        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                            Si usted esta de acuerdo con lo mencionado, puede continuar con el proceso de voto.
                            Si no esta de acuerdo, por favor, no vote.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button
                            variant='contained'
                            size="small"
                            onClick={() => setLegalAdvice(false)}
                            sx={{
                                backgroundColor: "#000",
                                color: "#f5f5f5",
                                fontSize: "0.9rem",
                                fontWeight: "bold",
                                textTransform: "none",
                                borderRadius: "0.2",
                                border: "1px solid #f5f5f5",
                                "&:hover": {
                                    backgroundColor: "#f5f5f5",
                                    color: "#000",
                                },
                                mx: "auto",
                                mb: "auto",
                            }}
                        >CONTINUAR</Button>
                    </CardActions>
                </Card>
            ) : (
                <Card sx={{ minWidth: 275 }} style={{
                    marginTop: "1rem",
                    backgroundColor: "#f5f5f5",
                }}>
                    <CardActions>
                        <Button
                            variant='contained'
                            size="small"
                            onClick={() => setLegalAdvice(true)}
                            sx={{
                                backgroundColor: "#f5f5f5",
                                color: "#000",
                                fontSize: "0.9rem",
                                fontWeight: "bold",
                                textTransform: "none",
                                borderRadius: "0.2",
                                border: "1px solid #000",
                                "&:hover": {
                                    backgroundColor: "#000",
                                    color: "#f5f5f5",
                                },
                                mx: "auto",
                                mb: "auto",
                            }}
                        >VER AVISO DE RESPONSABILIDAD</Button>
                    </CardActions>
                </Card>
            )}
        </>
    );
}