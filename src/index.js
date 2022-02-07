import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from './context/context'
import './index.css';
import App from './App';
import './assets/fonts/DejaVuSansMono.ttf';
import { SpeechProvider } from '@speechly/react-client'

const appId = "d124e81a-264e-403f-86f6-669fed950e1a"

ReactDOM.render(
  <SpeechProvider appId={appId} language="en-US">
      <Provider>
        <App />
      </Provider>
  </SpeechProvider>,
  document.getElementById('root')
);
