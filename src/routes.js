import React from 'react';
import { estaautenticado } from "./autenticação";
import { BrowserRouter, Switch, Route, Redirect}  from 'react-router-dom';


const Rotaprivada = ({ component: Component,...rest }) => (
  <Route {...rest}  render={props => (
     estaautenticado() ? (
       <Component {...props}/>
     ) : (                            // não perder historico de rotas //
       <Redirect to={{pathname: '/', state: { from: props.location} }}/>
     )
  )}/>
  );


const Routes = () => ( // switch nao deixa mais de uma rota ser chamada //
  <BrowserRouter>
    <Switch> 
      <Route exact path="/" component={()=> <h1> Hello </h1>}/>
      <Rotaprivada path="/app" component={() => <h1>Você está Logado</h1>}/>
    </Switch>
  </BrowserRouter>
);

export default Routes;