import React from "react";
import "./App.css";

import NewCollections from "./components/NewCollection";
import About from "./components/About";
import WhyChoose from "./components/WhyChoose";
import ShpByRoom from "./components/ShpByRoom";
import ShopBycategories from "./components/ShopBycategories";
import ExploreMore from "./components/ExploreMore";
import CustomerReview from "./components/CustomerReview";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function App() {
  return (
    <div className="font-sans">
      {/* Navbar */}
     

      {/* Hero Section */}
    
<Navbar/>
<Hero/>
      <NewCollections/>
      <About/>
      <WhyChoose/>
      
      <ShpByRoom/>
      <ShopBycategories/>
      <ExploreMore/>
      <CustomerReview/>
      
      <Footer/>
      
    </div>
  );
}

