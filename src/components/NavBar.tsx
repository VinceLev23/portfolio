import { Box, Container, Menu, MenuItem } from "@mui/material";
import '../App.css';
import NavBarButton from "./NavBarButton";
import Logo from "../assets/Logo.jpg"
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import React from "react";
import { Button } from "@mui/material";
import { Context } from "../App";
import traductions from "../components/Traductions/Traductions.json";
import MenuIcon from '@mui/icons-material/Menu';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';


const buttonStyle = {
    color: "#DAE9CF",
    backgroundColor: "#262626",
    elevation: 0,
    '&:hover': {
        backgroundColor: "#31413D"

    }
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
                        display: { xs: "none", sm: "flex", md: "flex", lg: "flex" },
                        justifyContent: "flex-end",
                        alignItems: "center",
                        gap: 1,
                    }}>
                        <NavBarButton to="/projets" text={textes.navBarProjets} ></NavBarButton>
                        <NavBarButton to="/contact" text={textes.navBarContact} ></NavBarButton>
                        <Button onClick={handleLangChange} sx={buttonStyle} >FR/EN</Button>
                    </Container>
                    <Container sx={{
                        display: { xs: "flex", sm: "none", md: "none", lg: "none" },
                        justifyContent: "flex-end",

                    }}>
                        <PopupState variant="popover">
                            {(popupState) => (
                                <React.Fragment>
                                    <Button sx={buttonStyle} variant="contained" {...bindTrigger(popupState)}>
                                        <MenuIcon sx={{ color: "#DAE9CF" }}></MenuIcon>
                                    </Button>
                                    <Menu {...bindMenu(popupState)}
                                        PaperProps={{ sx: { backgroundColor: "#262626" } }}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'right',
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                    >
                                        <MenuItem sx={buttonStyle} onClick={popupState.close}><NavBarButton to="/projets" text={textes.navBarProjets} ></NavBarButton></MenuItem>
                                        <MenuItem sx={buttonStyle} onClick={popupState.close}><NavBarButton to="/contact" text={textes.navBarContact} ></NavBarButton></MenuItem>
                                        <MenuItem sx={buttonStyle} onClick={popupState.close}><Button onClick={handleLangChange} sx={buttonStyle} >FR/EN</Button></MenuItem>
                                    </Menu>
                                </React.Fragment>
                            )}
                        </PopupState>
                    </Container>
                </motion.div>
            </Container>

        </>
    )
}