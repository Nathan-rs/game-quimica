import '../../index.css'
import { CardOptions } from '../CardOptions/CardOptions'
import { useState } from 'react'

export function Main() {
    const [clickedButton, setClickedButton] = useState<string[]>([])

    const handleRemoveButton = (indexRemove: number) => {
        const updateButton = clickedButton.filter((_, index) => index !== indexRemove)
        setClickedButton(updateButton)
    }

    return (
        <>
            <section className="container default-view">
                <div className="content">
                    <div className="image">
                        <img src="" alt="" />
                    </div>
                    <div className="message">
                        {
                            clickedButton.map((value, index) => (
                                <button
                                key={index}
                                onClick={() => handleRemoveButton(index)}>{value}</button>
                            ))
                        }
                    </div>
                </div>
            </section>
            
            <CardOptions onButtonClick={(text) => setClickedButton([...clickedButton, text])} />
        </>
    )
}