import { Button, Container } from "@mui/material";
import { UploadFile } from "@mui/icons-material";

const CV: React.FC<{ pdfUrl: string }> = ({ pdfUrl }) => {
    const openPdfInNewTab = () => {
        window.open(pdfUrl, '_blank');
    };

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
            Accédez à mon CV
        </Button>
    );
};

export default CV;