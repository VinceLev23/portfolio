import LinkedIn from "./components/LinkedIn";
import { Button, Container } from "@mui/material";
import './App.css';
import NavBarButton from "./components/NavBarButton";


export default function NavBar() {

    return (
        <Container
            sx={{
                display: "flex",
                minWidth: "100%",
                flexDirection: "row",
                alignItems: "center",
                alignContent: "center",
                justifyContent: "end",
                backgroundColor: "#282c34",
                marginRight: 1,
                padding: 2
            }}
        >
            <NavBarButton to={"/"} text={"Home"} />
            <NavBarButton to={"/cv"} text={"CV"} />
            <NavBarButton to={"/apropos"} text={"À Propos"} />
            <NavBarButton to={"/projets"} text={"Projets"} />
            <LinkedIn></LinkedIn>
        </Container>
    )
}