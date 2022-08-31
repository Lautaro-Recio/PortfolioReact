import React from 'react';
import { useContext } from 'react'
import { ContextHabilidadesEstudios } from '../Context/ContextHabilidadesEstudios'
import Carousel from 'react-bootstrap/Carousel';
import './Estudios.css'

export default function Estudios(){
    const {estudios} = useContext(ContextHabilidadesEstudios)

    return(
        <>
            
        <h2>Cursos y Estudios</h2> 
            <Carousel fade>
                {estudios.map((estudio)=>{
                    return(    
                        <Carousel.Item>
                            <img className="d-block w-80"  src={estudio.img} alt={estudio.title} />
                            <Carousel.Caption>
                                <div className='info'>
                                    <h5>{estudio.title}</h5>
                                    <p>{estudio.text}</p>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                
                )})}
            </Carousel>

        </>
    )
}