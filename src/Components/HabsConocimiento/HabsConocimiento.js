import React from 'react';

import './HabsConocimiento.css'
import Habilidades from '../Habilidades/Habilidades'
import Estudios from '../Estudios/Estudios';


export default function HabsConocimiento(){
    

    return(
        <>
       
                <div className='HabsConocimiento'>
                    <a name="HabilidadesEstudios"/>
                    <div className='block'>
                    <h2>Conocimientos</h2>

                        <div className='habs'>
                            <Habilidades/>
                        </div>
                    </div>
                    <div className='estudios'>
                        <Estudios/>
                     </div>   
                    </div>   
        </>
    )
}