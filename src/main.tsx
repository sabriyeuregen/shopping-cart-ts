import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ShoppingCartProvider } from './store/shoppingcart-contex'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ShoppingCartProvider>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </ShoppingCartProvider>
  
)
