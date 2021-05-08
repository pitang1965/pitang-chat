import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Chat from 'chat/Chat';
import { Layout } from './components/Layout';

const App = () => {
  return (
    <Layout>
      <Chat />
    </Layout>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
