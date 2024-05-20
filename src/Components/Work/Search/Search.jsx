import React, { useState, useEffect } from 'react'
import X from '../../../Assets/icons/x.svg'
import './Search.css'


export default function Search({ searchComp, handleSearchComponent, Projects, findProject, SearchableData, setSearchableData, setSearchedData }) {

    const [wordEntered, setWordEntered] = useState('');


    useEffect(() => {
        setSearchableData(Projects.slice(0, 3))
    }, [Projects, setSearchableData])



    const handleSearchBarClose = () => {
        setSearchableData([]);
        setWordEntered('');
        handleSearchComponent()
    }

    const handleInputData = (e) => {
        const searchWord = e.target.value;
        setWordEntered(searchWord);
        const newFilter = Projects.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === '') {
            setSearchableData(Projects.slice(0, 3));
        } else {
            setSearchableData(newFilter);
        }
    }


    return (
        <div className={`w-4/5 mt-4 absolute z-10 flex flex-col h-96 justify-start sm:max-w-168 sm:left-1/2 sm:top-0 sm:transform sm:-translate-x-2/4 ${!searchComp && 'pointer-events-none'}`}>
            <div className={`h-14 sm:h-14 relative search-bar ${searchComp && 'active'}`}>
                <input onChange={handleInputData} value={wordEntered} className='text-tiny font-secondaryHeading work-search-bar inline-block absolute h-full w-full px-6 shadow-lg rounded-xl text-black outline-none sm:text-base' type='text' placeholder='Search for something!' />
                <button onClick={handleSearchBarClose} className='absolute right-6 top-2/4 transform -translate-y-1/2 z-10'><img src={X} alt="cancel search bar" /></button>
            </div>
            <div className={`search-list-bar w-full h-auto max-h-80 bg-txt-primary-dark-bg mt-2 overflow-y-scroll overflow-x-hidden rounded-xl  shadow-lg ${searchComp && 'search-list-active sm:overflow-y-hidden'} pb-3`}>

                <h1 className='text-txt-primary-light-bg font-primaryHeading mt-3 ml-6 mb-2 font-heading text-xl py-2'>Projects - </h1>
                <hr className='w-11/12 mx-auto mb-2 border-b border-txt-primary-light-bg/10 border-solid' />
                <div className='text-txt-primary-light-bg '>
                    {

                        SearchableData.length > 0 ? (
                            SearchableData.slice(0, 3).map(obj => {
                                return <div key={obj.title} onClick={() => {
                                    findProject(obj.title);
                                }} className='w-11/12 mx-auto py-3 px-3 mb-2 cursor-pointer project-search-items relative' >
                                    <h1 className='font-secondaryHeading opacity-80 text-base mb-2'>* {obj.title.split('-')[0]}</h1>
                                    <p className={`font-bodyText search-item ${searchComp && 'search-item-active'} text-tiny ml-3 opacity-30`}>{obj.title}</p>
                                </div>
                            })
                        ) : (
                            <h1 className='text-center pt-6 pb-8'>Not found - Try to search someting different.</h1>
                        )

                    }
                </div>
            </div>
        </div>
    )
}
