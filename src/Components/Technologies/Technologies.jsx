import React, { useState, useEffect, useRef } from 'react'
import CPP from '../../Assets/icons/c++.svg'
import C from '../../Assets/icons/c.svg'
import PYTHON from '../../Assets/icons/python.svg'
import JAVASCRIPT from '../../Assets/icons/javascript.svg'
import HTML from '../../Assets/icons/html5.svg'
import CSS from '../../Assets/icons/css3.svg'
import Reactjs from '../../Assets/icons/reactjs.svg'
import SASS from '../../Assets/icons/sass.svg'
import JQuery from '../../Assets/icons/jquery.svg'
import Tailwind from '../../Assets/icons/tailwindcss.svg'
import Nextjs from '../../Assets/icons/next-js.svg'
import Node from '../../Assets/icons/node.svg'
import Express from '../../Assets/icons/express.svg'
import Firebase from '../../Assets/icons/firebase.svg'
import MySql from '../../Assets/icons/mysql.svg'
import Mongo from '../../Assets/icons/mongo.svg'
import Figma from '../../Assets/icons/figma.svg'
import Git from '../../Assets/icons/git.svg'
import Github from '../../Assets/icons/github.svg'
import Linux from '../../Assets/icons/linux.png'
import Ubuntu from '../../Assets/icons/ubuntu.svg'
import vsCode from '../../Assets/icons/vsCode.svg'
import Programming from '../../Assets/icons/programming.svg'
import Frontend from '../../Assets/icons/webdesign.svg'
import Backend from '../../Assets/icons/server.svg'
import Databases from '../../Assets/icons/db.svg'
import UI_UX from '../../Assets/icons/ui-ux.svg'
import Vim from '../../Assets/icons/vim.svg'
import './Technologies.css'
import 'aos/dist/aos.css'


export default function Technologies() {


    const [toogle, setToogle] = useState(1)
    const [path, setPath] = useState('/ PROGRAMMING / PROGRAMMING-LANGUAGES')


    const handleTabs = (number) => {
        setToogle(number)
    }

    const showContent = () => {
        switch (toogle) {
            case 1:
                return <div className='img-box flex w-full flex-wrap justify-around  h-full mt-6  programming-lang   content'>
                    <img src={C} alt='C language' />
                    <img src={CPP} alt='C++ language' />
                    <img src={JAVASCRIPT} alt='Javascript language' />
                    <img src={PYTHON} alt='Python Language' />
                </div>
            case 2:
                return <div className='img-box flex w-full flex-wrap justify-around mt-6 Frontend content'>
                    <img src={HTML} alt='HTML' />
                    <img src={CSS} alt='CSS' />
                    <img src={Tailwind} alt='Tailwind' />
                    <img src={Reactjs} alt='Reactjs' />
                    <img src={SASS} alt='SASS' />
                    <img src={JQuery} alt='JQuery' />
                    <img src={Nextjs} alt='Nextjs' />
                </div>
            case 3:
                return <div className='img-box flex w-full flex-wrap justify-around mt-6 backend content'>
                    <img src={Node} alt='Nodejs' />
                    <img src={Express} alt='Expressjs' />
                    <img src={Firebase} alt='Firebase' />
                </div>
            case 4:
                return <div className='img-box flex w-full flex-wrap justify-around mt-6 databases content'>
                    <img src={Mongo} alt='MongoDB' />
                    <img src={MySql} alt='MySql' />
                </div>
            case 5:
                return <div className='img-box flex w-full flex-wrap justify-around mt-6 ui_ux content'>
                    <img src={vsCode} alt='VSCode' />
                    <img src={Linux} alt='Linux' />
                    <img src={Ubuntu} alt='Ubuntu' />
                    <img src={Git} alt='Git' />
                    <img src={Github} alt='Github' />
                    <img src={Figma} alt='Figma' />
                    <img src={Vim} alt='Vim' />
                </div>

            default:
                break;
        }
    }



    return (
        <div className='tech-cover h-screen relative w-full flex items-center justify-center z-nv-1 technologies-section lg:mt-32'>
            <div className='skills-cover w-10/12 h-3/5 400:h-4/5 mt-12 relative '>
                <h1 data-aos='fade-right' data-aos-duration='300' className={`text-center  text-lg 400:text-2xl  relative font-primaryHeading text-txt-primary-dark-bg before:content-[''] before:absolute before:-bottom-2 before:rounded-full before:left-1/2 before:transform before:-translate-x-2/4 md:before:left-0 md:before:-translate-x-0 md:text-left before:w-11/12 before:h-1 before:bg-background-secondary-accent-color before:max-w-16rem 400:before:h-2 400:before:-bottom-4 md:before:h-2 md:before:-bottom-4 lg:before:max-w-16rem main-heading lg:before:left-14`}>(Skills) &nbsp;कौशल, That I have - </h1>
                <div className='technology-box min-h-20rem w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-128 lg:max-w-178 lg:h-128'>
                    <div data-aos='custom-ani' data-aos-delay='300' data-aos-duration='1000' className='opacity-20 absolute -inset-3 sm:-inset-6 md:-inset-8 bg-gradient-to-r from-background-secondary-accent-color via-red-500  to-yellow-400 rounded-lg animate-tilt'></div>
                    <div data-aos='fade-up' data-aos-duration='300' className='transform translate-y-20 transition relative w-full h-full skills bg-background-secondary-dark-color rounded-xl border border-solid border-txt-primary-dark-bg/10 px-3 py-2 md:px-4 lg:px-6'>
                        <p className='hidden text-tiny font-primaryHeading 400:block 400:text-center text-txt-primary-dark-bg py-6 px-8 lg:px-0 lg:text-left lg:py-0 lg:pt-4 lg:pb-6 lg:text-base' >PATH*  <span className='ml-2 lg:ml-4 opacity-60 font-secondaryHeading text-sm'>SKILLS {path}</span></p>
                        <hr className='divider hidden 400:block  border-t border-solid border-txt-primary-dark-bg/10' />
                        <div className='w-full flex flex-col lg:flex-row lg:h-4/5 lg:mt-4'>
                            <div className='buttons flex overflow-x-scroll h-full w-full py-6 px-4 items-center border-b border-solid border-txt-primary-dark-bg/10 lg:flex-col lg:overflow-x-hidden  lg:w-60 lg:border-r lg:border-b-0 lg:justify-between lg:py-0 lg:px-0 lg:pr-4'>
                                <button onClick={() => {
                                    handleTabs(1)
                                    setPath('/ PROGRAMMING / PROGRAMMING-LANGUAGES')
                                }} className={`${toogle === 1 && 'tabs-active'} h-16 mr-4 px-2 text-tiny box-border flex flex-col items-center justify-center rounded-lg lg:mr-0 lg:w-full`}><img className='w-7 -mt-2' src={Programming} alt='programming language logo' /><span className=' whitespace-nowrap font-secondaryHeading   -mt-2 text-sm max-w-120px'>Programming Lang</span></button>
                                <button onClick={() => {
                                    handleTabs(2)
                                    setPath('/ DEVELOPMENT / FRONTEND')
                                }} className={`${toogle === 2 && 'tabs-active'} h-16 mr-4 px-2 text-tiny box-border flex flex-col items-center justify-center rounded-lg lg:mr-0 lg:w-full`}><img className='w-7 -mt-2  ' src={Frontend} alt='frontend library logo' /><span className=' whitespace-nowrap overflow-hidden font-secondaryHeading  -mt-2 max-w-120px text-sm'>Frontend Frameworks</span></button>
                                <button onClick={() => {
                                    handleTabs(3)
                                    setPath('/ DEVELOPMENT / BACKEND')
                                }} className={`${toogle === 3 && 'tabs-active'} h-16 mr-4 px-2 text-tiny box-border flex flex-col items-center justify-center rounded-lg lg:mr-0 lg:w-full`}><img className='w-5  ' src={Backend} alt='backend library logo' /><span className=' whitespace-nowrap overflow-hidden font-secondaryHeading  -mt-0 max-w-120px text-sm'>Backend Frameworks</span></button>
                                <button onClick={() => {
                                    handleTabs(4)
                                    setPath('/ DEVELOPMENT / DATABASES')
                                }} className={`${toogle === 4 && 'tabs-active'} h-16 mr-4 px-2 text-tiny box-border flex flex-col items-center justify-center rounded-lg lg:mr-0 lg:w-full`}><img className='w-5  ' src={Databases} alt='Databases logo' /><span className=' font-secondaryHeading  -mt-0 max-w-120px'>Databases</span></button>
                                <button onClick={() => {
                                    handleTabs(5)
                                    setPath('/ TECHNOLOGIES / UI_UX+%26+Other"s')
                                }} className={`${toogle === 5 && 'tabs-active'} h-16 mr-4 px-2 text-tiny box-border flex flex-col items-center justify-center rounded-lg lg:mr-0 lg:w-full`}><img className='w-6 ' src={UI_UX} alt='other technologies logos' /><span className=' whitespace-nowrap overflow-hidden font-secondaryHeading -mt-1 max-w-120px text-sm'>UI/UX & Other's</span></button>
                            </div>
                            <div className='h-64 w-full relative overflow-y-auto 400:h-80 lg:h-full'>
                                {
                                    showContent()
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
