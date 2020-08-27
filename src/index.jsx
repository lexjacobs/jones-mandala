import React from 'react';
import ReactDOM from 'react-dom';
import RainbowSpinner from './components/RainbowSpinner';
import Jones from './components/Jones';
import './styles/app.scss';

var App = (props) => (
<div>
  <Jones />  
</div>
)
<RainbowSpinner />  

const element = <App />;
ReactDOM.render(
   element,
   document.getElementById('app')
);