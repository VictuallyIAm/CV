import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import MainLayout from './Layouts/MainLayout'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/my-cv-app" element={<MainLayout />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
