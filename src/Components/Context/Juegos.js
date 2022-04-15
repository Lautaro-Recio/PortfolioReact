import { createContext, useEffect, useState } from "react"
import piedra from '../../assets/imgs/piedra.png'
import tijera from '../../assets/imgs/tijera.jpg'
import papel from '../../assets/imgs/papel.png'

export const Juegos = createContext()

const JuegosProvider=({children})=>{
    const [eleccion, setEleccion] = useState("")
    const [eleccionIA, setEleccionIA] = useState("")
    const [resultado, setResultado] = useState("")
    const [ganador, setGanador] = useState(false)

    useEffect(()=>{
        condiciones()
    },[eleccionIA || eleccion])

    const eleccionArray = [
        piedra,
        papel,
        tijera,
    ]
    function eleccionRandom(){
        
        const randomIndex = Math.floor(Math.random()*eleccionArray.length)
        const eleccionJugadorIA= eleccionArray[randomIndex]
        setEleccionIA(eleccionJugadorIA)
    }
    /* ppt piedra papel o tijera */

    function eleccionJugador(ppt){
        setEleccion(ppt)
    }

    function condiciones(){
        if (eleccion === eleccionIA){/* EMPATE */
            setResultado("EMPTATE")
        }else if((eleccion===tijera)&&(eleccionIA===piedra)){ /* Desde aca gana la IA */
            setResultado("Perdiste vuelve a intentarlo")
        }else if((eleccion===piedra)&&(eleccionIA===papel)){
            setResultado("Perdiste vuelve a intentarlo")
        }else if((eleccion===tijera)&&(eleccionIA===piedra)){
            setResultado("Perdiste vuelve a intentarlo")
        }else if((eleccion===piedra)&&(eleccionIA===tijera)){/* Desde aca gana el usuario*/
            setResultado("Felicidades ganaste!")
            setGanador(true)
        }else if((eleccion===tijera)&&(eleccionIA===papel)){
            setResultado("Felicidades ganaste!")
            setGanador(true)
        }else if((eleccion===papel)&&(eleccionIA===piedra)){
            setResultado("Felicidades ganaste!")
            setGanador(true)
        }
    }
    return (
        <Juegos.Provider value={{eleccionJugador,eleccion,eleccionRandom,eleccionIA,resultado,ganador}}>
            {children}
        </Juegos.Provider>
    )
}
export default JuegosProvider