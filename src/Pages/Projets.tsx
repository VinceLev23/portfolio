import { Container } from "@mui/material";
import RedirectButton from "../components/RedirectButton";
import UpTransition from "../components/animation/UpTransition";
import DesignWeb from "../components/DesignWeb";
import Header from "../components/Header";
import UFood from "../components/UFood";
import UGram from "../components/UGram";
import React from "react";
import { Context } from "../App";
import traductions from "../components/Traductions/Traductions.json";


export default function Projets() {
    const [lang, setLang] = React.useContext(Context);
    const [textes, setTextes] = React.useState<any>({});

    React.useEffect(() => {
        setTextes(traductions[lang as keyof typeof traductions]);
    }, [lang]);

    return (
        <>
            <UpTransition>
                <Header title={textes.projetsTitre} />
                <DesignWeb />
                <UFood />
                <UGram />
            </UpTransition>
        </>
    )
}