import './CirculosColores.css'
import { Container,Row,Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { Juegos } from '../Context/Juegos';
import Timer from '../Timer/Timer';
export default function CirculosColores(){
    const {niveles,colores,eleccionCirculos} = useContext(Juegos)
    const coloresDesordenados = colores.sort(()=>Math.random()-0.5)

    function cambioDeColor(colorGeneral,colorDiferente){
        coloresDesordenados.find((colores)=>{
            colores.color=colorGeneral
            if(colores.id===8){
                colores.color=colorDiferente
            }
        })
    }
    function sumar(){
        coloresDesordenados.push({id: (coloresDesordenados.length+1) ,color:"red"},)
        coloresDesordenados.push({id: (coloresDesordenados.length+1) ,color:"red"},)
        coloresDesordenados.push({id: (coloresDesordenados.length+1) ,color:"red"},)
        coloresDesordenados.push({id: (coloresDesordenados.length+1) ,color:"red"},)
    }
    
    
    if(niveles === 2){ cambioDeColor("brown","#852222")}
    if(niveles === 3){ cambioDeColor("black","#1b1b1b")}
    if(niveles === 4){ sumar(); cambioDeColor("orange","#d18800")}
    if(niveles === 5){ sumar();cambioDeColor("grey","#6e6e6e")}
    if(niveles === 6){ sumar();cambioDeColor("white","#d4d4d4")}
    if(niveles === 7){ sumar();sumar();cambioDeColor("green","#036e03")}
    if(niveles === 8){ sumar();sumar();cambioDeColor("violet","#dd65dd")}
    if(niveles === 9){ sumar();sumar();cambioDeColor("yellow","#d8d81b")}
    if(niveles === 10){ sumar();sumar();sumar();cambioDeColor("pink","#f7a7b4")}
    if(niveles === 11){ sumar();sumar();sumar();cambioDeColor("deeppink","#ce006e")}
    if(niveles === 12){ sumar();sumar();sumar();cambioDeColor("cadetblue","#669ea0")}
    if(niveles === 13){ sumar();sumar();sumar();sumar();cambioDeColor("blue","#0000cc")}
    if(niveles === 14){ sumar();sumar();sumar();sumar();cambioDeColor("peru","#b87635")}
    if(niveles === 15){ sumar();sumar();sumar();sumar();sumar();cambioDeColor("palegreen","#7af77a")}


    return(
        <>
            <div className="fondoCirculosColores">
                <Container>
                    <h3>Circulos de Colores</h3>
                    <h3> Nivel: {niveles}</h3>
                    <Timer/>
                    <div>
                        <Row className='width40'>
                                {coloresDesordenados.map((color)=>{
                                    return(
                                        <Col key={color.id}>
                                            <div type="button" onClick={()=>eleccionCirculos(color.color)} className='circulos' style={{backgroundColor: color.color}}>&nbsp;</div>
                                        </Col>
                                    )
                                })}
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    )
}