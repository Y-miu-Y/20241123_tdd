import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Post } from './Post'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<App />}></Route>
        <Route path="/posts/1" element={<Post/>}></Route>
      </Routes>
    </BrowserRouter>
    
  </StrictMode>,
)
