'use client'
import React, { useEffect } from "react";
import Image from 'next/image';
import ContainedInputs from './ContainedInputs';
import { List, ThemeIcon } from "@mantine/core";
import { Accessibility } from "@deemlol/next-icons"
import ThemeSelector from "../components/ColorSwitcher";
import ThemeToggle from "../components/ColorSwitcher";
import MyInput from "./section";
import TaskApp from "./ToDo/ToDo";
import Component from "./LocalStorageBtn";
import GenerateDocument from "./Export/BrowserGen"
import App from "./with-react-pdf/generate-pdf";

export default function Create() {
    useEffect ( () => {
      document.title = "Access Rider ┃ Create";
  }, []);
    return(
      <>
        <div className="flex justify-center p-8">
          <p>
            Writing an Access Rider can be emotionally difficult, due to the barriers that society puts up for disabled people, 
            so take the time you need to write this document. The data you input and save will be stored locally on your device 
            so you can take breaks and come back when you want to. Many people find it helpful to talk through and write this 
            document with a trusted friend/family member or professional, so do seek out this support if you feel you would benefit 
            from it. 
          </p>
        </div>
        <div className="p-10px">
          <List 
            type="ordered"
            center
            icon={
              <ThemeIcon size={24} radius="xl">
                <Accessibility size={16} />
              </ThemeIcon>
            }
          >  
            <List.Item>
              Choose a section from the drop down, or create your own
            </List.Item>
            <List.Item>
              Fill In your information for that section, you can come back and edit this later. You could also do this 
              in bullet points if you wish.
            </List.Item>
            <List.Item>
              Save the section when you are happy with the content you’ve put in            
            </List.Item>
            <List.Item>
              Once you are happy you have included all the sections you want, press the final compile and export button to 
              export your document in a selected format. The default is an Open Doc.
            </List.Item>
          </List>
        </div>
        <Image
          src="/frogg.jpg"
          width={500}
          height={500}
          alt="Picture of a green frog"
        />
        <MyInput />
        <ContainedInputs />
        <TaskApp />
        <Component />
        {/* <GenerateDocument /> */}
        <App />
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