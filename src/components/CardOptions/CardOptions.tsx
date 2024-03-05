import { useState } from "react";
import { Prefixos, Infixos, Sufixos } from "../../functions/enumNomeclatuas" 

interface CardOptionsProps{
    onButtonClick: (text: string) => void;
}

export function CardOptions({ onButtonClick }: CardOptionsProps) {

    const [listType, setListType] = useState<"prefixos" | "infixos" | "sufixos">("prefixos");

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