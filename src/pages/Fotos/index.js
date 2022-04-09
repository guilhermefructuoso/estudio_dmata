import React from 'react';
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import './fotos.css'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'

function Fotos() {
 return (
   <section id='fotos'>
     <h2>Confira nossas fotos!</h2>
   <div className='carousel'>
   <Carousel> 
   <div>
    <img src={img1} alt="estudio"/>
    <p className="legend">Estudio 1</p>
   </div>
   <div>
    <img src={img2} alt="estudio"/>
    <p className="legend">Estudio 2</p>
   </div>
   <div>
    <img src={img3} alt="estudio"/>
    <p className="legend">Estudio 1</p>
   </div>
   <div>
    <img src={img4} alt="estudio"/>
    <p className="legend">Estudio 2</p>
   </div>
   </Carousel> 
   </div>  
   </section> 
 );
}




export default Fotos