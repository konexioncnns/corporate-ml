// resources/js/components/HelloReact.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import Header from './Header';

export default function HelloReact() {
    return (
        <App />
       
    );
}

if (document.getElementById('root')) {
    ReactDOM.render(<HelloReact />, document.getElementById('root'));
}