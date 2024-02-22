import { Container } from "@mui/material";
import RedirectButton from "./RedirectButton";
import SocialMediaButton from "./SocialMediaButton";
import GitHubIcon from '@mui/icons-material/GitHub';
import Carousel from "./Carousel";
import Photo1 from '../assets/UFood/UFood1.png'
import Photo2 from '../assets/UFood/UFood2.png'
import Photo3 from '../assets/UFood/UFood3.png'
import Photo4 from '../assets/UFood/UFood4.png'


const photos = [Photo1, Photo2, Photo3, Photo4];

export default function UFood() {
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
                    </Container>
                    <Container sx={{

                        '@media (max-width: 738px)': {
                            marginTop: 2
                        }
                    }}>
                        <b>Outils utilisés</b>
                        <ul>
                            <li>VueJs</li>
                            <li>Vuetify</li>
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
                        <h3>Voir le projet sur Github</h3>
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