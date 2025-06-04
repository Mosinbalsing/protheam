import "./App.css";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter } from "react-router-dom";
import SplashCursor from "./reactbits/SplashCursor/SplashCursor";
import Hero from "./components/Hero";
import Abou from "./components/Abou";
import StackCard, { Card } from "./components/StackCard";
function App() {
  
  return (
    <>
      <SplashCursor />
      
      <BrowserRouter>
        <Navbar />
        <Hero/>
        <Abou />
        <StackCard />
      </BrowserRouter>
    
    </>
  );
}

export default App;
