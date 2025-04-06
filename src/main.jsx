// import { StrictMode } from 'react'
import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { WatchlistProvider } from "./context/WatchlistContext.jsx";
import { SearchProvider } from "./context/SearchContext.jsx";
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <WatchlistProvider>
    <BrowserRouter>
       <SearchProvider>
         <App />
       </SearchProvider>
    </BrowserRouter>
  </WatchlistProvider>
)
