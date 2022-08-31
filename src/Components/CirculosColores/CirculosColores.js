import React from 'react';

import './CirculosColores.css'
import { Container,Row,Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { Juegos } from '../Context/Juegos';
import Timer from '../Timer/Timer';
export default function CirculosColores(){
    const {setNiveles,niveles,colores,eleccionCirculos,jugar,setJugar,empezar,setEmpezar} = useContext(Juegos)
    const coloresDesordenados = colores.sort(()=>Math.random()-0.5)

    function cambioDeColor(colorGeneral,colorDiferente){
        coloresDesordenados.find((colores)=>{
            colores.color=colorGeneral
            if(colores.id===7){
                colores.color=colorDiferente
            }
        })
    }
    function sumar(){
        coloresDesordenados.push({id: (coloresDesordenados.length+1) ,color:"red"},)
        coloresDesordenados.push({id: (coloresDesordenados.length+1) ,color:"red"},)
        coloresDesordenados.push({id: (coloresDesordenados.length+1) ,color:"red"},)
    }
    function empezarYsetearNivel1(){
        setJugar(true)
        setNiveles(1)
        setEmpezar(false)
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
    if(niveles === 12){ sumar();sumar();sumar();cambioDeColor("cadetblue","#397779")}
    if(niveles === 13){ sumar();sumar();sumar();sumar();cambioDeColor("blue","#0000cc")}
    if(niveles === 14){ sumar();sumar();sumar();sumar();cambioDeColor("peru","#b87635")}
    if(niveles === 15){ sumar();sumar();sumar();sumar();sumar();cambioDeColor("palegreen","#7af77a")}
    //FALTARIA SOLUCIONAR PARA QUE VUELA A NIVEL 1 CUANDO SE TERMINE EL TIEMPO + Contador de vidas

    return(
        <>
            <div className="fondoCirculosColores">
                <Container>
                    <h3>Circulos de Colores</h3>
                    { jugar===true ?(
                    <>
                        <h3> Nivel: {niveles}</h3>
                        <Timer/>
                            {empezar===true?(

                                
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
                            ):(
                                <>
                                </>
                            )
                            }   
                    </>
                    ):(
                        <div className='descripcionJuegos'>
                            <p>En este minijuego deberas superar los 15 niveles en menos de 30 segundos, tendras que encontrar
                                los circulos que son de diferente color, solo asi podras pasar al siguiente nivel, si se acaba el
                                tiempo ¡Pierdes una vida! Mucha suerte🍀😀
                            </p>
                            <button onClick={()=>empezarYsetearNivel1()}>Jugar</button>
                        </div>
                    )
                    }
                </Container>
            </div>
        </>
    )
}