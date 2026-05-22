"use client";

import dynamic from "next/dynamic";

const GeneratePDFViewer = dynamic(
  () => import("@/app/create/with-react-pdf/generate-pdf"),
  {
    ssr: false,
  },
);

export default function DownloadPage() {
  return <GeneratePDFViewer />;
}
