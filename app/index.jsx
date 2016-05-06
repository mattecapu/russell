import React from 'react';
import ReactDOM from 'react-dom';

import Russell from './components/russell';

window.addEventListener(
    'DOMContentLoaded',
    () => ReactDOM.render(<Russell />, document.getElementById('react-root')),
    false
);
