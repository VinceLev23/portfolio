import SocialMediaButton from "./SocialMediaButton";
import { Box, Container } from "@mui/material";
import '../App.css';
import NavBarButton from "./NavBarButton";
import Logo from "../assets/Logo.jpg"
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from "react";
import { Button } from "@mui/material";
import { Context } from "../App";
import traductions from "../components/Traductions/Traductions.json";

const buttonStyle = {
    color: "#DAE9CF"
}
export default function NavBar() {

    const [lang, setLang] = React.useContext(Context);
    const [textes, setTextes] = React.useState<any>({});

    React.useEffect(() => {
        setTextes(traductions[lang as keyof typeof traductions]);
    }, [lang]);

    const navigate = useNavigate();

    const handleClickLogo = () => {
        navigate("/")
    }

    const handleLangChange = () => {
        setLang(lang === "fr" ? "en" : "fr")
    }



    return (
        <>

            <Container
                sx={{

                    backgroundColor: "#262626",
                }}
            >
                <motion.div
                    exit={{ opacity: 0, y: 21 }}
                    initial={{ opacity: 0, x: -21 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2 }}
                    style={{
                        display: "flex", flexDirection: "row", alignItems: "center",
                        justifyContent: "space-between",
                        padding: "10px"
                    }}
                >
                    <Box
                        component="img"
                        src={Logo}
                        sx={{
                            height: { xs: 50, sm: 60, md: 70, lg: 75 },
                            width: "auto",
                            borderRadius: "50%",
                            cursor: "pointer"
                        }}
                        onClick={handleClickLogo}
                    >
                    </Box>


                    <Container sx={{
                        display: "flex",
                        justifyContent: "flex-end"
                    }}>
                        <NavBarButton to="/projets" text={textes.navBarProjets} ></NavBarButton>
                        <NavBarButton to="/contact" text={textes.navBarContact} ></NavBarButton>
                        <Button onClick={handleLangChange} sx={buttonStyle} >FR/EN</Button>
                    </Container>
                </motion.div>
            </Container>

        </>
    )
}