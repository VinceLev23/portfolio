import SocialMediaButton from "./SocialMediaButton";
import { Box, Container } from "@mui/material";
import '../App.css';
import NavBarButton from "./NavBarButton";
import Logo from "../assets/Logo.jpg"
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import LinkedInIcon from '@mui/icons-material/LinkedIn';



export default function NavBar() {
    const navigate = useNavigate();

    const handleClickLogo = () => {
        navigate("/")
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
                        <NavBarButton to="/projets" text="Projets" ></NavBarButton>
                        <NavBarButton to="/contact" text="Contact" ></NavBarButton>
                        <SocialMediaButton url={"https://www.linkedin.com/in/vincent-leveille30"} text={<LinkedInIcon sx={{ color: "#EFE1DD" }} />} />
                    </Container>
                </motion.div>
            </Container>

        </>
    )
}