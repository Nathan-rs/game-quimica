import { Prefixos } from "../../functions/Nomeclatuas" 

interface CardOptionsProps{
    onButtonClick: (text: string) => void;
}

export function CardOptions({ onButtonClick }: CardOptionsProps) {

    const listPrefixos: string[] = Object.values(Prefixos)

    function handleClick(text: string) {
        onButtonClick(text);
    }

    return (
        <footer className="default-view">
            <div className="button-options">
                {
                    listPrefixos.map((text, index) => (
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