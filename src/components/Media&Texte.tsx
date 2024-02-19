import { Container } from "@mui/material";
import MyPhoto from "../assets/Profile.jpg"
import CV from "../Pages/CV";
import PDF_URL from "../assets/CV Vincent Léveillé.pdf"


export default function MediaTexte() {

    const image = <img
        src={MyPhoto}
        style={{
            width: 325,
            height: 350,
            borderRadius: 55,
        }} />

    const myText = <div>
        <h3>Réinventer le Web, Ligne par Ligne</h3>
        <div>
            Développeur Web Front-End passionné, avide de résoudre des énigmes
            numériques et de repousser les limites de la créativité.
            Chaque ligne de code est une toile vierge sur laquelle je peins
            des expériences utilisateur uniques et des interfaces engageantes.
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
                <h1>Front End Developper</h1>
            </Container>
            <Container sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignContent: "center",
                width: "100%",
                marginTop: 5,
                backgroundColor: "#EFE1DD"
            }}>
                <Container
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: "10%",
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
                        marginRight: "10%",
                        padding: 2,

                    }}>
                    {image}
                </Container>
            </Container>
        </>
    )
}