import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import ReactWhatsapp from 'react-whatsapp'
import useMediaQuery from '@mui/material/useMediaQuery'
import './header.css'
import mic from '../../assets/microfone3.png'
import micres from '../../assets/microfone-alta.png'

function Header() {
    const isTablet = useMediaQuery('(max-width: 1280px)')

    return (
        <div className="header-container">
            <div className="title-h1">
                <div className="new">
                    <div className="h1-header">
                        <h1>
                            O estúdio COMPLETO <br /> que você procura!
                        </h1>
                    </div>
                    <div className="span-h1">
                        <span>Solicite o seu orçamento</span>
                    </div>
                    <div className="header-button">
                        <ReactWhatsapp
                            number="5511948246506"
                            message="Olá, gostaria de fazer um orçamento."
                        >
                            <FaWhatsapp size={32} /> WhatsApp
                        </ReactWhatsapp>
                    </div>
                </div>
            </div>

            {isTablet ? (
                <div className="img-responsive">
                    <img
                        className="microfone-responsive"
                        src={micres}
                        alt="imagem microfone"
                    />
                </div>
            ) : (
                <div className="img-header">
                    <img
                        className="microfone"
                        src={mic}
                        alt="imagem microfone"
                    />
                </div>
            )}
        </div>
    )
}

export default Header
