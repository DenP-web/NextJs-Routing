import Link from 'next/link'
import React from 'react'

const TheHeader = () => {
  return (
    <header className='container' >
      <Link className='link' href='/'>Home</Link>
      <Link className='link' href='/blog'>Blog</Link>
      <Link className='link' href='/about'>About</Link>
    </header>
  )
}

export default TheHeader
