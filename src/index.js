import React from 'react';
import { render, hydrate } from 'react-dom';
import App from './App';

// const browserZoomLevel = Math.round(window.devicePixelRatio * 100);


const root = document.getElementById("root");
if (root.hasChildNodes()) {
  hydrate(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    root);
} else {
  render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    root);
}
