import { Container } from "@mui/material";
import { motion } from "framer-motion";
import RedirectButton from "../components/RedirectButton";
import { Bloodtype } from "@mui/icons-material";


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
                    marginTop: 5,
                    border: 2,
                    backgroundColor: "#EFE1DD",
                }}
                >
                    <h1>Mes Projets</h1>
                </Container>

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
                            <h2>Design Web</h2>
                        </Container>
                        <Container sx={{

                            '@media (max-width: 738px)': {
                                marginTop: 2
                            }
                        }}>
                            <b>Outils utilisés</b>
                            <ul>
                                <li>Wix</li>
                                <li>Rubberduck</li>
                                <li>Canva</li>
                                <li>Photoshop</li>
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
                            <RedirectButton url={"https://www.magasingenerallebrun.com/fr"} text={"Voir le site"} />
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
                            <RedirectButton url={"https://www.constructionsjsm.ca/"} text={"Voir le site"} ></RedirectButton>
                        </Container>
                    </Container>
                </Container>

            </motion.div>
        </>
    )
}