import React from "react";
import { FaHashtag } from "react-icons/fa";
function Footer() {
  const footerYear = new Date().getFullYear();
  return (
    <div className="footer p-5 bg-gray-700 text-primary-content footer-center">
      <div className="text-primary">
        <FaHashtag className="text-4xl"/>
        <p>Copyright &copy; {footerYear} All rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
