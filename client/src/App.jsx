import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "../src/Pages/Home";
import SignUp from "../src/Pages/SignUp";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import Login from "./Pages/Login";
import Navbar from "./components/Navbar";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
    <Navbar/>
      <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
