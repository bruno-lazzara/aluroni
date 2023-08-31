import React from 'react';
import 'normalize.css';
import './index.css';
import { createRoot } from 'react-dom/client';
import Router from 'routes';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
    <React.StrictMode>
        <Router />
    </React.StrictMode>
);
