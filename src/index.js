import React from 'react';
import { createRoot } from 'react-dom/client'; // new API in React 18
import App from './App';

const root = createRoot(document.getElementById('root')); // createRoot is now used
root.render(<App />);
