import MyPDF from "./MyPDF";
import { PDFDownloadLink } from "@react-pdf/renderer";
 

let value, value2, value3

value = localStorage.getItem("textInputStore") 
value3 = "'s Access Rider"

//value2 = value.concat(value3)


const DownloadLink = () => (
  <div>
    <PDFDownloadLink document={<MyPDF />} fileName={value3}>
      {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
    </PDFDownloadLink>
  </div>
)

export default DownloadLink;