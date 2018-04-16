import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld';
import './styles/app.scss';

const element = <HelloWorld name="Sara" />;
ReactDOM.render(
   element,
   document.getElementById('app')
);