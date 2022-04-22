import './nav.css'
import Modal from 'react-modal'
import { useState } from 'react'
import logo from '../../assets/estudiodmata-negative.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import useMediaQuery from '@mui/material/useMediaQuery'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RiCloseFill } from 'react-icons/ri'

Modal.setAppElement('#root');
const customStyles = {
    content: {
        width: '300px',
        padding: '0',
        height: '310px',
        color: '#fff',
        background: '#171c47',
        top: '235px',
        right: 'auto',
        bottom: 'auto',
        borderRadius: '8px',
        left: '75%',
        transform: 'translate(-50%, -50%)',
        border: 'none',
        scroll: 'hidden',
    },
    overlay: {
        backgroundColor: 'rgba(255, 255, 255, 0)'
        }
        
}

function NavBar() {
    const [modalIsOpen, setIsOpen] = useState(false)

    function handleOpenModal() {
        setIsOpen(true)
    }

    function handleCloseModal() {
        setIsOpen(false)
    }

    const isTablet = useMediaQuery('(max-width:1280px)')
    const isMobile = useMediaQuery('(max-width:700px)')
    customStyles.content.width = isMobile ? '100%' : '300px'
    customStyles.content.left = isMobile ? '50%' : '75%'
    customStyles.content.height = isMobile ? '320px' : '310px'
   

    return (
        <section id="nav">
            <nav className="nav-container">
                <div className="logo">
                    <AnchorLink href="#nav">
                        <img src={logo} alt="Sistema Logo" />
                    </AnchorLink>
                </div>
                <div className="menu">
                    {isTablet ? (
                        <div className="menu-navi">
                            <button
                                className="modal-button"
                                onClick={handleOpenModal}
                            >
                                <GiHamburgerMenu size={30} color="#fff" />
                            </button>
                            <Modal
                                isOpen={modalIsOpen}
                                onRequestClose={handleCloseModal}
                                style={customStyles}
                            >
                                <button
                                    className="close-button"
                                    onClick={handleCloseModal}
                                >
                                    <RiCloseFill size={25} color="#fff" />
                                </button>

                                <div className="menu-modal">
                                    <div className="anchor-modal">
                                        <AnchorLink href="#sobrenos">
                                            Sobre Nós
                                        </AnchorLink>
                                    </div>
                                    <div className="anchor-modal">
                                        <AnchorLink href="#fotos">
                                            Fotos
                                        </AnchorLink>
                                    </div>
                                    <div className="anchor-modal">
                                        <AnchorLink href="#servicos">
                                            Serviços
                                        </AnchorLink>
                                    </div>
                                    <div className="anchor-modal">
                                        <AnchorLink href="#contato">
                                            Contato
                                        </AnchorLink>
                                    </div>
                                </div>
                            </Modal>
                        </div>
                    ) : (
                        <div className="menu-anchor">
                            <div className="anchor">
                                <AnchorLink href="#sobrenos">
                                    Sobre Nós
                                </AnchorLink>
                            </div>
                            <div className="anchor">
                                <AnchorLink href="#fotos">Fotos</AnchorLink>
                            </div>
                            <div className="anchor">
                                <AnchorLink href="#servicos">
                                    Serviços
                                </AnchorLink>
                            </div>
                            <div className="anchor">
                                <AnchorLink href="#contato">Contato</AnchorLink>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </section>
    )
}

export default NavBar
