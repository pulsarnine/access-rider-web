// import { useState } from 'react';
// import { Document, Page, PDFViewer } from '@react-pdf/renderer';

// export default function DisplayRider1() {
// //   const [numPages, setNumPages] = useState<number>();
// //   const [pageNumber, setPageNumber] = useState<number>(1);

// //   function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
// //     setNumPages(numPages);
// //   }

//   return (
//     <div>
//         <PDFViewer style={{ width: '100%', height: '500px' }}>
//             <Document file={"Access Rider Example 1.pdf"} />
//         </PDFViewer>
//       {/* <p>
//         Page {pageNumber} of {numPages}
//       </p> */}
//     </div>
//   );
// }

'use client'

// import { pdfjs, Document, Page } from "react-pdf";
// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
// import { useState } from "react";

// export default function PdfReactPdf({ src }: PdfProps) { 
//   const [numPages, setNumPages] = useState<number>();
//   const [pageNumber, setPageNumber] = useState<number>(1);

//   function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
//     setNumPages(numPages);
//   }

//   function nextPage() {
//     setPageNumber((v) => ++v);
//   }

//   function prevPage() {
//     setPageNumber((v) => --v);
//   }

//   return (
//     <div style={{ width: "100%", height: "100%" }}>
//       <button onClick={prevPage} disabled={pageNumber <= 1}>
//         Previous
//       </button>
//       <button onClick={nextPage} disabled={pageNumber >= (numPages ?? -1)}>
//         Next
//       </button>
//       <Document
//         file="Access Rider Example 1.pdf"
//         onLoadSuccess={onDocumentLoadSuccess}
//         className="my-react-pdf"
//       >
//         <Page pageNumber={pageNumber} />
//       </Document>
//       <p>
//         Page {pageNumber} of {numPages}
//       </p>
//     </div>
//   );
// }



import { pdfjs, Document, Page } from "react-pdf";
import { useState } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function PdfReactPdf({ src }: PdfProps) {
  return (
    <div style={{ width: "100%", height: "100%"}}>
      <Document file="Access Rider Example 1.pdf"
      className="my-react-pdf">

      </Document>
    </div>
  )
}