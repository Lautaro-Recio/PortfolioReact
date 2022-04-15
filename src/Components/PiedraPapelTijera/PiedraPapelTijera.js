import { useContext } from 'react'
import { Juegos } from '../Context/Juegos'
import './PiedraPapelTijera.css'
import piedra from '../../assets/imgs/piedra.png'
import tijera from '../../assets/imgs/tijera.jpg'
import papel from '../../assets/imgs/papel.png'


export default function PiedraPapelTijera(){
    const {eleccionJugador,eleccion,eleccionRandom,eleccionIA,resultado} = useContext(Juegos)
    return(
        <div className="fondoPiedraPapelTijera">
            <h3> Piedra, Papel o Tijera</h3>
            {/* Jugador */}
            <div className='jugador'>
                <div>
                    <img src={eleccion} alt="" />
                </div>
                <div className='opciones'>
                    <button onClick={()=>eleccionJugador(tijera)}>Tijera</button>
                    <button onClick={()=>eleccionJugador(papel)}>Papel</button>
                    <button onClick={()=>eleccionJugador(piedra)}>Piedra</button>                
                </div>
            </div>
            {/* Pc o ia */}
            <div className='inteligencia'>
                <div>
                    <img className='opcionIA' src={eleccionIA} alt="" />
                </div>
                
            </div>
            <h4>{resultado}</h4>
            <button className='jugar' onClick={()=>eleccionRandom()}>Jugar</button>
        </div>
    )
}