import React from 'react';
import 'normalize.css';
import './index.css';
import Cardapio from './pages/Cardapio';
import Inicio from 'pages/Inicio';
import { createRoot } from 'react-dom/client';
import Router from 'routes';

const componenteAtual = window.location.pathname === '/' ? <Inicio /> : <Cardapio />;

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
    <React.StrictMode>
        <Router />
    </React.StrictMode>
);
