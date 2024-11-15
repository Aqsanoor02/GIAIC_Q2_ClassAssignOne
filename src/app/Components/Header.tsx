import Link from "next/link";
import React from "react";
import Button from "./Button";

function Header() {
  return (
    <div className="flex pt-4 bg-blue-950 text-white h-16 justify-between">
      <div className="">
        <span className="font-semibold ml-4">Glimck</span>
      </div>

      <div className="flex  gap-16">
        <div className="space-x-6 ">
          <Link className="hover:text-red-600" href="/Hero" id="home">
            Home
          </Link>
          <Link className="hover:text-red-600" href="/About" >
            About Us
          </Link>
          <Link className="hover:text-red-600" href="/Ourwork">
            Our Work
          </Link>
          <Link className="hover:text-red-600" href="/Services">
            Services
          </Link>
          <Link className="hover:text-red-600" href="/Contact">
            Contact
          </Link>
        </div>
        <div>
          <Button />
        </div>
      </div>
    </div>
  );
}

export default Header;
