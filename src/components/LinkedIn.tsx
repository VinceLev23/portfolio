import { Button } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Route } from "@mui/icons-material";

const url = 'https://www.linkedin.com/in/vincent-leveille30'


export default function LinkedIn() {

    const handleClick = () => {
        window.open(url, '_blank')?.focus();
    }

    return <>
        <Button onClick={handleClick}><LinkedInIcon sx={{ color: "#EFE1DD" }} /></Button>
    </>
}