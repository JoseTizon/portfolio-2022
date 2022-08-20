import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Body from './components/Body'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {

  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Body />} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}

export default App
