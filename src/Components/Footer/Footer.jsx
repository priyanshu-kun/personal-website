import React from 'react'

export default function Footer() {
  return (
    <footer className='border-t border-solid border-txt-primary-dark-bg/10 h-20 w-full flex items-center justify-center'>
      <span className='text-super-tiny normal:text-tiny sm:text-base font-secondaryHeading text-txt-primary-dark-bg/30 text-sm'>&copy; {new Date().getFullYear()} - priyanshu sharma 🇮🇳 . All right reserved.</span>
    </footer>
  )
}
