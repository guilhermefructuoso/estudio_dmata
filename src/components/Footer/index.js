import React from "react";
import { AiOutlineLine } from "react-icons/ai";
import { ImFacebook2 } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import { FaYoutubeSquare } from "react-icons/fa";
import { SiYamahacorporation } from "react-icons/si";
import "./footer.css";
import logo from "../../assets/estudiodmata-negative.png";
import orange from "../../assets/orange.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Footer() {
  return (
    <div className="container-footer">
      <div className="title-icon">
        <h5>Estúdio D'Mata</h5>
        <AiOutlineLine color="#24c18c" size={40} margin-left="14px" />

        <AnchorLink className="footer-link" href="#sobrenos">
          Sobre Nós
        </AnchorLink>
        <AnchorLink className="footer-link" href="#fotos">
          Fotos
        </AnchorLink>
        <AnchorLink className="footer-link" href="#servicos">
          Serviços
        </AnchorLink>
        <AnchorLink className="footer-link" href="#contato">
          Contato
        </AnchorLink>

        <img
          id="img-footer"
          src={logo}
          alt="Sistema Logo"
          width="100px"
          height="40px"
        />
      </div>

      <div className="social">
        <h5>Redes Sociais</h5>
        <AiOutlineLine color="#24c18c" size={50} />
        <div>
          <a href="https://www.facebook.com/" target="_blank" rel='noreferrer'>
            <ImFacebook2 className="footer-icon" size={30} />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel='noreferrer'>
          <GrInstagram className="footer-icon" size={30} />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel='noreferrer'>
          <FaYoutubeSquare className="footer-icon" size={33} />
          </a>
        </div>
      </div>

      <div className="parceiros">
        <h5>Parceiros</h5>
        <AiOutlineLine color="#24c18c" size={50} />
        <div>
          <SiYamahacorporation id="img-parceiros" size={50} />

          <img
            id="img-parceiros"
            src={orange}
            alt="Sistema Logo"
            width="120px"
            height="40px"
          />
          
        </div>
        
      </div>
     
    </div>
  );
}

export default Footer;
