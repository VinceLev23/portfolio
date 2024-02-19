import { Button } from "@mui/material";
import { Link } from "react-router-dom";

interface NavBarButtonProps {
    to: string;
    text: string;
}

const buttonStyle = {
    color: "#DAE9CF"
}

export default function NavBarButton(props: NavBarButtonProps) {
    return (
        <Button
            component={Link}
            to={props.to}
            sx={buttonStyle}
        >
            {props.text}
        </Button>
    );
}