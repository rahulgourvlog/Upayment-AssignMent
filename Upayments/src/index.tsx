import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
 import App from './App';
 import { Provider } from 'react-redux';
import {BrowserRouter} from "react-router-dom"

import {store} from './Reduxts/store';
import { ChakraProvider } from '@chakra-ui/react';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ChakraProvider>
  <BrowserRouter>
 <Provider store={store}>
<App />
</Provider> 
</BrowserRouter>
</ChakraProvider>
);


