import React from 'react'
import { createRoot } from "react-dom/client";
import { FirstApp } from './FirstApp';
import './style.css'
import { CounterApp } from './CounterApp';






const root = createRoot( document.getElementById('root'))
root.render(
    <React.StrictMode>
      <CounterApp value={20}/>
    </React.StrictMode  >
)