import { PDFViewer } from '@react-pdf/renderer';
import MyPDF from "./MyPDF";
//import React from 'react';
//import ReactDOM from 'react-dom';


const GeneratePDFViewer = () => {
  return (
    <div>
      <PDFViewer style={{ width: '100%', height: '500px' }}>
        <MyPDF />
      </PDFViewer>
    </div>
  );
};

// ReactDOM.render(<GeneratePDFViewer />, document.getElementById('root'));

export default GeneratePDFViewer;