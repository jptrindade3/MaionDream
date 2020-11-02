import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'; //é importante baixar as tipagens referentes ao rrd, pq nem todos os pacotes já vem junto dessa tipagem pro TS, e temos que adicionar manualmente com o npm install


function Routes(){
    return(
        <BrowserRouter>
            <Switch> {/* o Switch deixa com que só uma das rotas seja chamada por vez*/}
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;