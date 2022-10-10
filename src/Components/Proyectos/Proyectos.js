import React, { useContext } from 'react';
import { ContextHabilidadesEstudios } from '../Context/ContextHabilidadesEstudios';
import essen from '../../assets/imgs/essenParaTodxs.png'
import logoEssen from '../../assets/imgs/logo-essen.png'
import PLayEasy from '../../assets/imgs/playEasyPagina.png'
import logoPLayEasy from '../../assets/imgs/playEasy.png'
import paginajs from '../../assets/imgs/paginaJs.png'
import logojs from '../../assets/imgs/logoJS.png'
import craft from '../../assets/imgs/craftPag.png'
import craftfav from '../../assets/imgs/craft.png'
import byailen from '../../assets/imgs/byAilen.png'
import rvlogo from '../../assets/imgs/r+vlogo.png'
import vr from '../../assets/imgs/vrPag.png'
import ailenPag from '../../assets/imgs/ailenPag.png'

export default function Proyectos (){
    const {habs} = useContext(ContextHabilidadesEstudios)
    const proyectosRealizados =[
        {id:1,titulo:"EssenParaTodxs",tecs:[0,1,2,7],img:essen,favicon:logoEssen,linkAlSitio:"https://essen-para-todxs.netlify.app/",linkGithub:"https://github.com/DiegoJabie142/EssenParaTodxs",descripcion:"Proyecto freelance, desarrollado con Html, Css, maquetado con Bootstrap y funcionalidad dada con JavaScript "},
        {id:2,titulo:"Play Easy",tecs:[0,1,2,3,5,11],img:PLayEasy,favicon:logoPLayEasy,linkAlSitio:"https://play-easy.netlify.app/",linkGithub:"https://github.com/Lautaro-Recio/Play-Easy",descripcion:"E-Commerce desarrollado con react y con una base de datos en Firebase, con manejo de usuarios y sesiones"},
        {id:3,titulo:"LR-Market",tecs:[0,1,2,7,8],img:paginajs,favicon:logojs,linkAlSitio:"https://lautaro-recio.github.io/Pagina-JS/",linkGithub:"https://github.com/Lautaro-Recio/Pagina-JS",descripcion:"E-Commerce desarrollado con JavaScript, en el cual los datos persisten en el Local Storage a falta de una base de datos externa"},
        {id:4,titulo:"ByAilen",tecs:[0,1,2,3],img:ailenPag,favicon:byailen,linkAlSitio:"http://byailen.info/",linkGithub:"https://github.com/FerNoceti/ByAilen",descripcion:"Single page informativa, desarrollada 100% con React, adaptada a dispositivos moviles, con un formulario de contacto incorporado"},
        {id:5,titulo:"Craft Textil",tecs:[0,1,2,7],img:craft,favicon:craftfav,linkAlSitio:"https://lautaro-recio.github.io/craft/",linkGithub:"https://github.com/Lautaro-Recio/craft",descripcion:"Landing page, utilizando Bootstrap, Html, JavaScript y Css, adaptada a dispositivos moviles, aquí encontramos una distibución homogénea y elegante"},
        {id:6,titulo:"V+R Arquitectura",tecs:[0,1,2,7],img:vr,favicon:rvlogo,linkAlSitio:"https://lautaro-recio.github.io/V-R/",linkGithub:"https://github.com/Lautaro-Recio/V-R",descripcion:"Landing page desarrollada con Bootstrap, Html, Css y JavaScript. En este sitio, encontramos una distribución minimalista y empresarial "},
    ]    
    let i=0
    return(
        <div className='proyectContainer' id="Proyectos">
            <h2>Proyectos</h2>
            <div className='gridDiv'>
                { proyectosRealizados.map((proyecto)=>{
                    return(      
                        <div key={proyecto.id} className='proyectos'>
                            <div className='circle'></div>
                            <div className='content'>
                                <h4>{proyecto.titulo}</h4>
                                <p>{proyecto.descripcion}</p>
                                

                                <img loading="lazy" className='pagImg' src={proyecto.img} alt={proyecto.titulo} />
                                    <div className='techs'>
                                        {proyecto.tecs.map((tec)=>{
                                            return(
                                                <img loading="lazy" key={i++} src={habs[tec].img} alt="" />
                                            )
                                        })

                                        }
                                    </div>
                            </div>
                            <img loading="lazy" src={proyecto.favicon} alt={proyecto.titulo} />
                            <div className='links'>
                                    <a target="_blank" href={proyecto.linkGithub}><p>Ver codigo</p></a>
                                    <a target="_blank" href={proyecto.linkAlSitio}><p>Ir a la pagina</p></a>
                            </div>
                        </div>
                )
            })}
            </div>

        </div>

)
}