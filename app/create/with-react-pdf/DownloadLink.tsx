import dynamic from "next/dynamic";
import { PDFDownloadLink } from "@react-pdf/renderer";
import MyPDF from "./MyPDF";
import { Button } from "@mantine/core";

// const MyPDF = dynamic(() => import("@/app/create/with-react-pdf/MyPDF"), {
//   ssr: false,
// });

function DownloadLink() {
  let value, value2, value3;

  value = localStorage.getItem("name");
  value3 = "'s Access Rider";

  return (
    <Button>
      <PDFDownloadLink document={<MyPDF />} fileName={value3}>
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download your document now!"
        }
      </PDFDownloadLink>
    </Button>
  );
}

export default DownloadLink;
