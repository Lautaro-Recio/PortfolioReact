import github from '../../assets/imgs/githubProyectos.png'
import essen from '../../assets/imgs/essenParaTodxs.png'
import logoEssen from '../../assets/imgs/logo-essen.png'
import PLayEasy from '../../assets/imgs/playEasyPagina.png'
import logoPLayEasy from '../../assets/imgs/playEasy.png'
import paginajs from '../../assets/imgs/paginaJs.png'
import logojs from '../../assets/imgs/logoJS.png'

export default function Proyectos (){
    const proyectosRealizados =[
        {id:1,titulo:"EssenParaTodxs",fondo:essen,favicon:logoEssen,linkAlSitio:"https://essen-para-todxs.netlify.app/",linkGithub:"https://github.com/DiegoJabie142/EssenParaTodxs",descripcion:"EssenParaTodxs es un proyecto freelance brindado por CoderHouse tras finalizar el curso de Desarrollo Web, obtenido como beneficio por formar parte del top 10 de alumnos destacados, el sitio fue desarrollado con Html,Css y JavaScript, tambien utilizando GitHub como controlador de versiones"},
        {id:2,titulo:"Play Easy",fondo:PLayEasy,favicon:logoPLayEasy,linkAlSitio:"https://play-easy.netlify.app/",linkGithub:"https://github.com/Lautaro-Recio/Play-Easy",descripcion:"Play Easy es un E-Commerce realizado 100% en react con una pequeña base de datos en Firebase, fue desarrollado para el curso de CoderHouse en el que obtuve la maxima puntuacion posible, para probarlo debera clonar el repositorio de GitHub, instalar las dependencias con Npm install e iniciarlo con Npm start"},
        {id:3,titulo:"LR-Market",fondo:paginajs,favicon:logojs,linkAlSitio:"https://lautaro-recio.github.io/Pagina-JS/",linkGithub:"https://github.com/Lautaro-Recio/Pagina-JS",descripcion:"LR-Market es un E-Commerce desarrollado con JavaScript 100% Vanilla, en el que podemos encontrar una simulación de base de datos en el local Storage, en donde se guardan los usuarios y contraseñas registradas, para probar el proyecto deberan clonar el repositorio de GitHub, iniciarlo y podran empezar!"},
        
    ]    
    return(
        <>
            <h2 className='h2Proyectos'>Proyectos realizados</h2>
            { proyectosRealizados.map((proyecto)=>{
                return(
                    <>
                <div key={proyecto.id} className='proyectos'>
                    <div className='fondo' style={{backgroundImage: "url(" + proyecto.fondo + ")"}}>
                        <div className='pRight'>
                            <a href={proyecto.linkGithub}>
                            <img src={github} alt="github" />
                            <p >Ir al codigo</p>
                            </a>
                        </div>
                        <div className='PLeft'>
                            <a href={proyecto.linkAlSitio}>
                            <img src={proyecto.favicon} alt="" />
                            <p>Ir al sitio</p>
                            </a>
                        </div>
                    </div>
                    <div className='descripcion'>
                        <h3>{proyecto.titulo}</h3>
                        <p>{proyecto.descripcion}</p>      
                    </div>    
                </div>
            </>
            )
        })}
        </>

)
}