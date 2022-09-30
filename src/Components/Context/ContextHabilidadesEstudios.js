import React from 'react';

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
import mongodb from '../../assets/imgs/mongodb.png'
import mariaDB from '../../assets/imgs/mariadb.png'
import express from '../../assets/imgs/express.png'
import estudioDes from '../../assets/imgs/estudioDes.png'
import estudioJS from '../../assets/imgs/estudioJS.png'
import estudioReact from '../../assets/imgs/estudioReact.png'

export const ContextHabilidadesEstudios = createContext()

const ContextHabilidadesEstudiosProvider=({children})=>{
    const habs = [
        {id:1,img:html,text:"HTML",},
        {id:2,img:css,text:"CSS",},
        {id:3,img:javascript,text:"JavaScript",},
        {id:4,img:react,text:"React js",},
        {id:5,img:github,text:"GitHub",},
        {id:6,img:firebase,text:"FireBase",},
        {id:7,img:sass,text:"Saas/Scss",},
        {id:8,img:bootstrap,text:"Bootstrap",},
        {id:9,img:jquery,text:"Jquery",},
        {id:10,img:python,text:"Python",},
        {id:11,img:node,text:"Node.js",},
        {id:12,img:npm,text:"Npm",},
        {id:13,img:mongodb,text:"Mongo DB",},
        {id:14,img:mariaDB,text:"Maria DB",},
        {id:15,img:express,text:"Express js",},

    ]

    const estudios= [
        {id:1,img:estudioJS, text:"En este curso adquiri conocimientos en las tecnologias Html, Css, GitHub, Sass/scss y Bootstrap, en el cual finalice en el top 10 de alumnos destacados" },
        {id:2,img:estudioDes,text:"En este curso adquiri conocimientos en las tecnologias JavaScript, Jquery, Node JS y Npm, en el cual finalice en el top 10 de alumnos destacados" },
        {id:3,img:estudioReact, text:"En este curso adquiri conocimientos en las tecnologias React js y Firebase, en el cual finalice en el top 10 de alumnos destacados" },

    ]
    
    
    return (
        <ContextHabilidadesEstudios.Provider value={{habs, estudios}}>
            {children}
        </ContextHabilidadesEstudios.Provider>
    )
}
export default ContextHabilidadesEstudiosProvider