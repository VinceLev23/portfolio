import { Button, Container } from "@mui/material";
import { motion } from "framer-motion";
import NavBarButton from "../components/NavBarButton";
import RedirectButton from "../components/RedirectButton";


export default function Projets() {
    return (
        <>
            <motion.div
                exit={{ opacity: 0, y: 21 }}
                initial={{ opacity: 0, y: 21 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <Container sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    marginTop: 5,
                    border: 2,
                    backgroundColor: "#EFE1DD"
                }}
                >
                    <h1>Mes Projets</h1>
                </Container>

                <Container sx={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 5,
                    backgroundColor: "#EFE1DD"
                }}>
                    <Container sx={{
                        borderRight: 1,
                        width: "40%"
                    }}>
                        <h2>Design Web</h2>
                        <h5>Outils utilisés</h5>
                        <ul>
                            <li>Wix</li>
                            <li>Rubberduck</li>
                            <li>Canva</li>
                            <li>Photoshop</li>
                        </ul>
                    </Container>
                    <Container sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignContent: "center",
                    }}>
                        <Container sx={{
                            padding: 2,
                            display: "flex",
                            flexDirection: "row",
                        }}>
                            <h3 >Magasin général Le Brun</h3>
                            <RedirectButton url={"https://www.magasingenerallebrun.com/fr"} text={"Voir le site"} />
                        </Container>
                        <Container sx={{
                            padding: 2,
                            display: "flex",
                            flexDirection: "row",

                        }}>
                            <h3>Construction JSM</h3>
                            <RedirectButton url={"https://www.constructionsjsm.ca/"} text={"Voir le site"} ></RedirectButton>
                        </Container>
                    </Container>
                </Container>

            </motion.div>
        </>
    )
}