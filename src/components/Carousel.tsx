import { Button, Container } from '@mui/material';
import { useState } from 'react';
import { ArrowBack, ArrowForward, Cancel } from '@mui/icons-material';

type CarouselProps = {
    photos: string[]
}

const pictureStyleModal = {
    width: "75%",
    height: "75%",
}

const pictureStyle = {
    width: "100%",
    height: "100%",
}

const buttonStyle = {
    color: "#DAE9CF",
    height: "50%",
    padding: "10px",
    backgroundColor: "#31413D",
    ":hover": {
        backgroundColor: "#6897AF",
        cursor: "pointer"
    }
}

export default function Carousel({ photos }: CarouselProps) {
    const [index, setIndex] = useState(0);
    const [open, setOpen] = useState(false);

    const nextPhoto = () => {
        setIndex(index === photos.length - 1 ? 0 : index + 1);
    }
    const previousPhoto = () => {
        setIndex(index === 0 ? photos.length - 1 : index - 1);
        console.log(index)
    }
    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <>
            <Container sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 3,
                '@media (max-width: 428px)': {
                    flexDirection: "row",
                    justifyContent: "center",
                    marginTop: 2
                }
            }}>
                <Button sx={buttonStyle} onClick={previousPhoto}><ArrowBack /></Button>
                <Container onClick={handleOpen} sx={{ ":hover": { cursor: 'pointer', filter: "blur(2px)" }, display: 'flex', justifyContent: "center" }}>
                    <img src={photos[index]} alt="photo" style={pictureStyle} />
                </Container>
                <Button sx={buttonStyle} onClick={nextPhoto}><ArrowForward /></Button>
            </Container>
            <dialog open={open} onClose={handleClose}>
                <Container sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Button sx={buttonStyle} onClick={previousPhoto}><ArrowBack /></Button>
                    <img onClick={handleOpen} src={photos[index]} alt="photo" style={pictureStyleModal} />
                    <Button sx={buttonStyle} onClick={nextPhoto}><ArrowForward /></Button>
                </Container>
                <Container sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button sx={buttonStyle} onClick={handleClose}>Close<Cancel /></Button>
                </Container>
            </dialog>
        </>
    )
}