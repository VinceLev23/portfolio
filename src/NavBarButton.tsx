import { Button } from "@mui/material";
import { Link } from "react-router-dom";

interface NavBarButtonProps {
    to: string;
    text: string;
}

export default function NavBarButton(props: NavBarButtonProps) {
    return (
        <Button
            component={Link}
            to={props.to}
        >
            {props.text}
        </Button>
    );
}