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
                    <img src={yo} alt="Lautaro Recio" />
                <div>
                    <h1>    Hola soy Lautaro Recio <br /> Desarrollador Front End <span>&#160;</span></h1>
                    <p>
                        En medio de la pandemia decidi empezar a estudiar Desarrollo web, hoy en dia estoy en busqueda 
                        de nuevas experiencias y retos, con este portfolio lo que busco es combinar el diseño 
                        y desarrollo junto con algunos juegos simples.
                        Para acceder a cada seccion el usuario debera ganar el juego que la bloquea, 
                    asi solo llegara a desbloquear toda la informacion
                    </p>
                </div>
            </div>
            <Lottie options={{animationData: dev, defaultOptions}} width={400} height={550}/>
        </div>

    )
}