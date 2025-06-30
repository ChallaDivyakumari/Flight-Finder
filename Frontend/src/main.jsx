import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './context/AuthContext.jsx'
import AdminProvider from './context/AdminContext.jsx'
import FlightProvider from './context/FlightContext.jsx'
import BookingProvider from './context/BookingContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <BookingProvider>
          <FlightProvider>
            <AdminProvider>
              <App />
            </AdminProvider>
          </FlightProvider>
        </BookingProvider>
      </AuthProvider>
      
    </BrowserRouter>
  </StrictMode>,
)
