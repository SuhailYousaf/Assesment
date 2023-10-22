import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";
import Home from "./Pages/Home";
import Add from "./Components/Add";
import Edit from "./Components/Edit";
import Footer from "./Components/Footer/Footer";
function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="App">
                <ToastContainer />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create" element={<Add />} />
                    <Route path="/edit" element={<Edit />} />
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
