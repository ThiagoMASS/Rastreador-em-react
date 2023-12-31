import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AdminComponent } from './components/adminComponent/adminComponent.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const router = (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/admin" element={<AdminComponent />} />
    </Routes>
  </Router>

)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
{router}
  </React.StrictMode>,
)
