import React from 'react'
import Filter from '../../../Assets/icons/filter.svg'
import {FiChevronRight} from 'react-icons/fi'

export default function FilterBtn({searchComp, triggerHandleFilteredData, filter,setFilter}) {

    const handleSetFilter = () => {
        setFilter(!filter);
    }

    const handleFilteredData = (value) => {
        triggerHandleFilteredData(value);
    }

    return (
        <div className='relative'>
          <button onClick={handleSetFilter} aria-label='filter btn' className={`${searchComp && 'active'} custom-animation ml-6 px-4 py-1 text-tiny rounded-md cursor-pointer h-8 font-primaryHeading tracking-wider flex items-center justify-center hover:opacity-60 transition duration-300 border border-solid border-txt-primary-dark-bg/10`}> <img className='mr-1' src={Filter} alt="filter btn" />Filter</button>
            <div className={`w-44 max-h-10rem overflow-y-auto absolute top-12 shadow-lg right-0 bg-txt-primary-dark-bg rounded-xl py-2 transform scale-0 opacity-0 origin-top-right pointer-events-none transition duration-300 ${filter && 'scale-100 opacity-100 pointer-events-auto ease-bounce'}`}>
                <button onClick={() => {
                    handleFilteredData('All')
                }} className='text-txt-primary-light-bg/80 font-primaryHeading flex w-full h-8 items-center pl-2 hover:bg-txt-primary-light-bg/5 transition text-tiny'><FiChevronRight />All</button>
                <button onClick={() => {
                    handleFilteredData('Reactjs')
                }} className='text-txt-primary-light-bg/80 font-primaryHeading flex w-full h-8 items-center pl-2 hover:bg-txt-primary-light-bg/5 transition text-tiny'><FiChevronRight />ReactJS</button>
                <button onClick={() => {
                    handleFilteredData('Nodejs')
                }} className='text-txt-primary-light-bg/80 font-primaryHeading flex w-full h-8 items-center pl-2 hover:bg-txt-primary-light-bg/5 transition text-tiny'><FiChevronRight />NodeJS</button>
                 <button onClick={() => {
                    handleFilteredData('HTML')
                }} className='text-txt-primary-light-bg/80 font-primaryHeading flex w-full h-8 items-center pl-2 hover:bg-txt-primary-light-bg/5 transition text-tiny'><FiChevronRight />HTML/CSS/JS</button>
             
            </div>
        </div>
    )
}
