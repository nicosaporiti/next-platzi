import React from "react";
import Navbar from "@components/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Navbar />
      {children}
      <footer>Este es el footer</footer>
      <style jsx>{`
      .container {
        background: salmon;
      }
      `}</style>
    </div>
  );
};

export default Layout;
