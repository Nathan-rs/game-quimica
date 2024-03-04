import '../../index.css'
import { CardOptions } from '../CardOptions/CardOptions'
import { useState } from 'react'
import image from '../../assets/images/quimica-estruture.svg'

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
                    <div className="idCadeia">
                        <span>Prefixo</span>
                    </div>
                    <div className="image">
                        <img src={image} alt="" style={{width:'300px', height: '200px', padding: '10px'}} />
                    </div>
                    <div className="completeCadeia">
                        {
                            clickedButton.map((value, index) => (
                                <button
                                key={index}
                                onClick={() => handleRemoveButton(index)}
                                className="btnMain">{value}</button>
                            ))
                        }
                    </div>
                </div>
            </section>
            
            <CardOptions onButtonClick={(text) => setClickedButton([...clickedButton, text])} />
        </>
    )
}