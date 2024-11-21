import React from 'react'
import { GithubIcon } from '../icons/GithubIcon'
import { LinkedinIcon } from '../icons/LinkedinIcon'
import Link from 'next/link'

export default function Links() {
  return (
    <div className='flex gap-4'>
      <Link href="http://github.com/Boutzi" target='_blank'>
      <GithubIcon size={24} />
      </Link>
      <Link href="http://github.com/Boutzi" target='_blank'>
      <LinkedinIcon size={24} />
      </Link>
      </div>
  )
}
