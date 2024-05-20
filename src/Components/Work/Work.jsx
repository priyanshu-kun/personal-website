import React, { useState, useEffect } from 'react'
import { FiGithub, FiLink } from 'react-icons/fi'
import { IconContext } from 'react-icons'
import SearchBar from './Search/Search.jsx'
import FilterBtn from './Filter/Filter.jsx'
import SearchBtn from '../../Assets/icons/search.svg'
import { client, urlFor } from '../../client'
import './Work.css'
import 'aos/dist/aos.css'
import fixIt from '../../utils/fixIt.js'


export default function Work() {

  const [Projects, setProjects] = useState([])
  const [searchComp, setSearchComp] = useState(false)
  const [SearchableData, setSearchableData] = useState([]);
  const [SearchedData, setSearchedData] = useState([]);
  const [FilteredData, setFilteredData] = useState([]);
  const [filter,setFilter] = useState(false);


  useEffect(() => {
    let query = '*[_type == "works"]'



    client.fetch(query)
      .then(data => {
        data = fixIt(data);
        setProjects(data);
      })
  }, [])



  const handleSearchComponent = () => {
    setSearchComp(!searchComp)
    setSearchableData(Projects.slice(0, 3));
  }


  const findProject = (title) => {
    setSearchedData([Projects.find(obj => obj.title === title)]);
    setSearchComp(false);
  }


  const triggerHandleFilteredData = (value) => {
    if(value === 'All') {
      setFilter(false);
      return setFilteredData(Projects);
    }

    let filteredDta = Projects.filter(obj => {
      return obj.tags.find(tag => tag.toLowerCase() ===  value.toLowerCase());
    })
    setFilteredData(filteredDta);
    setFilter(false);
  }



  return (
    <div className='h-auto lg:mt-40 overflow-y-hidden flex flex-col items-center justify-center mb-20'>
      <div className='relative text-txt-primary-dark-bg flex flex-col w-full justify-between items-center 400:mt-12  mx-auto sm:flex-row sm:items-center sm:justify-between sm:w-10/12 lg:w-8/12'>
        <h1 id='seeMyWork' className={`scroll-mt-28 md:scroll-mt-32 custom-animation ${searchComp && 'active'} font-primaryHeading relative before:content-[''] before:absolute before:-bottom-2 before:left-1/2 before:transform before:-translate-x-2/4 before:w-11/12 mx-6 before:h-1 before:bg-background-secondary-accent-color before:rounded-full text-base leading-5 text-center mb-8  normal:text-lg normal:before:w-full sm:text-2xl sm:before:h-2 sm:before:-bottom-4 sm:before:left-60 sm:mb-0 sm:max-w-128 sm:mx-0`}>Project, that I've  &nbsp;काम&nbsp; (worked) on -</h1>
        <div className='actions flex z-10'>
          {
            SearchedData.length > 0 ? (
              <button aria-label='go back' className='ml-6 underline' onClick={() => {
                setSearchedData([]);
              }}>Go Back</button>
            ) : (
              <img onClick={handleSearchComponent} className={`${searchComp && 'active'} w-6 custom-animation hover:opacity-60  cursor-pointer`} src={SearchBtn} alt='search button' />
            )
          }
          <FilterBtn filter={filter} setFilter={setFilter} triggerHandleFilteredData={triggerHandleFilteredData} searchComp={searchComp} />
        </div>
        <SearchBar setSearchedData={setSearchedData} SearchableData={SearchableData} setSearchableData={setSearchableData} Projects={Projects} findProject={findProject} searchComp={searchComp} handleSearchComponent={handleSearchComponent} />
      </div>
      <div className='grid grid-cols-1 overflow-hidden gap-6 mx-3 tempScreen:mx-12 mt-12 md:grid-cols-2 sm:mt-24 lg:max-w-86rem' >

        {

          SearchedData.length > 0 ? (

            SearchedData.map(({ title, tags, imgUrl, codeLink, projectLink }) => (
              <div key={title} className='test-width w-full h-full mx-auto relative overflow-hidden'>
                <img className='opacity-80' src={urlFor(imgUrl)} alt={title} />
                <div className={`projects-overlay absolute top-0 left-0 bottom-0 right-0 flex flex-col justify-between transition-all duration-200 opacity-0 hover:opacity-100`}>
                  <div className='h-full w-full flex flex-col items-center justify-center'>
                    <div className='flex items-center'>
                      <a href={codeLink} target='_blank' className='mr-4 tempScreen:mr-6 cursor-pointer  lg:mr-14'>
                        <IconContext.Provider
                          value={{ className: 'text-txt-primary-dark-bg opacity-80 w-8 h-8 normal:w-12 normal:h-12 tempScreen:w-16 tempScreen:h-16 sm:w-20 sm:h-20 md:w-12 md:h-12 lg:w-20 lg:h-20' }}
                        >
                          <FiGithub />
                        </IconContext.Provider>
                      </a>
                      <a href={projectLink} target='_blank' className='cursor-pointer'>
                        <IconContext.Provider
                          value={{ className: 'text-txt-primary-dark-bg opacity-80 w-8 h-8 normal:w-12 normal:h-12 tempScreen:w-16 tempScreen:h-16 sm:w-20 sm:h-20 md:w-12 md:h-12 lg:w-20 lg:h-20' }}
                        >
                          <FiLink />
                        </IconContext.Provider>
                      </a>
                    </div>
                    <p className='text-super-tiny font-secondaryHeading w-3/5 text-center mt-4 leading-3 fit:text-tiny sm:mt-8 fit:leading-5'>{
                      tags.map(t => `${t} / `)
                    }</p>
                  </div>
                </div>
              </div>
            ))
          ) : (

            Array.isArray(Projects) && Projects.length > 0 && (

              (FilteredData.length > 0 ? FilteredData: Projects).map(({ title, tags, imgUrl, codeLink, projectLink }, i) => {
                return <div key={title} data-aos="fade-up" data-aos-easing='ease-in-cubic' className='mx-auto relative overflow-hidden top-0 left-0 right-0 bottom-0'>
                  <img className='opacity-80' src={urlFor(imgUrl)} alt={title} />
                  <div className={`projects-overlay absolute top-0 left-0 bottom-0 right-0 flex flex-col justify-between transition-all duration-200 opacity-0 hover:opacity-100`}>
                    <div className='h-full w-full flex flex-col items-center justify-center'>
                      <div className='flex items-center'>
                        <a href={codeLink} target='_blank' className='mr-8 tempScreen:mr-16 cursor-pointer  lg:mr-14'>
                          <IconContext.Provider
                            value={{ className: 'text-txt-primary-dark-bg opacity-80 w-8 h-8 normal:w-12 normal:h-12 tempScreen:w-16 tempScreen:h-16 sm:w-20 sm:h-20 md:w-12 md:h-12 lg:w-20 lg:h-20' }}
                          >
                            <FiGithub />
                          </IconContext.Provider>
                        </a>
                        <a href={projectLink} target='_blank' className='cursor-pointer'>
                          <IconContext.Provider
                            value={{ className: 'text-txt-primary-dark-bg opacity-80 w-8 h-8 normal:w-12 normal:h-12 tempScreen:w-16 tempScreen:h-16 sm:w-20 sm:h-20 md:w-12 md:h-12 lg:w-20 lg:h-20' }}
                          >
                            <FiLink />
                          </IconContext.Provider>
                        </a>
                      </div>
                      <p className='text-super-tiny font-secondaryHeading w-3/5 text-center mt-4 leading-3 fit:text-tiny sm:mt-8 fit:leading-5'>{
                        tags.map(t => `${t} / `)
                      }</p>
                    </div>
                  </div>
                </div>

              })
            )
          )
        }

      </div>
    </div>
  )
}










































