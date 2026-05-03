//navigation bar


// this page needs:
// title of site and logo 
// logo and text of the home, create, examples, how to, what is pages 
// needs to be useable from a keyboard only - tab through 


import React from "react";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-emerald-800 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Link href="/create">
                  <p>Create Your Rider</p>
                </Link>
              </li>
              <li>
                <Link href="/examples">
                  <p>Examples</p>
                </Link>
              </li>
              <li>
                <Link href="/how-to-use">
                  <p>How To Use This Site</p>
                </Link>
              </li>
              <li>
                <Link href="/what-is-an-access-rider">
                  <p>What is a Rider?</p>
                </Link>
              </li>
            </ul>
            <Button />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;