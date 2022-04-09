import React from 'react';
import {useState} from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import './contato.css'

function Contato() {
  const [field, setField] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyB-pq9yyNxIIg8Z_ljFKxhfCqjmX6gkCKc"
  })

  function handleInputChange(e){
    field[e.target.name] = e.target.value
    setField(field)
  }

  function handleFormSubmit(e){
    e.preventDefault()
    console.log(field)
  }


  const position = {
    lat: -23.704065,
    lng: -46.549599
  }
  

 return (
  <section id='contato'>
    <div className='main'>
     <div className='contact'>
    <form onSubmit={handleFormSubmit}>
     <label htmlFor="name">Nome</label>
      <input type="name" id="name" name="name" placeholder="Digite seu nome..." onChange={handleInputChange}/>

      <label htmlFor="email">E-mail</label>
      <input type="text" id="email" name="email" placeholder="Digite seu email..." onChange={handleInputChange}/>

      <label htmlFor="phone">Telefone</label>
      <input type="phone" id="phone" name="phone" placeholder="Digite seu telefone..." onChange={handleInputChange}/>

      <label htmlFor="menssagem">Mensagem</label>
      <textarea id="message" name="message" onChange={handleInputChange}> </textarea>

      <input type="submit" value="Enviar" />
    </form>
    </div>

   <div className="map">
   {isLoaded ? (
      <GoogleMap
        mapContainerStyle={{width: '100%', height: '100%' }}
        center={position}
        zoom={15}
      >
        <Marker position={position}/>
      </GoogleMap>
  ) : (<></>

  )}
   </div>
   </div>
  </section>  
 );
}


export default Contato