import "./App.css";
import Navbar from "./components/Navbar.jsx";
import { Button } from "./components/ui/button";
import { BrowserRouter } from "react-router-dom";
import SplashCursor from "./reactbits/SplashCursor/SplashCursor";
import SplitText from "./reactbits/SplitText/SplitText";
import { Player } from "@lottiefiles/react-lottie-player";
import animationData from './animations/Animation1.json';
import Hero from "./components/Hero";
import Abou from "./components/Abou";
import StackCard from "./components/StackCard";
import Particles from "./reactbits/Particles/Particles";
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
