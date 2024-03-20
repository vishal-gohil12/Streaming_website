import React from "react";
import Navbar from "../components/Navbar";
import HomeScreen from "../components/screens/homeScreen";
import Footer from "../components/Footer";

export default function Service() {
  return (
    <>
      <div className="h-screen">
        <Navbar />
        <HomeScreen />
      </div>
      <Footer />
    </>
  );
}
