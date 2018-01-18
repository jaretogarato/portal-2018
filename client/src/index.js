import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import {injectGlobal} from 'styled-components'

injectGlobal`
  @font-face {
    src: url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
  }

  html :not(i) {
    font-family: 'Source Sans Pro', sans-serif !important;
  }
`

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
