import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="bg-base-200 shadow-2xl">
      <div className="navbar">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/about">Aboutk</Link>
            </li>
            <li>
              <Link href="/price">price</Link>
            </li>
            <li>
              <Link href="/contact">href="/about"</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
