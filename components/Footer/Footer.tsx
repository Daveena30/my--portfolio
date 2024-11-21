import React from 'react'
import { Section } from "@/components/layout/Section";

export default function Footer() {
  return (
    <footer className="bg-[#030014] py-4 mt-10 text-center text-gray-400">
      <p>&copy; {new Date().getFullYear()} Daveena Seeneevassen. All rights reserved.</p>
    </footer>
  );
}
