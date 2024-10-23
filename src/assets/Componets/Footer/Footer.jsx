import React from 'react'
import './Footer.css'
import Sec1 from './Componets/Sec1'
import Sec2 from './Componets/Sec2'
import Sec3 from './Componets/Sec3'
import Sec4 from './Componets/Sec4'
import Sec5 from './Componets/Sec5'
function Footer() {
    return (
        <div className='footer grow-page-contenedor'>
            <div className="container">
                <Sec1/>
                <Sec2/>
                <Sec3/>
                <Sec4/>
                <Sec5/>
            </div>
        </div>
    )
}

export default Footer
