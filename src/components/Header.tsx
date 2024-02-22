import { Container } from "@mui/material";

type HeaderProps = {
    title: string
}

export default function Header({ title }: HeaderProps) {
    return (
        <>
            <Container
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 5,
                    border: 2,
                    backgroundColor: "#EFE1DD",
                }}
            >
                <h1>{title}</h1>
            </Container>
        </>
    );
}