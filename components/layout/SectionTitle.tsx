import React from "react";

interface SectionTitleProps {
  children: React.ReactNode;
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="text-4xl font-bold text-center text-white mb-10">
      {children}
    </h2>
  );
}
