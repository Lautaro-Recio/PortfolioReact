import yo from '../../assets/imgs/yo.jpg'
import './QuienSoy.css'
import Lottie from 'react-lottie'
import dev from '../../assets/animacionesLottie/83087-developer-front-end.json'

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
            <img src={yo} alt="Lautaro Recio" />
            <div>
                <h2>Hola soy Lautaro Recio</h2>
                <h1>Desarrollador Front End</h1>
            </div>
            <Lottie options={{animationData: dev, defaultOptions}} width={350} height={500}/>
        </div>

    )
}