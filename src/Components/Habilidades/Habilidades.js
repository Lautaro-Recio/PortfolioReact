import React from 'react';
import { useContext } from 'react'
import { ContextHabilidadesEstudios } from '../Context/ContextHabilidadesEstudios'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Habilidades.css'
export default function Habilidade(){
    const {habs} = useContext(ContextHabilidadesEstudios)

    return(
        <>
                            {habs.map((habilidad)=>{
                                return(    
                                    <div key={habilidad.id}  className='habilidades'>
                                        <img loading="lazy" src={habilidad.img} alt={habilidad.text} />
                                        <p>{habilidad.text}</p>
                                    </div>                            )})}
                   
        </>
    )
}