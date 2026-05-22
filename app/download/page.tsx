"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";

const GeneratePDFViewer = dynamic(
  () => import("@/app/create/with-react-pdf/generate-pdf"),
  {
    ssr: false,
  },
);

export default function DownloadPage() {
  useEffect(() => {
    document.title = "Access Rider Web ┃ How To Use";
  }, []);
  return <GeneratePDFViewer />;
}
