import React from 'react'
import Navbar from './Navbar/Navbar';
import './Topbar.css'


 export default function Topbar({trigger, nav, setNav}) {

    
    return (
      <div className='bg-background-primary-dark-color fixed z-99999999 top-0 w-full border-b border-txt-primary-dark-bg/10  border-solid h-16 mx-auto topbar-section'>
        <div className='mx-auto flex justify-between normal:px-6 items-center h-full max-w-7xl tiny:px-4 lg:px-32'>
          <div className='font-accentFont text-txt-primary-dark-bg font-black text-sm hidden normal:block lg:text-lg'>👋 Priyanshu Sharma</div> 
          <div className='font-accentFont text-txt-primary-dark-bg font-black text-sm  tiny:block normal:hidden'>👋 Priyanshu S</div> 
          <div className='relative h-full flex justify-around items-center tiny:w-auto'>

              <div onClick={trigger} className='menu-icon hover-target'>
                <span className='bg-txt-primary-dark-bg  menu-icon__line menu-icon__line-left'></span>
                  <span className='bg-txt-primary-dark-bg menu-icon__line'></span>
                  <span className='bg-txt-primary-dark-bg  menu-icon__line menu-icon__line-right'></span>
              </div>
            <Navbar nav={nav} setNav={setNav}  />
          </div> 
        </div>
      </div>
    )
}
