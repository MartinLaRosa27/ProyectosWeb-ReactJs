import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <footer id="footer" className="pt-4 pb-4 text-uppercase text-light">
      <div className="container d-flex align-items-center justify-content-between text-center">
        <p className="fw-bold">&copy; ProyectosWeb - 2022</p>
        <p className="fst-italic">Martín Gabriel La Rosa</p>
      </div>
    </footer>
  );
};
