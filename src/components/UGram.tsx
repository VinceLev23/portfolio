import { Container } from "@mui/material"
import Carousel from "./Carousel"
import Photo1 from '../assets/UGram/UGram1.png';
import Photo2 from '../assets/UGram/Ugram2.png';
import Photo3 from '../assets/UGram/UGram3.png';
import Photo4 from '../assets/UGram/Ugram4.png';

const photos = [Photo1, Photo2, Photo3, Photo4]

export default function UGram() {

    return (
        <>
            <Container sx={{
                display: "flex",
                flexDirection: "row",
                marginTop: 5,
                backgroundColor: "#EFE1DD",
                '@media (max-width: 738px)': {
                    flexDirection: "column"
                }

            }}>
                <Container sx={{
                    borderRight: 1,
                    flexBasis: "60%",
                    display: "flex",
                    flexDirection: "column",
                    '@media (max-width: 738px)': {
                        border: "none",
                        flexDirection: "row"
                    }
                }}>
                    <Container >
                        <h2>UGram</h2>
                        <p>Application similaire à Instagram, développer dans le cadre d'un cours à l'université <b>(EN COURS)</b></p>
                    </Container>
                    <Container sx={{

                        '@media (max-width: 738px)': {
                            marginTop: 2
                        }
                    }}>
                        <b>Outils utilisés</b>
                        <Container sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-start",
                        }}>
                            <ul>
                                <li>React</li>
                                <li>MUI</li>
                                <li>Typescript</li>
                                <li>NodeJS</li>
                                <li>PostgreSQL</li>
                            </ul>
                            <ul>
                                <li>HTML/CSS</li>
                                <li>AWS</li>
                                <li>Docker</li>

                            </ul>

                        </Container>
                    </Container>
                </Container>
                <Container sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",

                }}>
                    <Container sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",

                        '@media (max-width: 428px)': {
                            flexDirection: "column"
                        }
                    }}>
                        <h3>Pour éviter le plagiat, le code de ce projet ne peut être partager pour le moment</h3>
                    </Container>
                    <Container sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        '@media (max-width: 428px)': {
                            flexDirection: "column",
                            marginBottom: 2
                        }
                    }}>
                        <Carousel photos={photos} />
                    </Container>
                </Container>
            </Container>
        </>
    )
}