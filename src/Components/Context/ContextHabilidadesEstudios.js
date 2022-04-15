import { createContext } from "react"
import html from '../../assets/imgs/html.png'
import css from '../../assets/imgs/css.png'
import python from '../../assets/imgs/python.png'
import github from '../../assets/imgs/github.png'
import node from '../../assets/imgs/node.png'
import bootstrap from '../../assets/imgs/bootstrap.png'
import firebase from '../../assets/imgs/firebase.png'
import javascript from '../../assets/imgs/javascript.png'
import sass from '../../assets/imgs/sass.png'
import jquery from '../../assets/imgs/jquery.png'
import npm from '../../assets/imgs/npm.png'
import react from '../../assets/imgs/react.png'

export const ContextHabilidadesEstudios = createContext()

const ContextHabilidadesEstudiosProvider=({children})=>{
    const habs = [
        {id:1,img:html,rotacion:30,text:"HTML",},
        {id:2,img:css,rotacion:60,text:"CSS",},
        {id:3,img:javascript,rotacion:90,text:"JavaScript",},
        {id:4,img:react,rotacion:120,text:"React js",},
        {id:5,img:github,rotacion:150,text:"GitHub",},
        {id:6,img:firebase,rotacion:180,text:"FireBase",},
        {id:7,img:sass,rotacion:210,text:"Saas/Scss",},
        {id:8,img:bootstrap,rotacion:240,text:"Bootstrap",},
        {id:9,img:jquery,rotacion:270,text:"Jquery",},
        {id:10,img:python,rotacion:300,text:"Python",},
        {id:11,img:node,rotacion:330,text:"Node.js",},
        {id:12,img:npm,rotacion:360,text:"Npm",},
    ]

    const estudios= [
        {id:1,img:html,rotacion:30,text:"HTML",},
       
    ]
    function hola(){
        console.log("HOLA")
    }
    
    return (
        <ContextHabilidadesEstudios.Provider value={{habs, estudios,hola}}>
            {children}
        </ContextHabilidadesEstudios.Provider>
    )
}
export default ContextHabilidadesEstudiosProvider