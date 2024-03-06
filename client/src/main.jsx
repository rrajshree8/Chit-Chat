
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import {HelmetProvider} from 'react-helmet-async'

ReactDOM.render(
 <HelmetProvider>
   <ChakraProvider>
    <App />
  </ChakraProvider>
 </HelmetProvider>,
  document.getElementById('root')
);
