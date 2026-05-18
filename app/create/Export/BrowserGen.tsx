'use client'

// import { OdtDocument } from "odf-kit";
// import { Button } from "@mantine/core";

// export default function GenerateDocument() {
//   const doc = new OdtDocument();

//   doc.addHeading("Quarterly Report", 1);
//   doc.addParagraph("Generated entirely in the browser.");

//   doc.addTable([
//     ["Region",  "Revenue",  "Growth"],
//     ["North",   "$2.1M",    "+12%"],
//     ["South",   "$1.8M",    "+8%"],
//   ], { border: "0.5pt solid #000" });

//   //const bytes = await doc.save();
//   const bytes = doc.save();

//   // Create a download link
//   const blob = new Blob([bytes], {
//     type: "application/vnd.oasis.opendocument.text",
//   });
//   const url = URL.createObjectURL(blob);
//   const a = document.createElement("a");
//   a.href = url;
//   a.download = "report2.odt";
//   a.click();
//   URL.revokeObjectURL(url);

//   return(
//     <Button>
//       <a href="/application/vnd.oasis.opendocument.text" download="report">Download Button</a>
//     </Button>
//     // Wire it to a button

//     // document.getElementById("#generate-btn").addEventListener("click", GenerateDocument)
//     // //document.querySelector("#generate-btn").addEventListener("click", GenerateDocument)
//         link.href = url;
//     link.download = 'image.png';
//     link.click();
//     window.URL.revokeObjectURL(url);

//   )
// }


// import { OdtDocument } from "odf-kit";

// const doc = new OdtDocument();
// doc.addHeading("Generated in the Browser", 1);
// doc.addParagraph("No server involved.");

// const bytes = await doc.save();

// // Trigger download
// const blob = new Blob([bytes], {
//   type: "application/vnd.oasis.opendocument.text",
// });
// const url = URL.createObjectURL(blob);
// const a = document.createElement("a");
// return (


// a.href = url,
// a.download = "document.odt",
// a.click(),
// URL.revokeObjectURL(url),
// )