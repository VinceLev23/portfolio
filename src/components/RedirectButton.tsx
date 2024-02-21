import { Button } from "@mui/material";


interface ButtonProps {
    url: string;
    text: string;
}

const buttonStyle = {
    color: "#DAE9CF",
    backgroundColor: "#31413D",
    marginLeft: "auto",
    ":hover": {
        backgroundColor: "#6897AF"
    }
}

export default function RedirectButton({ url, text }: ButtonProps) {


    const handleClick = () => {
        window.open(url, '_blank')?.focus();
    }

    return (<>
        <Button sx={buttonStyle} onClick={handleClick}>{text}</Button>
    </>
    )
}