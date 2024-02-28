import { Button, Container, Typography } from "@mui/material"
import UpTransition from "../components/animation/UpTransition";
import RedirectButton from "../components/RedirectButton";
import Header from "../components/Header";
import SocialMediaButton from "../components/SocialMediaButton";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { ArrowForward } from "@mui/icons-material";

const email = "vincent.leveille.1@ulaval.ca"

const styleDeBoite = {
    display: "flex",
    flexdirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "auto",
    minHeight: 50,

}

const styleDesTitres = {
    display: "flex",
    justifyContent: "space-evenly",
    '@media (max-width: 428px)': {
        display: "flex",
        justifyContent: "flex-start",
    }

}

export default function Contact() {


    return (
        <>
            <UpTransition>
                <Header title="Contact" />

                <Container sx={{ marginTop: 5 }}>

                    <Container sx={styleDeBoite}>
                        <Container sx={styleDesTitres}>
                            <b>Email</b>
                        </Container>
                        <Container><Typography variant="inherit" noWrap>
                            {email}
                        </Typography></Container>
                    </Container>
                    <Container sx={styleDeBoite}>
                        <Container sx={styleDesTitres}><b>LinkedIn </b></Container>
                        <Container><Typography variant="inherit" noWrap>
                            <SocialMediaButton url={"https://www.linkedin.com/in/vincent-leveille30"} text={<LinkedInIcon sx={{ color: "#EFE1DD", backgroundColor: "#31413D" }} />} />
                        </Typography></Container>
                    </Container>
                    <Container sx={styleDeBoite}>
                        <Container sx={styleDesTitres}><b>Github</b></Container>
                        <Container><Typography variant="inherit" noWrap>
                            <RedirectButton url={"https://github.com/VinceLev23"} text={<GitHubIcon sx={{ color: "#EFE1DD" }} />} />
                        </Typography>
                        </Container>
                    </Container>
                </Container>
            </UpTransition>
        </>
    );
}