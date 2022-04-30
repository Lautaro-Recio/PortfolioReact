import { useState } from "react";
import './Timer.css'
export default function Timer(){
    // TIMER
    let [tiempo,setTiempo]=useState(5)
    const [jugar,setJugar]=useState(false)
    const Interval= setInterval(() => {
        setTiempo(tiempo=tiempo-1)
        if(tiempo===-1){
            setJugar(false)
            setTiempo(5)
            clearInterval(Interval)
        } 
    }, 1000);
    function timer(){
        setTiempo(5)
        setJugar(true)
        
    }
    
    return(
        <>
            {jugar=== false?(
                <div className="timer" >
                    <h3 >{tiempo}</h3>
                    <button onClick={timer}>Jugar</button>
                </div>
                ):(
                <div className="timer" >
                    <h3 >{tiempo}</h3>
                </div>                )
            }
        </>

    )
}