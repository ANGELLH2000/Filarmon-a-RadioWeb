import React, { useRef } from 'react'
import './NavBar.css'
import { FaBars } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
function NavBar() {
    const menu = useRef()
    const boton_menu = useRef()
    const boton_menu_not = useRef()
    const handleClick = () => {
        console.log("hola")
        menu.current.style.display = 'block';
        boton_menu.current.style.visibility = 'hidden';
        boton_menu_not.current.style.display = 'block';
    }
    const handleClick_not = () => {
        console.log("hola")
        menu.current.style.display = 'none';
        boton_menu.current.style.visibility = 'visible';
        boton_menu_not.current.style.display = 'none';
    }
    return (
        <div className="containerNavBar">
            <nav className='flex-row'>
                <img src="/logo.svg" alt="Logo de Filarmonia" />
                <ul className='flex-row'>
                    <li><a href="">INICIO</a></li>
                    <li className='active'><a href="">RADIO EN VIVO</a></li>
                    <li><a href="">QUIENES SOMOS</a></li>
                    <li><a href="">AUSPICIADORES</a></li>
                    <li><a href="">CONTACTO</a></li>
                </ul>
                <div ref={boton_menu} className="bar">
                    <FaBars onClick={handleClick} />
                </div>
                <div ref={boton_menu_not} className="not">
                    <FaPlus onClick={handleClick_not}/>
                </div>

            </nav>
            <div ref={menu} className="options">
                <ul >
                    <li className='flex-row'><a href="">INICIO</a></li>
                    <li className='flex-row'><a href="">RADIO EN VIVO</a></li>
                    <li className='flex-row'><a href="">QUIENES SOMOS</a></li>
                    <li className='flex-row'><a href="">AUSPICIADORES</a></li>
                    <li className='flex-row'><a href="">CONTACTO</a></li>
                </ul>
            </div>

        </div>
    )
}

export default NavBar
