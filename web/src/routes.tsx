import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'; //é importante baixar as tipagens referentes ao rrd, pq nem todos os pacotes já vem junto dessa tipagem pro TS, e temos que adicionar manualmente com o npm install

// Páginas
import Menu from './pages/Menu'

function Routes(){
    return(
        <BrowserRouter>
            <Switch> {/* o Switch deixa com que só uma das rotas seja chamada por vez*/}
                <Route path="/" exact component={Menu}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;