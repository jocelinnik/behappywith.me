import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route } from "react-router-dom";

const Principal = function(){
    return <h1>Página principal</h1>
}

const Dados = function(){
    return <h1>Dados de dados</h1>
}

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path="/" component={Principal} />
            <Route exact path="/dados" component={Dados} />
            <br/><br/>
            <Link to="/">Principal</Link> - <Link to="/dados">Dados</Link>
        </div>
    </BrowserRouter>,
    document.querySelector("#main")
);