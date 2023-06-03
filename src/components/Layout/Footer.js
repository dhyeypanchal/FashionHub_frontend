import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <h4 className="text-center">All Right Reserved &copy; FashionHub</h4>
      <p className="text-center">[<Link to="/contact">Contact</Link>]</p>
    </div>
  );
};

export default Footer;
