import React from 'react'
import {
    Route,
    Switch,
    BrowserRouter,
    Redirect,
    withRouter,
} from 'react-router-dom'
import Home from './components/Home'
import SobreNos from './pages/SobreNos'

function routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/sobrenos" component={SobreNos} />
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    )
}

export default withRouter(routes)
