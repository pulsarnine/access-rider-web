'use client'
//import backgroundImage from "../../public/Glitter_BG.jpg";
import React, { useEffect } from "react";
import Image from 'next/image';
import ContainedInputs from './ContainedInputs';
import HeaderSimple from "../components/HeaderSimple";
// import { axe, render } from '@/test-utils';
//import attributes from './attributes.json';


export default function Create() {
    useEffect ( () => {
      document.title = "Access Rider ┃ Create";
  }, []);
    return(
      <>
        <HeaderSimple />
        <Image
          src="/frogg.jpg"
          width={500}
          height={500}
          alt="Picture of a green frog"
        />
        <div>

        <ContainedInputs />

        <h1>This page is the main page of the site</h1>
          <p>Here you can create and write your own access rider. 
            This site will allow you to enter information and text which is then used to create an access rider for you.
            <br /> 
            You can customise the document as far as you would like, some suggested sections are listed below but feel free 
            to add custom sections as well as removing others.
          </p>
        </div>
      </>
    )
}




// this page needs: 
// title and subheading 
// button to add section 
// implemented through button to create,
// then text inputs for section title and paragraph text 
// then save button to add it as a (still editable section)
// compile button for creating into one document at end 
// storing on cookies to allow user to return and edit at a later date 
// export button for open doc format, or word or pdf etc..

          {/*style={{
            // use the src property of the image object
            backgroundImage: `url(${backgroundImage.src})`,
            // other styles
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100vw",
            height: "100vh",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}*/}