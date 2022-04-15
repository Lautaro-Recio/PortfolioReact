import { createContext, useState } from "react"
import piedra from '../../assets/imgs/piedra.png'
import tijera from '../../assets/imgs/tijera.jpg'
import papel from '../../assets/imgs/papel.png'

export const Juegos = createContext()

const JuegosProvider=({children})=>{
    const [eleccion, setEleccion] = useState("")
    const [eleccionIA, setEleccionIA] = useState("")

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
    return (
        <Juegos.Provider value={{eleccionJugador,eleccion,eleccionRandom,eleccionIA}}>
            {children}
        </Juegos.Provider>
    )
}
export default JuegosProvider