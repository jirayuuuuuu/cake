import React from 'react';

function Navbar() {
  return (
    <nav className="bg-[#8B4513] p-4"> {/* สีน้ำตาลโทนกาแฟ */}
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="text-white text-2xl font-bold">
          Cake
        </a>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="text-white hover:text-[#D2B48C]">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="text-white hover:text-[#D2B48C]">
              About
            </a>
          </li>
          <li>
            <a href="/products" className="text-white hover:text-[#D2B48C]">
              Products
            </a>
          </li>
          <li>
            <a href="/contact" className="text-white hover:text-[#D2B48C]">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;