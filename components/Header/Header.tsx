import React from 'react'
import { Section } from "@/components/layout/Section";
import Nav from "@/components/Header/Nav"
import Links from "@/components/Header/Links"
import Title from "@/components/Header/Title"

export default function Header() {
  return (
    <header className="fixed border-b border-b p-4 bg-background/80 backdrop-blur z-40 w-full">
    <Section className='flex items-center justify-between p-0 max-sm:pt-2 max-sm:pb-2'>
    <Title />
    <Nav />
    <Links />
   </Section>
   </header>
  )
}
