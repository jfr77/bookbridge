import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//import './App.css'
import Landing from "./components/Landing";
import BrowseSection from "./components/BrowseSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Landing />
      <BrowseSection />
    </>
  );
}

export default App;
