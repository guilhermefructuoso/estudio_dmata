import React from 'react'
import "./footer.css"
import logo from "../../assets/estudiodmata-negative.png"
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Footer() {
 return (
   <div className='container-footer'>
     <h5>Estúdio D'Mata</h5>
    <div className="link-footer">
      <AnchorLink href="#sobrenos">Sobre Nós</AnchorLink>
      <AnchorLink href="#fotos">Fotos</AnchorLink>
      <AnchorLink href="#servicos">Serviços</AnchorLink>
      <AnchorLink href="#contato">Contato</AnchorLink>
    </div> 
    <div className='logo-footer'>
    <img src={logo} alt="Sistema Logo" width="130px" height="60px" />
    </div>
   </div>

 
 );
}


export default Footer