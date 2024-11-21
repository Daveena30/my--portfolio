import React from "react";

interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <h2 className="text-4xl text-primary font-semibold text-center mb-8">
      {title}
    </h2>
  );
}
