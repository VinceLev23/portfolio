import { Button, Container } from "@mui/material"
import UpTransition from "../components/animation/UpTransition";
import RedirectButton from "../components/RedirectButton";
import Header from "../components/Header";

const email = "vincent.leveille.1@ulaval.ca"
export default function Contact() {


    return (
        <>
            <UpTransition>
                <Header title="Contact" />


                <Container sx={{
                    marginTop: 5,
                    display: "flex",
                    flexDirection: "row",
                }}>
                    <Container sx={{
                        display: "flex",
                        borderRight: 1,
                        flexBasis: "25%",
                        justifyContent: "flex-end"
                    }}><b>Email :</b></Container>
                    <Container>{email}</Container>
                </Container>
            </UpTransition>
        </>
    );
}