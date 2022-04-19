import './nav.css'
import logo from '../../assets/estudiodmata-negative.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function NavBar() {

    return (
        <section id="nav">
            <nav>
                <div className="nav-container">
                    <div className="logo">
                        <AnchorLink href="#nav">
                            <img src={logo} alt="Sistema Logo" />
                        </AnchorLink>
                    </div>
                    <div className="link">
                        <AnchorLink href="#sobrenos">Sobre Nós</AnchorLink>
                        <AnchorLink href="#fotos">Fotos</AnchorLink>
                        <AnchorLink href="#servicos">Serviços</AnchorLink>
                        <AnchorLink href="#contato">Contato</AnchorLink>
                    </div>
                </div>
            </nav>
        </section>
    )
}

export default NavBar
