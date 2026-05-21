import dynamic from "next/dynamic";
import { PDFDownloadLink } from "@react-pdf/renderer";

const MyPDF = dynamic(() => require("@/app/create/with-react-pdf/MyPDF"), {
  ssr: false,
});

let value, value2, value3;

value = localStorage.getItem("textInputStore");
value3 = "'s Access Rider";

//value2 = value.concat(value3)

const DownloadLink = () => (
  <div>
    <PDFDownloadLink document={<MyPDF />} fileName={value3}>
      {({ blob, url, loading, error }) =>
        loading ? "Loading document..." : "Download now!"
      }
    </PDFDownloadLink>
  </div>
);

export default DownloadLink;
