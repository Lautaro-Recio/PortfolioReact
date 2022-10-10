import React, { useState } from 'react';
import "./Form.css"

export default function Contact(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [consulta, setConsulta] = useState("");

    const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
        gmail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        consulta: /^[a-zA-ZÀ-ÿ\s¿?!¡,.]{4,100}$/,

    };

    const nombreChange = event => setName(event.target.value)
    const mailChange = event => setEmail(event.target.value)
    const mensajeChange = event => setConsulta(event.target.value)

    const reset = ()=>{
        setName("")
        setEmail("")
        setConsulta("")
    }

    return(
        <>
            <form id="my_form" className="form" method="POST" action="https://formsubmit.co/reciolauti@gmail.com">
                <div>
                    <p style={{color: (name=== "" ? `` :( expresiones.nombre.test(name)===false?"red": (name=== " " ?" ":"green"))) }}>Nombre y apellido</p>
                    <input type="text" name='name' style={{borderRadius: name ==="" ?"":"5px",boxShadow: name ==="" ?"":"0 0 10px #609ce9,0 0 20px #609ce9,0 0 40px #609ce9"}} value={name} onChange={nombreChange}/>
                </div>
                <div>
                    <p style={{color: (email=== "" ? `` :( expresiones.gmail.test(email)===false?"red": (email=== " " ?" ":"green"))) }}>Correo electronico</p>
                    <input type="text" name='mail' style={{borderRadius:email ==="" ?"":"5px",boxShadow:email ==="" ?"":"0 0 10px #609ce9,0 0 20px #609ce9,0 0 40px #609ce9"}} value={email} onChange={mailChange}/>
                </div>
                <div>
                    <p style={{color: (consulta=== "" ? `` :( expresiones.consulta.test(consulta)===false?"red": (consulta=== " " ?" ":"green"))) }}>Consulta</p>
                    <input type="text" name='consulta' style={{borderRadius: consulta ==="" ?"":"5px",boxShadow: consulta ==="" ?"":"0 0 10px #609ce9,0 0 20px #609ce9,0 0 40px #609ce9"}} value={consulta} onChange={mensajeChange}/>
                </div>
                    <p style={{color:'white',textAlign:"center"}}>!Completa el formulario para enviar!</p>
                <div className='buttons'>
                    <button type='reset' onClick={reset} ><p>Reset</p> </button>
                    <button disabled={((expresiones.gmail.test(email)===false) || (expresiones.nombre.test(name)===false) || (expresiones.consulta.test(consulta)===false))} ><p>Enviar</p> </button> 
                    <input type="hidden" name='_next' value="http://localhost:3000/"/>
                    <input type="hidden" name='_captcha' value="false"/>

                </div>

            </form> 
        </>
    )
}