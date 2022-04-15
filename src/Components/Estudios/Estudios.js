import { useContext } from 'react'
import { ContextHabilidadesEstudios } from '../Context/ContextHabilidadesEstudios'
import { Container,Row,Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Estudios.css'

export default function Estudios(){
    const {estudios} = useContext(ContextHabilidadesEstudios)

    return(
        <>
            <h2>Cursos y Estudios</h2> 
                <Container>
                    <Row>
                            {estudios.map((estudio)=>{
                                return(    
                                <Col>  
                                    <div className='Estudios'>
                                        <img src={estudio.img} alt={estudio.text} />
                                        <p>{estudio.text}</p>
                                    </div>
                                </Col>
                            )})}
                    </Row>
                </Container>
        </>
    )
}