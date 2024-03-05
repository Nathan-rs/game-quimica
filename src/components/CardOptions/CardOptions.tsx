import { useEffect, useState } from "react";
import { Prefixos, Infixos, Sufixos } from "../../functions/enumNomeclatuas" 
import { findRenderedComponentWithType } from "react-dom/test-utils";

interface CardOptionsProps{
    onButtonClick: (text: string) => void;
    firstChainPrefix: string;
}

export function CardOptions({ onButtonClick, firstChainPrefix }: CardOptionsProps) {

    const [listType, setListType] = useState<"prefixos" | "infixos" | "sufixos">("prefixos");
    const [randomPrefixes, setRandomPrefixes] = useState<string[]>([]);

    useEffect(() => {
        generateRadom();
    }, [firstChainPrefix])

    const generateRadom = () => {
        const prefixesArray = Object.values(Prefixos);
        const randomIndexes = getRandomIndexes(prefixesArray.length);
        const randomPrefixes = randomIndexes.map((index) => prefixesArray[index]);
        setRandomPrefixes(randomPrefixes);
    }

    const getRandomIndexes = (max: number) => {
        const indexes = [];
        while (indexes.length < 3) {
            const randomIndex = Math.floor(Math.random() * max);
            if (!indexes.includes(randomIndex)) {
                indexes.push(randomIndex);
            }
        }
        return indexes;
    };

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
            listButtons = [...randomPrefixes, firstChainPrefix];
            break;
        case "infixos":
            listButtons = Object.values(Infixos);
            break;
        case "sufixos":
            listButtons = Object.values(Sufixos);
            break;
        default:
            listButtons = [...randomPrefixes, firstChainPrefix];
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