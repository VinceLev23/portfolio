import { Container } from "@mui/material";
import MyPhoto from "../assets/Profile.jpg"
import CV from "../Pages/CV";
import PDF_URL from "../assets/CV Vincent Léveillé.pdf"


export default function MediaTexte() {


    const myText = <div>
        <h3>Réinventer le Web, Ligne par Ligne</h3>
        <div>
            Développeur Web Front-End passionné, avide de résoudre des énigmes
            numériques et de repousser les limites de la créativité.
            Je m'immerge dans les défis du développement pour mieux les dompter,
            et chaque obstacle est une opportunité d'apprentissage. Car pour moi,
            le développement web est bien plus qu'une simple compétence technique :
            c'est une passion qui alimente ma soif de connaissance et d'innovation.
            Prêt à explorer de nouveaux horizons et à transformer des idées en
            réalité digitale, je suis ici pour façonner l'avenir du web, une ligne
            de code à la fois.
        </div>
    </div>

    return (
        <>
            <Container sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: 5,
                border: 2,
                backgroundColor: "#EFE1DD"
            }}
            >
                <h1>Développeur Front-End</h1>
            </Container>
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
                    {myText}
                    <CV pdfUrl={PDF_URL} />
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
                    <img
                        src={MyPhoto}
                        style={{
                            width: "75%",
                            height: "auto",
                            borderRadius: "30%",
                        }} />
                </Container>
            </Container>
        </>
    )
}