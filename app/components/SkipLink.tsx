// components/SkipLink.tsx
"use client";
export default function SkipLink() {
  return (
    <a
      href="#main"
      className="absolute left-[-10000px] top-auto focus:left-4 focus:top-4 focus:bg-white focus:text-black p-2 z-50"
    >
      Skip to main content
    </a>
  );
}