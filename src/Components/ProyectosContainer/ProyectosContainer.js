import React from 'react';

import './ProyectosContainer.css'
import CirculosColores from '../CirculosColores/CirculosColores'
import { useContext } from 'react'
import { Juegos } from '../Context/Juegos'
import Proyectos from '../Proyectos/Proyectos'
export default function ProyectosContainer(){
    const {ganadorCirculos}= useContext(Juegos)
    


    return(
        <>
            { ganadorCirculos=== false?(

                
                <div className='divProyectos'>
                    <h2>Proyetos realizados</h2>
                    <CirculosColores/>
                    <Proyectos/>
                </div>
            ):(
                <div className='divProyectos'>
                    <h2>Proyetos realizados</h2>
                    <Proyectos/>
                </div>
            )
            }
            
        </>

)
}