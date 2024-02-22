import { Button } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Route } from "@mui/icons-material";


type SocialMediaButtonProps = {
    url: string
    text?: string | JSX.Element
}

export default function SocialMediaButton({ url, text }: SocialMediaButtonProps) {

    const handleClick = () => {
        window.open(url, '_blank')?.focus();
    }

    return <>
        <Button onClick={handleClick}>{text}</Button>
    </>
}