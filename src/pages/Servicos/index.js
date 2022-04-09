import React from 'react';
import { MdMovie, MdLiveTv } from 'react-icons/md'
import {FaMicrophone, FaChalkboardTeacher, FaGuitar} from 'react-icons/fa'
import {RiSoundModuleFill} from 'react-icons/ri'
import './servicos.css'

function Servicos() {
 return (
   <section id='servicos'>
     <h3>Serviços</h3> 

  <div className='pai'>  
   <div className='icons'>
    
    <div className='icon'>
      <MdMovie size={100}/>
      <h5 >Gravação de vídeo profissionais.</h5>
      </div>  
    <div className='icon'>
      <MdLiveTv size={100}/>
      <h5>Lives, transmissões e streaming.</h5>
      </div>
    <div className='icon'>
      <FaMicrophone size={90}/>
      <h5>Podcast de aúdio e vídeo.</h5>
      </div>
      
    
   </div>

<div className='icons2'>
   <div className='icon'>
      <FaChalkboardTeacher size={100}/>
      <h5>Treinamentos, cursos e workshops.</h5>
      </div>
    <div className='icon'>
      <RiSoundModuleFill size={100}/>
      <h5>Mixagem e masterização de áudio.</h5>
      </div>
    <div className='icon'>
      <FaGuitar size={100}/>
      <h5>Sala de ensaio gravado.</h5>
      </div>
  </div> 
  </div> 
   </section> 
 );
}


export default Servicos