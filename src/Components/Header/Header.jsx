
import React, { useEffect, useRef } from 'react';
import './Header.css'
import starryNight from '../../utils/starryNight.js'
import { IconContext } from 'react-icons'
import { FiGithub, FiLinkedin, FiTwitter, FiArrowRight } from 'react-icons/fi';
import Topbar from './Topbar/Topbar.jsx'
import Mail from '../../Assets/icons/mail.png'


export default function Header({ trigger, nav, setNav }) {
  const inputEl = useRef(null);

  useEffect(() => {
    starryNight(inputEl)
  }, [])

  return (
    <header className='header-section h-screen flex flex-col items-start justify-center sm:items-center xl:flex-row xl:relative'>
      <Topbar trigger={trigger} nav={nav} setNav={setNav} />
      <div className='canvas-design h-full w-full absolute top-0 left-0'>
        <canvas ref={inputEl} id='sky' ></canvas>
      </div>
      <div className='header-info w-auto flex flex-col sm:items-center -mt-16 sm:-mt-0'>
        {/* s: small - h: height - d: divices */}
        <div className='shd-heading-content pl-8 flex flex-col justify-start sm:justify-center sm:items-center sm:px-8'>
          <small className='text-super-tiny text-txt-secondary-light-bg font-primaryHeading mb-3 inline-block tracking-widest tag-line normal:text-tiny'>PRIYANSHU SHARMA</small>
          <h1 className='text-txt-primary-dark-bg font-primaryHeading font-black text-3xl mb-8 normal:text-4xl 400:text-5xl 400:w-80 sm:w-auto sm:text-6xl sm:max-w-128 md:text-7xl md:max-w-168 sm:text-center lg:text-8xl lg:max-w-178 lg:leading-20'>I&apos;m a <span className='custom-text-style font-primaryHeading font-black custom-text-style font-heading'>Full Stack Web Developer.</span></h1>
          <p className='font-secondaryHeading text-base text-txt-secondary-dark-bg w-10/12 leading-5  400:text-lg 400:leading-6 sm:text-center sm:max-w-168 md:text-xl  txt-secondary-light-bg'>As a <span className='underline decoration-background-secondary-accent-color  decoration-1 400:decoration-2 underline-offset-2 font-accentFont font-black'>self-taught</span> web-developer I've been enjoying bringing new and <span className='underline decoration-success  decoration-1 400:decoration-2 underline-offset-2 font-accentFont font-black'>interesting</span> user-tailored software solutions to life in the past couple of years. I love working with <span className='underline decoration-background-secondary-accent-color  decoration-1 400:decoration-2 underline-offset-2 font-accentFont font-black'>frontend & UI/UX designer</span> and I'm also proficient with backend technologies, I'm always open to <span className='underline decoration-background-secondary-accent-color  decoration-1 400:decoration-2 underline-offset-2 font-accentFont font-black'>learn</span> new technologies.</p>
        </div>
        <button aria-label='See my work' className='shd-heading-btn ml-8 action-btn mt-8 bg-background-primary-dark-color border border-solid border-txt-primary-dark-bg/10 text-txt-primary-dark-bg text-tiny h-12 w-40 400:h-14 400:w-44 400:text-base shadow-md rounded-lg  cursor-pointer sm:ml-0 md:h-16 md:w-52 md:text-lg' type='button'>
          <a href='#seeMyWork' className='font-secondaryHeading w-full h-full flex items-center justify-center'>
            See my Work

            <IconContext.Provider
              value={{ className: 'w-5 h-5 ml-1 400:w-6 400:h-6' }}
            >
              <FiArrowRight />
            </IconContext.Provider>
          </a>
        </button>
      </div>
      <div className='shd-heading-icons icons w-28 ml-6 mt-6 flex justify-around items-center 400:w-36 sm:ml-0 md:w-44 xl:absolute xl:right-20 xl:w-auto xl:h-40 xl:flex-col xl:mr-24'>

        <IconContext.Provider
          value={{ className: 'w-4 h-4 400:w-5 400:h-5 md:w-6 md:h-6 stroke-txt-secondary-light-bg' }}
        >
          <a href='https://github.com/priyanshu-kun' target='_blank' ><FiGithub /></a>
          <a href='https://www.linkedin.com/in/priyanshukun/' target='_blank' ><FiLinkedin /></a>
          <a href='#contactMe'  ><img className='w-10 mail-3d' src={Mail} alt='mail icon' /></a>
          <a href='https://twitter.com/priyans18648307' target='_blank' ><FiTwitter /></a>
        </IconContext.Provider>
      </div>
    </header>
  )
}

