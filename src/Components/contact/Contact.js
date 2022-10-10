import React from 'react';
import Form from '../form/Form';
import Redes from '../Redes/Redes';

import "./Contact.css"
export default function Contact(){
    return(
        <div className='contactContainer' id="Contacto">
            <h2>Contacto</h2>
            <div className='contact'>
            <div>
                    <Form/>
            </div>
            <div>
                    <Redes/>
            </div>
            </div>
        </div>
    )
}