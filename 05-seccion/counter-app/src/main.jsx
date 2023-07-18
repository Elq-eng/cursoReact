import React from 'react'
import { createRoot } from "react-dom/client";
import { FirstApp } from './FirstApp';
import './style.css'
import { CounterApp } from './CounterApp';






const root = createRoot( document.getElementById('root'))
root.render(
    <React.StrictMode>
      {/* <FirstApp title='Hola soy Goku'/> */}
      <CounterApp value={100}/>
    </React.StrictMode  >
)