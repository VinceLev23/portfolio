import { Container } from "@mui/material";

export default function TitleAndButtons() {
    return (
        <>
            <Container sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center"
            }}>
                <Container>Projets</Container>
                <Container>Button projets</Container>
            </Container>
        </>
    )
}