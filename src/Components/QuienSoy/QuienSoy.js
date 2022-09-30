import React from 'react';

import yo from '../../assets/imgs/yo.jpg'
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
        <div className='QuienSoy'>
            <a name="QuienSoy"/>
            <div>
                <div>
                    <h1>    
                        <span>H</span>
                        <span>o</span>
                        <span>l</span>
                        <span>a</span> 
                        <span>&#160;</span>
                        <span>s</span>
                        <span>o</span>
                        <span>y</span>
                        <span>&#160;</span>
                        <span>L</span>
                        <span>a</span>
                        <span>u</span>
                        <span>t</span>
                        <span>a</span>
                        <span>r</span>
                        <span>o</span>
                        <span>&#160;</span>
                        <span>R</span>
                        <span>e</span>
                        <span>c</span>
                        <span>i</span>
                        <span>o</span>
                    </h1>    
                    <h1>    

                        <span>D</span>
                        <span>e</span>
                        <span>s</span>
                        <span>a</span> 
                        <span>r</span>
                        <span>r</span>
                        <span>o</span>
                        <span>l</span>
                        <span>l</span>
                        <span>a</span>
                        <span>d</span>
                        <span>o</span>
                        <span>r</span>
                        <span>&#160;</span>
                        <span>F</span>
                        <span>r</span>
                        <span>o</span>
                        <span>n</span>
                        <span>t</span>
                        <span>&#160;</span>
                        <span>E</span>
                        <span>n</span>
                        <span>d</span>
                    </h1>
                    <p>
                        En medio de la pandemia decidi empezar a estudiar Desarrollo web, hoy en dia estoy en busqueda 
                        de nuevas experiencias y retos, con este portfolio lo que busco es combinar el diseño 
                        y desarrollo junto con algunos juegos simples.
                        Para acceder a cada seccion el usuario debera ganar el juego que la bloquea, 
                        asi solo llegara a desbloquear toda la informacion
                    </p>
                </div>
            </div>
            <div className='aniLottie'>
                <Lottie options={{animationData: dev, defaultOptions}} width={400} height={550}/>
            </div>
        </div>

    )
}