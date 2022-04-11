import React from "react";
import { AiOutlineLine } from "react-icons/ai";
import "./footer.css";
import logo from "../../assets/estudiodmata-negative.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Footer() {
  return (
    <div className="container-footer">
        
      <div className="title-icon">
        <h5>Estúdio D'Mata</h5>
        <AiOutlineLine
          className="line"
          color="#24c18c"
          size={40}
          margin-left="14px"
        />
      
      
        <div className="link-footer">
          <AnchorLink href="#sobrenos">Sobre Nós</AnchorLink>
          <AnchorLink href="#fotos">Fotos</AnchorLink>
          <AnchorLink href="#servicos">Serviços</AnchorLink>
          <AnchorLink href="#contato">Contato</AnchorLink>
        </div>
       
      </div>
      <div className="logo-footer">
        <img src={logo} alt="Sistema Logo" width="100px" height="40px" />
      </div>
         
    </div>
  );
}

export default Footer;
