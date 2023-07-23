import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-slate-200 mt-auto'>
      <div className='container mx-auto px-5 py-3 flex flex-wrap justify-around items-center gap-4 sm:justify-between lg:px-10'>
          <div >
            <p>RecipeHub 2023</p>
            <p>All Rights Reserved &copy;</p>
          </div>

          <span className='text-3xl font-semibold lg:text-4xl'>RecipeHub</span>

          <div className='flex gap-3'>
            <Link href={"/"}>
              About
            </Link>

            <Link href={"/"}>
              Faq
            </Link>

            <Link href={"/"}>
              Contact
            </Link>
          </div>
      </div>
    </footer>
  )
}

export default Footer