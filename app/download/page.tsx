"use client";

import dynamic from "next/dynamic";

const GeneratePDFViewer = dynamic(
  () => require("@/app/create/with-react-pdf/generate-pdf"),
  {
    ssr: false,
  },
);

export default function DownloadPage() {
  return <GeneratePDFViewer />;
}
