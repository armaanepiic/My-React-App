import { BrowserRouter, Route, Routes } from 'react-router'
import App from '../App'
import About from '../pages/About'
import Login from '../pages/Login'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}
