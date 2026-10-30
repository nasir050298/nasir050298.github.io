import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from './pages/Home';
import Research from './pages/Research';
import Engineering from './pages/Engineering';
import './styles.css';
const path = window.location.pathname.replace(/\/+$/,'');
const Page = path === '/research' ? Research : path === '/engineering' ? Engineering : Home;
createRoot(document.getElementById('root')!).render(<React.StrictMode><Page /></React.StrictMode>);
