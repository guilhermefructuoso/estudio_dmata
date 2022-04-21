import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

ReactDOM.render(
    <BrowserRouter>
        <Helmet>
            <meta
                name="viewport"
                content="width=device-width,initial-scale=1"
            />
        </Helmet>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
)
