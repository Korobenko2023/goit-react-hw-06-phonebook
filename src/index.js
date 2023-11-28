import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { theme } from 'components/Services/Theme';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>    
    <Provider store={store}> 
      <BrowserRouter>
    <ThemeProvider theme={theme}>     
      <App />      
        </ThemeProvider> 
      </BrowserRouter>  
    </Provider>  
  </React.StrictMode>
);
