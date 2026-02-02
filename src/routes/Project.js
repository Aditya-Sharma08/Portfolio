import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Mid2 from "../components/Mid2";
import PricingCards from "../components/PricingCards";

const Project = () => {
  return (
    <div>
      <Navbar />
      <Mid2 heading="PROJECTS." text="Here are some of my most recent works" />
      <PricingCards />
      <Footer />
    </div>
  );
};

export default Project;
