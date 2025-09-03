import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react';
import QuoteGenerator from './QuoteGenerator.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QuoteGenerator/>
  </StrictMode>,
)
