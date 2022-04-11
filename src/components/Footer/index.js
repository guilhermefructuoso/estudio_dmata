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
        <h5>Social</h5>
        <AiOutlineLine
          className="line"
          color="#24c18c"
          size={40}
          margin-left="14px"
        />
      </div>

      <div className="parceiros">
         <h5>Parceiros</h5>
         <AiOutlineLine
          className="line"
          color="#24c18c"
          size={40}
          
        />
        </div>
      </div>
  );
}

export default Footer;
