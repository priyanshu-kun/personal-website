import React, { useState } from "react"
import { FiArrowUp } from 'react-icons/fi';
import {IconContext} from 'react-icons'
import "./ScrollToBtn.css"


export default function ScrollToBtn() {
  
  const [triggerBtn, setTriggerBtn] = useState(false)


  function handleScroll() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  const changeNavbarColor = () => {
    if (window.scrollY >= 500) {
      setTriggerBtn(true);
    }
    else {
      setTriggerBtn(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);



  return (
    <button onClick={handleScroll} className={`scroll-up-btn fixed bottom-24 right-10per bg-background-primary-light-color/30  opacity-0 pointer-events-none  p-4 rounded-full transition duration-300 shadow-none ${triggerBtn && "trigger-btn"}`}>
                            <IconContext.Provider
                                value={{ className: 'w-5 h-5 400:w-6 400:h-6 text-txt-primary-dark-bg' }}
                              >
                                <FiArrowUp />
                            </IconContext.Provider>
    </button>
  )
}
