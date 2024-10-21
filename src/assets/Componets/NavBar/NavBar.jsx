import React from 'react'
import './NavBar.css'
import { FaBars } from "react-icons/fa";
function NavBar() {
    return (
        <div className="containerNavBar">
            <nav className='flex-row'>
                <img src="/logo.svg" alt="Logo de Filarmonia" />
                <ul className='flex-row'>
                    <li><a href="">INICIO</a></li>
                    <li><a href="">RADIO EN VIVO</a></li>
                    <li><a href="">QUIENES SOMOS</a></li>
                    <li><a href="">AUSPICIADORES</a></li>
                    <li><a href="">CONTACTO</a></li>
                </ul>
                <FaBars />
            </nav>
        </div>
    )
}

export default NavBar
