import React from 'react';
import ReactDOM from 'react-dom';
// import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';

//importar css
import './index.css';

const divRoot = document.querySelector('#root');

ReactDOM.render( <CounterApp />, divRoot );
// ReactDOM.render( <PrimeraApp saludo='Hola soy Daniel'/>, divRoot );