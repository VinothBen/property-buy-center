import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/importer.css';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
