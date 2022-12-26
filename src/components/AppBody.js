import React from 'react'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArchitectDesign from './ArchitectDesign';
import Cards from './Cards';
import MainContent from './MainContent';

const AppBody = () => {
  return (
    <div className='container-fluid parentdiv'>

        <div className='container px-3' >
        <h4 style={{fontWeight:"600"}}><ArrowBackRoundedIcon className='me-2'/>Back to Jobs</h4>
        <ArchitectDesign />
       </div>
       <div className='container'>
       <div className='d-flex mt-4'>
        <Cards  topic="Software"/>
        <Cards topic="Experience"/>
        <Cards topic="Rate"/>
        <Cards topic="Location"/>
        </div>

       </div>
       <div className='container d-flex mt-4'>
       <MainContent/>
       <Cards topic="JobPoster" />

       </div>

    </div>
  )
}

export default AppBody