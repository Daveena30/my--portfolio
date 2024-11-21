import React from "react";
import { Badge } from "../ui/badge";

interface SubSectionTitleProps {
  title: string;
}

export default function SubSectionTitle({ title }: SubSectionTitleProps) {
  return (
    <Badge
      variant={"outline"}
      className=" border-primary text-primary text-sm mb-4 rounded-full"
    >
      {title}
    </Badge>
  );
}
