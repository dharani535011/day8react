

import './App.css'
import Home from './pages/Home'
import {ItemsProvider} from "./Contexts/ItemsContext"





function App() {
  

  return (
    <>
    
    <ItemsProvider>
    <Home/>
    </ItemsProvider>
    </>
  )
}

export default App
