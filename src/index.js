import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './main/Calculator';

ReactDOM.render(
    <div>
        <h1>Calculator</h1>
        <Calculator />
        <p>Power by ReactJS</p>
    </div>, 
    document.getElementById('root')
);
