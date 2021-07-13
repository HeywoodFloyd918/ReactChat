import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import ChatState from './Context/ChatState';

ReactDOM.render(
  <React.StrictMode>
    <ChatState>
      <App />
    </ChatState>
  </React.StrictMode>,
  document.getElementById('root')
);

