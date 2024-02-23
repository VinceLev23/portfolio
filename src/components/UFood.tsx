import { Container } from "@mui/material";
import RedirectButton from "./RedirectButton";
import GitHubIcon from '@mui/icons-material/GitHub';
import Carousel from "./Carousel";
import Photo1 from '../assets/UFood/UFood1.png'
import Photo2 from '../assets/UFood/UFood2.png'
import Photo3 from '../assets/UFood/UFood3.png'
import Photo4 from '../assets/UFood/UFood4.png'
import traductions from "../components/Traductions/Traductions.json";
import React from "react";
import { Context } from "../App";

const photos = [Photo1, Photo2, Photo3, Photo4];

export default function UFood() {

    const [lang, setLang] = React.useContext(Context);
    const [textes, setTextes] = React.useState<any>({});

    React.useEffect(() => {
        setTextes(traductions[lang as keyof typeof traductions]);
    }, [lang]);

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
                        <h2>UFood</h2>
                        <p>{textes.projetsUFoodTexte}</p>
                    </Container>
                    <Container sx={{

                        '@media (max-width: 738px)': {
                            marginTop: 2
                        }
                    }}>
                        <b>{textes.projetsOutilsTitre}</b>
                        <ul>
                            <li>VueJs</li>
                            <li>Vuetify</li>
                            <li>RestAPI</li>
                            <li>Javascript</li>
                            <li>HTML/CSS</li>
                        </ul>
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
                        <h3>{textes.projetsUFoodGitHub}</h3>
                        <RedirectButton url={"https://github.com/VinceLev23/UFood_vueJS"} text={<GitHubIcon sx={{ color: "#EFE1DD" }} />} />
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