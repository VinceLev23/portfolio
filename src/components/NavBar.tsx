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
                    width: "100%",
                    flexDirection: "row",
                    backgroundColor: "#262626",
                }}
            >
                <Box
                    display={"flex"}
                    component="img"
                    src={Logo}
                    sx={{
                        height: 75,
                        borderRadius: 50,
                        ":hover": {
                            cursor: "pointer"
                        }
                    }}
                    marginRight={"auto"}
                    onClick={handleClickLogo}
                >
                </Box>


                <LinkedIn></LinkedIn>
            </Container>
        </>
    )
}