import './App.css'
import { Button } from './components/Button/Index'
import { Title } from './components/Title/Index'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { NavBarMenu } from './components/NavBarMenu'
import { StateExample } from './pages/StateExample'
import { Gallery } from './components/Gallery'

function App() {
  return (
    <div id="App">
       <Gallery/>
       <NavBarMenu/>
    </div>
  )
}

export default App
