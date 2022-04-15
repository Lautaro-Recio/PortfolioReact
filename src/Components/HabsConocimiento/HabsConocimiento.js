import './HabsConocimiento.css'
import Habilidades from '../Habilidades/Habilidades'
import Estudios from '../Estudios/Estudios';
import PiedraPapelTijera from '../PiedraPapelTijera/PiedraPapelTijera'


export default function HabsConocimiento(){
    
    
    return(

        <div className='HabsConocimiento'>
            <PiedraPapelTijera/>
            <div className='habs'>
               <Habilidades/>
            </div>
            <div className='estudios'>
                <Estudios/>
            </div>   
        </div>
    )
}