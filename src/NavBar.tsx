import React from "react";
import LinkedIn from "./components/LinkedIn";
import { Avatar, Button, Container } from "@mui/material";
import './App.css';

export default function NavBar() {
    return <>
        <Container
            sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                alignContent: "center",
                justifyContent: "end",
                backgroundColor: "#282c34",
                marginRight: 1,
                padding: 2
            }}
        >
            <Button>CV</Button>
            <Button>À propos</Button>
            <Button>Projets</Button>
            <LinkedIn></LinkedIn>
            <Avatar sx={{ width: 28, height: 28 }} src="src\assets\MyPic.jpg" alt="Vince Léveillé" />
        </Container>
    </>
}