import React from 'react';

import './QuienSoy.css'
import Lottie from 'react-lottie'
import dev from '../../assets/animacionesLottie/63487-programming-computer.json'

export default function QuienSoy(){
    const defaultOptions = {
        loop: true,
        autoplay:true,
        renderSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
    return(
        <div className='QuienSoy'  id="QuienSoy">
            
            <div>
                <div>
                    <h2>Lautaro Recio </h2>    
                    <h1>Desarrollador FrontEnd</h1>
                    <p>¡Bienvenidos a mi Portfolio! Aquí podran encontrar informacion sobre mis estudios, proyectos personales y los realizados como freelancer</p>
                </div>
            </div>
            <div className='aniLottie'>
                <Lottie options={{animationData: dev, defaultOptions}} width={400} height={400}/>
            </div>
        </div>

    )
}