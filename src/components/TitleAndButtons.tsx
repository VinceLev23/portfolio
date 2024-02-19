import { Button, Container } from "@mui/material";

const buttonStyle =
{
    marginTop: 5,
    backgroundColor: "#31413D",
    color: "#DAE9CF",
    ":hover": {
        backgroundColor: "#6897AF"
    }
}

export default function TitleAndButtons() {

    const handleProjectClick = () => {
        console.log("you clicked")
    }

    return (
        <>
            <Container
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 5,
                    border: 2,
                    backgroundColor: "#EFE1DD",
                    maxWidth: "50%"
                }}>
                <h1>Mes Projets</h1>
            </Container>
            <Container
                sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    marginTop: 5,
                }}
            >
                <Button
                    onClick={handleProjectClick}
                    sx={buttonStyle}
                >
                    Button projets</Button>
                <Button
                    onClick={handleProjectClick}
                    sx={buttonStyle}
                >
                    Button projets2</Button>
                <Button
                    onClick={handleProjectClick}
                    sx={buttonStyle}
                >
                    Button projets3</Button>
            </Container>
        </>
    )
}