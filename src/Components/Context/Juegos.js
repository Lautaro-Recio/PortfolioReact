import { createContext, useEffect, useState } from "react"
import piedra from '../../assets/imgs/piedra.png'
import tijera from '../../assets/imgs/tijera.jpg'
import papel from '../../assets/imgs/papel.png'
import Swal from "sweetalert2"

export const Juegos = createContext()

const JuegosProvider=({children})=>{
    const [eleccion, setEleccion] = useState("")
    const [eleccionIA, setEleccionIA] = useState("")
    const [ganador, setGanador] = useState(false)
    const [empezar,setEmpezar] =useState(false)

    //PIEDRA PAPEL O TIJERAS
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            timer: 3000,
            showConfirmButton: false,
            didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        }
        )
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
        function ganaJugador(){
            Toast.fire({
                icon: 'success',
                title: 'Felicitaciones🥳',
                text: 'Ganaste el minijuego!',
                showCloseButton: false,
                showCancelButton: false,
            })
        }
        function ganaIA(){
            Toast.fire({
                icon: 'error',
                title: 'Oh no😓',
                text: 'Perdiste esta vez, vuelve a intentarlo!',
                showCloseButton: false,
                showCancelButton: false,
            })
        }
        function eleccionJugador(ppt){
            setEleccion(ppt)
        }

        function condiciones(){
            if((eleccion==="")&&(eleccionIA==="")){
                
            }else if ((eleccion === eleccionIA)&&(eleccionIA!=="")){
                /* EMPATE */
                Toast.fire({
                    icon: 'error',
                    title: 'Oh no😓',
                    text: 'Empataron esta vez, vuelve a intentarlo!',
                    showCloseButton: false,
                    showCancelButton: false,
                })
            }else if((eleccion===tijera)&&(eleccionIA===piedra)){ /* Desde aca gana la IA */
                ganaIA()
            }else if((eleccion===piedra)&&(eleccionIA===papel)){
                ganaIA()
            }else if((eleccion===tijera)&&(eleccionIA===piedra)){
                ganaIA()
            }else if((eleccion===piedra)&&(eleccionIA===tijera)){/* Desde aca gana el usuario*/
                ganaJugador()
                setGanador(true)
            }else if((eleccion===tijera)&&(eleccionIA===papel)){
                ganaJugador()
                setGanador(true)
            }else if((eleccion===papel)&&(eleccionIA===piedra)){
                ganaJugador()
                setGanador(true)
            }
        }
    //--------------------------------------------------------------------------------------------//
    //Circulos
        const [ganadorCirculos,setGanadorCirculos]=useState(false)
        const [niveles,setNiveles]=useState(1)
        const [jugar,setJugar]=useState(false)
        let colores = [
            {id:1,color:"red"},
            {id:2,color:"red"},
            {id:3,color:"red"},
            {id:4,color:"red"},
            {id:5,color:"red"},
            {id:6,color:"red"},
            {id:7,color:"#c50505"},
        ]

        function eleccionCirculos(circuloTocado){
            if((circuloTocado !== "red") && (circuloTocado !== "brown")&& (circuloTocado !== "black")&& (circuloTocado !== "orange")&& (circuloTocado !== "grey")&& (circuloTocado !== "white")&& (circuloTocado !== "green")&& (circuloTocado !== "violet")&& (circuloTocado !== "yellow")&& (circuloTocado !== "pink")&& (circuloTocado !== "deeppink")&& (circuloTocado !== "cadetblue")&& (circuloTocado !== "blue")&& (circuloTocado !== "peru")&& (circuloTocado !== "palegreen") ){
                setNiveles(niveles+1)
                if(niveles===15){
                    ganaJugador()
                    setGanadorCirculos(true)
                }
            } else{
                Toast.fire({
                    icon: 'error',
                    title: 'Ese no es el diferente😓',
                    text: 'Intenta con otro!',
                    showCloseButton: false,
                    showCancelButton: false,
                })
            }
        }

    
    //HACER SISTEMA DE VIDAS
    const VidasUsuario=[
        {id:1,color:"red"},
        {id:2,color:"red"},
        {id:3,color:"red"},
        {id:4,color:"red"},
        {id:5,color:"red"},
    ]
    function restarVida(){
        console.log(VidasUsuario.length)
        if(VidasUsuario.length > 0 ){
            alert("RESTAR VIDA FUNCIONA")
        }
    }
    //--------------------------------------------------------------------------------------------//
    return (
        <Juegos.Provider value={{restarVida,VidasUsuario,Toast,empezar,setEmpezar,jugar,setJugar,setNiveles,niveles,colores,ganadorCirculos,eleccionCirculos,eleccionJugador,eleccion,eleccionRandom,eleccionIA,ganador}}>
            {children}
        </Juegos.Provider>
    )
}
export default JuegosProvider