import React from 'react'
import NavBar from './components/NavBar'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Header />
            <Home />
            <Footer />
        </BrowserRouter>
    )
}

export default App
