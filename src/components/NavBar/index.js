import './nav.css'
import Modal from 'react-modal'
import { useState } from 'react'
import logo from '../../assets/estudiodmata-negative.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import useMediaQuery from '@mui/material/useMediaQuery'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RiCloseFill } from 'react-icons/ri'

const customStyles = {
    content: {
        width: '25%',
        padding: '0',
        height: '320px',
        color: '#fff',
        background: '#171c47',
        top: '25%',
        left: '75%',
        right: 'auto',
        bottom: 'auto',
        borderRadius: '8px',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        
    },
}

function NavBar() {
    const [modalIsOpen, setIsOpen] = useState(false)

    function handleOpenModal() {
        setIsOpen(true)
    }

    function handleCloseModal() {
        setIsOpen(false)
    }

    const menu = useMediaQuery('(max-width:1280px)')

    return (
        <section id="nav">
            <nav className="nav-container">
                <div className="logo">
                    <AnchorLink href="#nav">
                        <img src={logo} alt="Sistema Logo" />
                    </AnchorLink>
                </div>
                <div className="menu">
                    {/*    <div className='menu-anchor'>
                    <div className="anchor">
                        <AnchorLink href="#sobrenos">Sobre Nós</AnchorLink>
                    </div>
                    <div className="anchor">
                        <AnchorLink href="#fotos">Fotos</AnchorLink>
                    </div>
                    <div className="anchor">
                        <AnchorLink href="#servicos">Serviços</AnchorLink>
                    </div>
                    <div className="anchor">
                        <AnchorLink href="#contato">Contato</AnchorLink>
                    </div>
                    </div> */}
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
                                    <AnchorLink href="#fotos">Fotos</AnchorLink>
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
                </div>
            </nav>
        </section>
    )
}

export default NavBar
