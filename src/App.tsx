import './App.css'
import { Button } from './components/Button/Index'
import { Title } from './components/Title/Index'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { NavBarMenu } from './components/NavBarMenu'
import { StateExample } from './pages/StateExample'
import { Gallery } from './components/Gallery'
import { MenuItem } from './components/MenuItem'
import { Menu } from './components/Menu'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Agenda } from './components/Contacs'

function App() {
  return (
    <div id="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
        <Routes>
          <Route path='/gallery' element={<Gallery/>}/>
        </Routes>
        <Routes>
          <Route path='/agenda' element={<Agenda/>}/>
        </Routes>

        <NavBarMenu />

      </BrowserRouter>
    </div>
  )
}

export default App
