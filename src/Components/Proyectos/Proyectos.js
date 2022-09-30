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
import produccion from '../../assets/imgs/produccion.png'
import vr from '../../assets/imgs/vrPag.png'

export default function Proyectos (){
    const {habs} = useContext(ContextHabilidadesEstudios)
    const proyectosRealizados =[
        {id:1,titulo:"EssenParaTodxs",tecs:[0,1,2,7],img:essen,favicon:logoEssen,linkAlSitio:"https://essen-para-todxs.netlify.app/",linkGithub:"https://github.com/DiegoJabie142/EssenParaTodxs",descripcion:"EssenParaTodxs es un proyecto freelance, el sit"},
        {id:2,titulo:"Play Easy",tecs:[0,1,2,3,5,11],img:PLayEasy,favicon:logoPLayEasy,linkAlSitio:"https://play-easy.netlify.app/",linkGithub:"https://github.com/Lautaro-Recio/Play-Easy",descripcion:"Play Easy es un E-Commerce realizado con react y con una pequeña base de datos en Firebase, para probarlo debera clonar el repositorio de GitHub, instalar las dependencias con Npm install e iniciarlo con Npm start"},
        {id:3,titulo:"LR-Market",tecs:[0,1,2,7,8],img:paginajs,favicon:logojs,linkAlSitio:"https://lautaro-recio.github.io/Pagina-JS/",linkGithub:"https://github.com/Lautaro-Recio/Pagina-JS",descripcion:"LR-Market es un E-Commerce desarrollado con JavaScript 100% Vanilla, en el que podemos encontrar una simulación de base de datos en el local Storage, para probar el proyecto deberan clonar el repositorio de GitHub, iniciarlo y podran empezar!"},
        {id:4,titulo:"ByAilen",tecs:[0,1,2,3],img:paginajs,favicon:byailen,linkAlSitio:"http://byailen.info/",linkGithub:"https://github.com/FerNoceti/ByAilen",descripcion:"ByAilen es una single page informativa, desarrollada con 100% con React js, adaptada a dispositivos moviles, con un formulario de contacto incorporado funcional "},
        {id:5,titulo:"Craft Textil",tecs:[0,1,2,7],img:craft,favicon:craftfav,linkAlSitio:"https://lautaro-recio.github.io/craft/",linkGithub:"https://github.com/Lautaro-Recio/craft",descripcion:"Craft Textil es una landing page, realizada con bootstrap, html, JavaScript y css, adaptada a dispositivos moviles y donde podemos encontrar una distibucion de sus productos omogenia y elegante"},
        {id:6,titulo:"V+R Arquitectura",tecs:[0,1,2,7],img:vr,favicon:produccion,linkAlSitio:"https://lautaro-recio.github.io/V-R/",linkGithub:"https://github.com/Lautaro-Recio/V-R",descripcion:"En produccion"},
    ]    
    return(
        <div className='proyectContainer'>
            <h2>Proyectos</h2>
            <div className='gridDiv'>
                { proyectosRealizados.map((proyecto)=>{
                    return(      
                        <div key={proyecto.id} className='proyectos'>
                            <div className='circle'></div>
                            <div className='content'>
                                <h4>{proyecto.titulo}</h4>
                                <p>{proyecto.descripcion}</p>
                                    <div className='techs'>
                                        {proyecto.tecs.map((tec)=>{
                                            return(
                                                <img src={habs[tec].img} alt="" />
                                            )
                                        })

                                        }
                                    </div>
                            </div>
                            <img src={proyecto.favicon} alt={proyecto.titulo} />
                        </div>
                )
            })}
            </div>

        </div>

)
}