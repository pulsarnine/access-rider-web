import { OdtDocument } from "odf-kit";
import { writeFileSync } from "fs";

const doc = new OdtDocument();
doc.setMetadata({ title: "Q4 Report" });
doc.setFooter("Page ###");

doc.addHeading("Q4 2025 Results", 1);
doc.addParagraph("Revenue exceeded expectations across all regions.");

doc.addTable([
  ["Region",  "Revenue",  "Growth"],
  ["North",   "$2.1M",    "+12%"],
  ["South",   "$1.8M",    "+8%"],
  ["East",    "$1.5M",    "+15%"],
  ["West",    "$2.3M",    "+10%"],
], { border: "0.5pt solid #000" });

doc.addHeading("Summary", 2);
doc.addParagraph((p) => {
  p.addText("Status: ");
  p.addText("Approved", { bold: true, color: "green" });
});

const bytes = await doc.save();
writeFileSync("report.odt", bytes);
console.log("Created report.odt");