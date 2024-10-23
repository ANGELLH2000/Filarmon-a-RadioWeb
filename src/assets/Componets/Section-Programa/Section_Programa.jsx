import React from 'react'
import { FiRadio } from "react-icons/fi";
import './Section_Programa.css'
function Section_Programa() {
    return (
        <div className='Section_Programa grow-page-contenedor'>
            <div className="container">
                <div className="textos flex-col">
                    <div className="online flex-row">
                        <FiRadio />
                        <p>Programa Actual</p>
                    </div>
                    <div className="titles flex-col">
                        <h3>Lo Mejor del Jazz</h3>
                        <p>Conduce: Jesús Ruiz Durand</p>
                    </div>
                    <p className="description">
                        Disfruta de una experiencia auditiva única con una selección de los mejores clásicos del jazz y las tendencias más modernas del género. Cada episodio te invita a sumergirte en las melodías que han marcado generaciones y los sonidos innovadores que están moldeando el futuro del jazz.
                    </p>
                    <p className="horario">
                        Escúchalo: Jueves a Domingo a las 11 pm
                    </p>
                </div>
                <img src="https://plus.unsplash.com/premium_photo-1688700438077-139097489c4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Locutor de Filarmonia" />
            </div>
        </div>
    )
}

export default Section_Programa
