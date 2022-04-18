import './HabsConocimiento.css'
import Habilidades from '../Habilidades/Habilidades'
import Estudios from '../Estudios/Estudios';
import PiedraPapelTijera from '../PiedraPapelTijera/PiedraPapelTijera'
import { useContext } from 'react';
import { Juegos } from '../Context/Juegos';


export default function HabsConocimiento(){
    
    const {ganador} = useContext(Juegos)

    return(
        <>
            { ganador === false?(
                    <div className='HabsConocimiento'>
                        <a name="HabilidadesEstudios"/>
                        <PiedraPapelTijera/>
                        <div className='habs'>
                        <Habilidades/>
                        </div>
                        <div className='estudios'>
                            <Estudios/>
                        </div>   
                    </div>
            ):(
                <div className='HabsConocimiento'>
                    <a name="HabilidadesEstudios"/>
                    <div className='habs'>
                    <Habilidades/>
                    </div>
                    <div className='estudios'>
                        <Estudios/>
                    </div>   
                </div>   
            )}
        </>
    )
}