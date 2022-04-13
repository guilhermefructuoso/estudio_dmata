import React from "react";
import { MdMovie, MdLiveTv } from "react-icons/md";
import { FaMicrophone, FaChalkboardTeacher, FaGuitar } from "react-icons/fa";
import { RiSoundModuleFill } from "react-icons/ri";
import "./servicos.css";

function Servicos() {
  return (
    <section id="servicos">
      <h1>Nossos Serviços</h1>
      <div className="master">
      <div className="servicos-content">
        <div className="icons">
          <div className="icon">
            <MdMovie size={60} />
            <h4>Gravação de vídeo profissionais.</h4>
          </div>
          <div className="icon">
            <MdLiveTv size={60} />
            <h4>Lives, transmissões e streaming.</h4>
          </div>
        </div>

        <div className="icons3">
          <div className="icon">
            <FaMicrophone size={60} />
            <h4>Podcast de aúdio e vídeo.</h4>
          </div>

          <div className="icon">
            <FaChalkboardTeacher size={60} />
            <h4>Treinamentos, cursos e workshops.</h4>
          </div>
        </div>

        <div className="icons3">
          <div className="icon">
            <RiSoundModuleFill size={60} />
            <h4>Mixagem e masterização de áudio.</h4>
          </div>
          <div className="icon">
            <FaGuitar size={60} />
            <h4>Sala de ensaio gravado.</h4>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Servicos;
