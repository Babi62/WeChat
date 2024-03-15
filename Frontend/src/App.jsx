import "./App.css";
import Login from "./pages/Login/login";
import Signup from "./pages/signup/signup";
import Home from "./pages/home/home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
