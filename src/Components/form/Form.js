import React from 'react';
import "./Form.css"

export default function Contact(){
    return(
        <>
            <form className="form" action="POST">
                <div>
                    <p>Nombre y apellido</p>
                    <input type="text" />
                </div>
                <div>
                    <p>Correo electronico</p>
                    <input type="mail" />
                </div>
                <div>
                    <p>Consulta</p>
                    <input type="text-area" />
                </div>
                <button type='submit' >Enviar</button> 
                <button type='reset' >Reset</button>

            </form> 
        </>
    )
}