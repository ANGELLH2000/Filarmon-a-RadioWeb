import React, { useRef } from 'react'
import { BsPlayCircleFill } from "react-icons/bs";
import { FaPauseCircle } from "react-icons/fa";
import { BiSolidVolumeMute } from "react-icons/bi";
import { IoPersonOutline } from "react-icons/io5";
import { IoMdMusicalNotes } from "react-icons/io";
import './Reproductor.css'
function Reproductor() {
    const audioRef = useRef();
    const pause = useRef();
    const play = useRef();
    const playAudio = () => {
        audioRef.current.play();
        play.current.classList.toggle('none');
        pause.current.classList.toggle('none');
    };

    const pauseAudio = () => {
        audioRef.current.pause();
        play.current.classList.toggle('none');
        pause.current.classList.toggle('none');
    };

    const muteAudio = () => {
        audioRef.current.muted = !audioRef.current.muted;
    };
    return (
        <div className='Reproducto grow-page-contenedor'>
            <audio ref={audioRef} controls>
                <source src="https://c22.radioboss.fm:8100/stream" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            <div className="container">
                <div className="song flex-row">
                    <img src="https://images.unsplash.com/photo-1602701522049-00d25ac583ff?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Artisat de Jazz" />
                    <div className="singer">
                        <h3>What a Wonderful World</h3>
                        <p>Louis Armsrong</p>
                    </div>
                </div>
                <div className="controls flex-row">
                    <button ref={play} onClick={playAudio} className='play'><BsPlayCircleFill /></button>
                    <button ref={pause} onClick={pauseAudio} className='none'><FaPauseCircle /></button>
                </div>

                <div className="rigth">
                    <div className="controls2 flex-row">
                        <div className="botons flex-col">
                            <BiSolidVolumeMute />
                            <p>Silenciar</p>
                        </div>
                        <div className="botons flex-col">
                            <IoPersonOutline />
                            <p>Artista</p>
                        </div>
                        <div className="botons flex-col">
                            <IoMdMusicalNotes />
                            <p>PlayList</p>
                        </div>
                    </div>
                    <div className="info flex-col">
                        <h5>Programa:</h5>
                        <p>Lo Mejor del Jazz</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reproductor
