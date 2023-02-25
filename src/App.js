import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registeration from "./Registeration";
import Login from "./Login";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Features from "./components/Features";
import About from "./components/About";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeNav from "./components/HomeNav";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Registeration />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/HomeNav" element={<HomeNav />} />
          <Route path="/About" element={<About />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Features" element={<Features />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
