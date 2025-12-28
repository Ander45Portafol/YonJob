import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Login } from "./Pages/Login"
import { Principal } from './Layout/Principal';

function App() {

  return (
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Admin" element={<Principal/>} />

      </Routes>
  )
}

export default App
