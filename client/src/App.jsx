import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Chat from './components/Chat';

const App = () => {
  return <Chat />;
};

ReactDOM.render(<App />, document.getElementById('app'));
