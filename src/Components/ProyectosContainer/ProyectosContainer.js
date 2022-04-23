
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
                    <CirculosColores/>
                    <Proyectos/>
                </div>
            ):(
                <div className='divProyectos'>
                    <Proyectos/>
                </div>
            )
            }
            
        </>

)
}