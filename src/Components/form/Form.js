import React, { useState } from 'react';
import "./Form.css"

export default function Contact(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [consulta, setConsulta] = useState("");

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
            <form className="form" action="POST">
                <div>
                    <p>Nombre y apellido</p>
                    <input type="text" name='name' style={{backgroundColor: name ==="" ?"":"#8b97a7", borderRadius: name ==="" ?"":"5px"}} value={name} onChange={nombreChange}/>
                </div>
                <div>
                    <p>Correo electronico</p>
                    <input type="text" name='name' style={{backgroundColor: email ==="" ?"":"#8b97a7", borderRadius: email ==="" ?"":"5px"}} value={email} onChange={mailChange}/>
                </div>
                <div>
                    <p>Consulta</p>
                    <input type="text" name='name' style={{backgroundColor: consulta ==="" ?"":"#8b97a7", borderRadius: consulta ==="" ?"":"5px"}} value={consulta} onChange={mensajeChange}/>
                </div>
                <div>
                    <button type='submit' ><span>Enviar</span> </button> 
                    <button type='reset' onClick={reset} ><span>Reset</span> </button>
                </div>

            </form> 
        </>
    )
}