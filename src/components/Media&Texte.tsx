import { Container } from "@mui/material";
import MyPhoto from "../assets/ProfilePic.png"
import CV from "../Pages/CV";
import React from "react";
import { Context } from "../App";
import traductions from "../components/Traductions/Traductions.json";
import PDF_URL_FR from "../assets/CV_portfolio_fr.pdf"
import PDF_URL_EN from "../assets/CV_portfolio_en.pdf"


export default function MediaTexte() {

    const [lang, setLang] = React.useContext(Context);
    const [textes, setTextes] = React.useState<any>({});

    React.useEffect(() => {
        setTextes(traductions[lang as keyof typeof traductions]);
    }, [lang]);
    const myImage = <img
        src={MyPhoto}
        style={{
            width: "75%",
            height: "auto",
            borderRadius: "25%",
        }} />


    const pdfUrl = lang === "fr" ? PDF_URL_FR : PDF_URL_EN;

    return (
        <>
            <Container sx={{
                display: "flex",
                flexDirection: "column-reverse",
                justifyContent: "center",
                alignContent: "center",
                marginTop: 5,
                backgroundColor: "#EFE1DD",
                '@media (min-width: 900px)': {
                    flexDirection: 'row',
                },
            }}>
                <Container
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingBottom: 5
                    }}
                >
                    <h1>{textes.homeTextTitle}</h1>
                    <div>{textes.homeText}</div>
                    <CV pdfUrl={pdfUrl} />
                </Container>

                <Container
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 2,
                        '@media (max-width: 900px)': {
                            width: "75%",
                        },
                    }}>
                    {myImage}
                </Container>
            </Container>

        </>
    )
}