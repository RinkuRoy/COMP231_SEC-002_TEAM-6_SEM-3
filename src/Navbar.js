import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/finddoctor">Find a Doctor</a></li>
        <li><a href="/aboutus">About us</a></li>
        <li><a href="/contactus">Contact us</a></li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
};

export default Navbar;
