import dynamic from "next/dynamic";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MyPDF from "./MyPDF";

// const MyPDF = dynamic(() => import("@/app/create/with-react-pdf/MyPDF"), {
//   ssr: false,
// });

function DownloadLink() {
  let value, value2, value3;

  value = localStorage.getItem("textInputStore");
  value3 = "'s Access Rider";

  return (
    <div>
      <PDFDownloadLink document={<MyPDF />} fileName={value3}>
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download now!"
        }
      </PDFDownloadLink>
    </div>
  );
}

export default DownloadLink;
