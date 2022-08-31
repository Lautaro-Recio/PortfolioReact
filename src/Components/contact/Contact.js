import React from 'react';
import Form from '../form/Form';
import Redes from '../Redes/Redes';

import "./Contact.css"
export default function Contact(){
    return(
        <div className='contact'>
           <div>
                <Form/>
           </div>
           <div>
                <Redes/>
           </div>
        </div>
    )
}