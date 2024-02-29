import { Container } from "@mui/material";
import RedirectButton from "./RedirectButton";
import traductions from "../components/Traductions/Traductions.json";
import React from "react";
import { Context } from "../App";


export default function DesignWeb() {

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
                        <h2>{textes.projetsDesignTitre}</h2>
                    </Container>
                    <Container sx={{

                        '@media (max-width: 738px)': {
                            marginTop: 2
                        }
                    }}>
                        <b>{textes.projetsOutilsTitre}</b>
                        <ul>
                            <li>Wix</li>
                            <li>Rubberduck</li>
                            <li>Canva</li>
                            <li>Photoshop</li>
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
                        <h3>Magasin général Le Brun</h3>
                        <RedirectButton url={"https://www.magasingenerallebrun.com/fr"} text={textes.projetsBoutonSite} />
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
                        <h3>Construction JSM</h3>
                        <RedirectButton url={"https://www.constructionsjsm.ca/"} text={textes.projetsBoutonSite} ></RedirectButton>
                    </Container>
                </Container>
            </Container>
        </>
    )
};