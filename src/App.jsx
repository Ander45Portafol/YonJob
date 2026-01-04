import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Login } from "./Pages/Login";
import { Principal } from "./Layout/Principal";
import { Dashboard } from "./Pages/Dashboard";
import { Opportunities } from "./Pages/Opportunities";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Admin" element={<Principal />}>
        <Route index element={<Dashboard />} />
      </Route>
      <Route path="/opportunities" element={<Opportunities />} />
    </Routes>
  );
}

export default App;
