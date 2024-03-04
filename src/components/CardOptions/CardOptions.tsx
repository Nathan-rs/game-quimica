import { useState } from "react";
import { Prefixos, Infixos, Sufixos } from "../../functions/Nomeclatuas" 

interface CardOptionsProps{
    onButtonClick: (text: string) => void;
}

export function CardOptions({ onButtonClick }: CardOptionsProps) {

    // const [listButton, SetListButton] = useState(true)
    const [listType, setListType] = useState<"prefixos" | "infixos" | "sufixos">("prefixos");
    // const listPrefixos: string[] = Object.values(Prefixos)
    // const listInfixos: string[] = Object.values(Infixos)

    // const buttons: string[] = listButton ? Object.values(Prefixos) : Object.values(Infixos)

    const handleClick = (text: string) => {
        onButtonClick(text);
        handleToggleList();
    }

    const handleToggleList = () => {
        setListType((prevType) => {
            switch (prevType) {
                case "prefixos":
                    return "infixos";
                case "infixos":
                    return "sufixos";
                case "sufixos":
                    return "prefixos";
                default:
                    return "prefixos";
            }
        });
    };

    let listButtons: string[] = [];
    switch (listType) {
        case "prefixos":
            listButtons = Object.values(Prefixos);
            break;
        case "infixos":
            listButtons = Object.values(Infixos);
            break;
        case "sufixos":
            listButtons = Object.values(Sufixos);
            break;
        default:
            listButtons = Object.values(Prefixos);
    }

    return (
        <footer className="default-view">
            <div className="button-options">
                {
                    listButtons.map((text, index) => (
                        <button
                        onClick={() => handleClick(text)}
                        className="btn"
                        key={index}>{text}</button>
                    ))
                }
            </div>
        </footer>
    )
}