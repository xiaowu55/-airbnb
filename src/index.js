import React,{Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theme from './assets/theme';

import App from '@/App';
import './assets/css/index.less'
import 'normalize.css'
import store from './store'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <HashRouter>
            <App />
          </HashRouter>
        </ThemeProvider>
      </Provider>
    </Suspense>
  </React.StrictMode>
);

