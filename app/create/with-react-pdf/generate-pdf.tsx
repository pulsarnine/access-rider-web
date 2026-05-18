import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import MyPDF from "./MyPDF";
import ReactDOM from 'react-dom';


const App = () => {
  return (
    <div>
      <PDFViewer style={{ width: '100%', height: '500px' }}>
        <MyPDF />
      </PDFViewer>
    </div>
  );
};

// ReactDOM.render(<App />, document.getElementById('root'));

export default App;