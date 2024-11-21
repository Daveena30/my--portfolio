import React from 'react';
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex justify-center gap-6">
      <Link href="#about" className="text-white hover:text-primary">
        About
      </Link>
      <Link href="#skills" className="text-white hover:text-primary">
        Skills
      </Link>
      <Link href="#projects" className="text-white hover:text-primary">
        Projects
      </Link>
      <Link href="#contact" className="text-white hover:text-primary">
        Contact
      </Link>
    </nav>
  );
}
