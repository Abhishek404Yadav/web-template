import React from "react";
import NavBar from "./Navbar";
import HeroSec from "./HeroSec";
import AppSec from "./AppSec";
import CardSec from "./CardSec";
import Footer from "./Footer";

const App= ()=>{
  return (
    <div>
      <NavBar/>
      <HeroSec/>
      <AppSec/>
      <CardSec/>
      <Footer/>
    </div>
  )
}
export default App;