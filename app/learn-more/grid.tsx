// Grid.js
import React, { ReactNode } from "react";

export default function Grid({
  columns = "repeat(12, 1fr)",
  gap = "1rem",
  children,
}: {
  columns?: string;
  gap?: string;
  children: ReactNode;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: columns,
        gap,
      }}
    >
      {children}
    </div>
  );
}
