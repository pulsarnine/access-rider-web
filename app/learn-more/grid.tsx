// Grid.js
import React from "react";

export default function Grid({ 
  columns = "repeat(12, 1fr)", 
  gap = "1rem", 
  children 
}) {
  return (
    <div 
      style={{ 
        display: "grid", 
        gridTemplateColumns: columns, 
        gap 
      }}
    >
      {children}
    </div>
  );
}