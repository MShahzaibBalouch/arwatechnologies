import "./App.css";
import "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavigationBar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
    <NavigationBar />
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
