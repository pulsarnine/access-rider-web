//this is the homepage or launch for the site, it should be simple and might end up being the easy read instructions
'use client'

import Image from "next/image";
import HeaderSimple from "./components/HeaderSimple"
import React, { useState, useEffect } from "react";
import FeaturesTitle from "./homepage/FeaturesTitle";
//import SkipLink from "./components/SkipLink";

export default function Home() {
    useEffect ( () => {
      document.title = "Access Rider";
    }, []);
  const [size, setSize] = useState(16);
  
  if (size < 16) {
    setSize(16);
    alert("no lower than 16px");
  }
  if (size > 72) {
    setSize(72);
    alert("no higher than 72px");
  }
  return (
    <>
      {/* <SkipLink /> */}

      {/* <FeaturesTitle /> */}
      <div className="absolute left-1/2 top-1/2 w-52 lg:w-[400px]
      h-52 lg:h[400px] bg-red-500 -translate-x-1/2 -translate-y-1/2 -z-10 
      blur-[150px]">
      </div>
      <div className="p-8 max-w-3xl mx-auto">
        <h1 className="text-4xl lg:text-6xl font-bold
        text-center">
          Welcome to Access Rider Web!
        </h1>

        <ul className="flex items-center justify-center gap-4 mt-10">
          <li>
            <button onClick={() => setSize(size - 4)} className="py-2 px-6 rounded shadow bg-[#333333] 
            text-white hover:bg-[#222222]">Decrease</button>
          </li>
          <li>
            <button onClick={() => setSize(size + 4)}className="py-2 px-6 rounded shadow bg-[#333333] 
            text-white hover:bg-[#222222]">Increase</button>
          </li>
        </ul>
        <div className="flex flex-col gap-8 mt-10">
          <p style={{
            fontSize: size,
          }}>
            Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Mollitia doloremque ducimus 
            harum enim. Aut temporibus ullam sunt id error nulla.
          </p>
          <p style={{
            fontSize: size,
          }}>
            Lorem ipsum dolor sit amet consectetur adipisicing 
            elit. Repellat blanditiis cumque ex cum enim 
            necessitatibus natus temporibus maiores eligendi 
            ratione minus nisi, ea, fuga facilis aliquid veniam 
            recusandae autem modi.
          </p>
        </div>
      </div>
      <div className="flex justify-center" >
        <p>
          This website is a tool to create Access Riders, teach people more about them and raise awareness of their uses. 
        </p>
      </div>
    
    </>
  )
}

