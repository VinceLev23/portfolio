import { Container } from "@mui/material";
import RedirectButton from "../components/RedirectButton";
import UpTransition from "../components/animation/UpTransition";
import DesignWeb from "../components/DesignWeb";
import Header from "../components/Header";
import UFood from "../components/UFood";
import UGram from "../components/UGram";


export default function Projets() {


    return (
        <>
            <UpTransition>
                <Header title={"Mes Projets"} />
                <DesignWeb />
                <UFood />
                <UGram />
            </UpTransition>
        </>
    )
}