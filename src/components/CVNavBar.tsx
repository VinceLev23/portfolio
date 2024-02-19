import { Button, Container } from "@mui/material";
import NavBarButton from "./NavBarButton";

const buttonStyle = {
    display: "flex",
    justifyContent: "flex-start",
    fontSize: 11,
    padding: 2,
}

export default function CVNavbar() {
    return (
        <>
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 5
                }}>
                <Container
                    sx={{ borderRight: 1, flexBasis: "45%" }}
                >
                    <NavBarButton to="/etudes" text="Études / Formations" ></NavBarButton>
                    <NavBarButton to="/competencesinformatiques" text="Compétences Informatiques" ></NavBarButton>
                    <NavBarButton to="/competencesprofessionnelles" text="Compétences Professionnelles" ></NavBarButton>
                    <NavBarButton to="/projetsinformatique" text="Projets Informatiques" ></NavBarButton>
                    <NavBarButton to="/experiencesprofessionnelles" text="Expériences Professionnelles" ></NavBarButton>
                </Container>
                <Container>
                </Container>
            </Container>
        </>
    )
}