import { Button, Container } from "@mui/material"
import UpTransition from "../components/animation/UpTransition";
import RedirectButton from "../components/RedirectButton";

const email = "vincent.leveille.1@ulaval.ca"
export default function Contact() {


    return (
        <>
            <UpTransition>
                <Container sx={{
                    border: 2,
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 5,
                    backgroundColor: "#EFE1DD"
                }}
                >
                    <h1>Contact</h1>
                </Container>


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