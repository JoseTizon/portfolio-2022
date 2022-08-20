import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Body from './components/Body'
import NavBar from './components/NavBar'

function App() {

  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Body />} />
      </Routes>
    </HashRouter>
  )
}

export default App
