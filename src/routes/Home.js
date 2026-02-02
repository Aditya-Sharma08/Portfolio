<<<<<<< HEAD
import React from "react";
import Navbar from "../components/Navbar";
import Mid from "../components/Mid";
import Footer from "../components/Footer";

const Home = () => {
  return <div>
    <Navbar />
    <Mid text="Hi! I'm Aditya." bigText="Creator, Editor, Frontend Developer." btn1="Projects" btn2="Contact"/>
    <Footer />
  </div>;
};

export default Home;
=======
import React from "react";
import Navbar from "../components/Navbar";
import Mid from "../components/Mid";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Mid
        text="Hi! I'm Aditya."
        bigText="Creator, Editor, Frontend Developer."
        btn1="Projects"
        btn2="Contact"
      />
      <Footer />
    </div>
  );
};

export default Home;
>>>>>>> master
