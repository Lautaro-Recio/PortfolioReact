import { useContext } from 'react'
import { ContextHabilidadesEstudios } from '../Context/ContextHabilidadesEstudios'
import { Container,Row,Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Habilidades.css'
export default function Habilidade(){
    const {habs} = useContext(ContextHabilidadesEstudios)

    return(
        <>
        <h2>Habilidades</h2> 
                <Container>
                    <Row>
                            {habs.map((habilidad)=>{
                                return(    
                                <Col>  
                                    <div key={habilidad.id} className='habilidades'>
                                        <img src={habilidad.img} alt={habilidad.text} />
                                        <p>{habilidad.text}</p>
                                    </div>
                                </Col>
                            )})}
                    </Row>
                </Container>
        </>
    )
}