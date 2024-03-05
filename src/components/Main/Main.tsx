import '../../index.css'
import { CardOptions } from '../CardOptions/CardOptions'
import { useEffect, useState } from 'react'
import image from '../../assets/images/quimica-estruture.svg'

export function Main() {
    const [clickedButton, setClickedButton] = useState<string[]>([])
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('data.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setData(data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData()
    }, [])


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