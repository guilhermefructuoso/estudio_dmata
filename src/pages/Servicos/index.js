import React from 'react';
import { MdMovie, MdLiveTv } from 'react-icons/md'
import {FaMicrophone, FaChalkboardTeacher, FaGuitar} from 'react-icons/fa'
import {RiSoundModuleFill} from 'react-icons/ri'
import './servicos.css'

function Servicos() {
 return (
   <section id='servicos'>
     <h3>Serviços</h3> 

  <div className='servicos-content'>  
   <div className='icons'>
    
    <div className='icon'>
      <MdMovie size={100}/>
      <h4>Gravação de vídeo profissionais.</h4>
      </div>  
    <div className='icon'>
      <MdLiveTv size={100}/>
      <h4>Lives, transmissões e streaming.</h4>
      </div>
    <div className='icon'>
      <FaMicrophone size={90}/>
      <h4>Podcast de aúdio e vídeo.</h4>
      </div>
      
    
   </div>

<div className='icons2'>
   <div className='icon'>
      <FaChalkboardTeacher size={100}/>
      <h4>Treinamentos, cursos e workshops.</h4>
      </div>
    <div className='icon'>
      <RiSoundModuleFill size={100}/>
      <h4>Mixagem e masterização de áudio.</h4>
      </div>
    <div className='icon'>
      <FaGuitar size={100}/>
      <h4>Sala de ensaio gravado.</h4>
      </div>
  </div> 
  </div> 
   </section> 
 );
}


export default Servicos