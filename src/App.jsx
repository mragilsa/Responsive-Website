import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";

const App = () => {
  return (
    <div className="bg-background">
      <Navbar />
      <Hero />
      <Stats />
    </div>
  )
}

export default App;
