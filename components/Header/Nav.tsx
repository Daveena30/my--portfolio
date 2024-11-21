import React from 'react'
import Link from "next/link"
import {Button} from "../ui/button"

export default function Nav() {
  return (
    <nav className='flex gap-4 items-center'>
    <Link href="#about">
    <Button>About me</Button>
  </Link>
      <Link href="#skills">
      <Button>Compétences</Button>
    </Link>
      <Link href="#projects">
      <Button>Mes projets</Button>
    </Link>
      <Link href="#contact">
      <Button>Contact</Button>
    </Link>
    </nav>
  )
}
