import React from 'react'
import { FaChevronRight } from "react-icons/fa6";

import './Section1.css'
function Section1() {
    return (
        <section className='grow-page-contenedor'>
            <div className="fondo"></div>
            <div className="container">
                <div className="texto">
                    <div className="titles">
                        <h2>Lo mejor del</h2>
                        <img src="/Jazz.svg" alt="Cantante de Jazz" />
                    </div>
                    <div className="subtitles flex-row">
                        <FaChevronRight />
                        <div>
                            <p>Conducto: <span>Jesus Ruiz Durant</span></p>
                            <p>Jueves a Domingo a las 11 pm</p>
                        </div>
                    </div>
                </div>
                <img className='img-principal' src="/img1.png" alt="Cantante de Jazz" />
            </div>
        </section>
    )
}

export default Section1


