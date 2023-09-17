import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './views/home/home'
import Landing from './views/landing/landing'
function App() {
  
  return (
    <div>
      <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/detail/:id" element={<Detail />} />
          <Route path="/form" element={<Form/>}/> */}
        </Routes>
    </div>
  )
}

export default App
