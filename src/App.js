//This File is created by Krishna
import './App.css';
import '../src/Assets/Css/main.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;