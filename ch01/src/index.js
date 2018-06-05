import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import Hello from './Components/Hello';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('main-content'));
registerServiceWorker();
