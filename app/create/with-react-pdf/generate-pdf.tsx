import { PDFViewer } from "@react-pdf/renderer";
import dynamic from "next/dynamic";
import MyPDF from "./MyPDF";

// const MyPDF = dynamic(() => import("@/app/create/with-react-pdf/MyPDF"), {
//   ssr: false,
// });

const GeneratePDFViewer = () => {
  return (
    <div>
      <PDFViewer style={{ width: "100%", height: "500px" }}>
        <MyPDF />
      </PDFViewer>
    </div>
  );
};

// ReactDOM.render(<GeneratePDFViewer />, document.getElementById('root'));

export default GeneratePDFViewer;
