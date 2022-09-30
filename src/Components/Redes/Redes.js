import React from 'react';
import instagram from "../../assets/imgs/instagram.png"
import mail from "../../assets/imgs/mail.png"
import gitRedes from "../../assets/imgs/gitRedes.png"

import "./Redes.css"
export default function Redes(){
    return(
       <>
            <div className='redes'>
                <div>
                    <img src={mail} alt="email" />
                    <p>reciolauti@gmail.com</p>
                </div>
                <div>
                    <img src={instagram} alt="instagram" />
                    <p>@lauti_recio</p>
                </div>
                <div>
                    <img src={gitRedes} alt="github" />
                    <p>@Lautaro-recio</p>
                </div>
            </div>
       </>
    )
}