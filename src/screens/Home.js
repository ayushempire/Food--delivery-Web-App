import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Header() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>Body</div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
