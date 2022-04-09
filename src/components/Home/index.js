import React from 'react'
import './home.css'
import SobreNos from '../../pages/SobreNos'
import Servicos from '../../pages/Servicos'
import Fotos from '../../pages/Fotos'
import Contato from '../../pages/Contato'

function Home() {
    return ( 
      <div className="content">
    
        
      <div className="home">
        <SobreNos/>
        <Fotos/>
        <Servicos/>
        <Contato/>
        </div> 
      </div>
      
    )
  }

  export default Home