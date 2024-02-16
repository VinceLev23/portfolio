import { Container } from "@mui/material";

export default function MediaTexte() {

    const image = <img src="https://www.shutterstock.com/image-photo/profile-picture-smiling-successful-young-260nw-2040223583.jpg" />
    const myText = <div>
        <h2>What is Lorem Ipsum?</h2>
        <div>Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with
            the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum."</div>
    </div>

    return (
        <>
            <Container sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: 5,
                border: 2,
                backgroundColor: "lightgray"
            }}
            >
                <h1>Who is this handsome man ?</h1>
            </Container>
            <Container sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignContent: "center",
                minWidth: "100%",
                marginTop: 5,
                backgroundColor: "lightgray"
            }}>

                <Container
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: "10%",
                        paddingBottom: 5
                    }}
                >
                    {myText}
                </Container>
                <Container
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "10%",
                        padding: 2
                    }}>
                    {image}
                </Container>
            </Container>
        </>
    )
}