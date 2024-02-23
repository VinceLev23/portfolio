import { Button } from "@mui/material";
import { UploadFile } from "@mui/icons-material";
import React from "react";
import { Context } from "../App";
import traductions from "../components/Traductions/Traductions.json";

const CV: React.FC<{ pdfUrl: string }> = ({ pdfUrl }) => {
    const openPdfInNewTab = () => {
        window.open(pdfUrl, '_blank');
    };

    const [lang, setLang] = React.useContext(Context);
    const [textes, setTextes] = React.useState<any>({});

    React.useEffect(() => {
        setTextes(traductions[lang as keyof typeof traductions]);
    }, [lang]);

    return (
        <Button
            variant="contained"
            onClick={openPdfInNewTab}
            startIcon={<UploadFile />}
            sx={{
                marginTop: 5,
                backgroundColor: "#31413D",
                ":hover": {
                    backgroundColor: "#6897AF"
                }
            }}>
            {textes.cv}
        </Button>
    );
};

export default CV;