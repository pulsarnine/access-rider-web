import backgroundImage from "../../public/Glitter_BG.jpg";

export default function Create() {
    return(
        <>
        <div
      style={{
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
      }}
    >
      <h1>This page is the main page of the site</h1>
        <p>Here you can create and write your own access rider. 
        This site will allow you to enter information and text which is then used to create an access rider for you.</p>
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

