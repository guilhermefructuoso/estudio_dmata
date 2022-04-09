import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'
import ReactWhatsapp from 'react-whatsapp';
import './header.css'
import mic from '../../assets/header.png'



 




 function Header() {
 return (
   <div className='clearfix'>
   <div className="header">
       <div className="h1">
       <div>
       <h1>O estúdio COMPLETO que você procura!</h1>
       
       </div>
         <span>Solicite seu orçamento</span>
         <ReactWhatsapp number="5511948246506" message="Olá, gostaria de fazer um orçamento."> 
         <FaWhatsapp size={30}/> WhatsApp </ReactWhatsapp>
       </div>

       <div className="img">
       <img src={mic} alt="imagem microfone" />
       </div>

          
   </div>

   </div>

   
 );
}

export default Header