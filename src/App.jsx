import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Login } from "./Pages/Login"

function App() {

  return (
      <Routes>
        <Route path="/" element={<Login/>} />
      </Routes>
  )
}

export default App
