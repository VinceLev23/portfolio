import LinkedIn from "./LinkedIn";
import { Box, Button, Container } from "@mui/material";
import '../App.css';
import NavBarButton from "./NavBarButton";
import Logo from "../assets/Logo.jpg"
import { useNavigate } from "react-router-dom";


export default function NavBar() {
    const navigate = useNavigate();

    const handleClickLogo = () => {
        navigate("/")
    }

    return (
        <>
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px",
                    backgroundColor: "#262626",
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
                <LinkedIn />

            </Container>
        </>
    )
}