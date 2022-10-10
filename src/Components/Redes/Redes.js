import React from 'react';
import instagram from "../../assets/imgs/instagram.png"
import mail from "../../assets/imgs/mail.png"
import gitRedes from "../../assets/imgs/gitRedes.png"
import linkedin from "../../assets/imgs/linkedin.png"

import "./Redes.css"
export default function Redes(){
    return(
       <>
            <div className='redes'>
                <a target="_blanck" href="https://www.linkedin.com/in/lautaro-recio/">
                    <div>
                        <img loading="lazy" src={linkedin} alt="github" />
                        <p>@lautaro-recio</p>
                    </div>
                </a>
                <a target="_blanck" href="https://mail.google.com/mail/">
                    <div>
                        <img loading="lazy" src={mail} alt="email" />
                        <p>reciolauti@gmail.com</p>
                    </div>
                </a>
                <a target="_blanck" href="https://github.com/Lautaro-Recio">
                    <div>
                        <img loading="lazy" src={gitRedes} alt="github" />
                        <p>@Lautaro-recio</p>
                    </div> 
                </a>
                <a target="_blanck" href="https://www.instagram.com/lauti_recio/">
                    <div>
                        <img loading="lazy" src={instagram} alt="instagram" />
                        <p>@lauti_recio</p>
                    </div>
                </a>
            </div>
       </>
    )
}