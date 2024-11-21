import React from 'react'
import { GithubIcon } from '../icons/GithubIcon'
import { LinkedinIcon } from '../icons/LinkedinIcon'
import Link from 'next/link'

export default function Links() {
    return (
      <div className="flex items-center gap-6">
        <Link href="http://github.com/Boutzi" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
          <GithubIcon size={24} />
        </Link>
        <Link href="http://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
          <LinkedinIcon size={24} />
        </Link>
      </div>
    );
  }
