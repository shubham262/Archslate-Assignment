import React from 'react'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

const MainContent = () => {
    const cstyel={
        width:"58.2vw",
        backgroundColor:"white",
     }

     const spanStyel={
        fontWeight:"600",
        fontSize:"20px"
     }
  return (
    <div className='py-4 ps-5 d-flex flex-column mb-5 me-4' style={cstyel}>
        <div className='ps-2 d-flex flex-column'>
            <span className='' style={spanStyel}>About this role</span>
            <span className='mt-3' style={{fontWeight:"500"}}>Short overview about the job and the way that the candidate would fit into the company.<br></br>
            Can also include extra instructions for the applications process if any exists.
            </span>
        </div>

        <div className='ps-2 d-flex flex-column mt-3'>
            <span className='' style={spanStyel}>Responsibilities</span>
            <ul className='mt-3'>
                <li>specific day to day tasks</li>
                <li>deliverables</li>
                <li>work environment requirements</li>
                <li>role within the current team</li>
                <li>etc.</li>

            </ul>
        </div>

        <div className='ps-2 d-flex flex-column mt-3'>
            <span className='' style={spanStyel}>Skills</span>
            <ul className='mt-3'>
                <li>Software Skills</li>
                <li>Technical Skils</li>
                <li>soft skills</li>
                <li>other</li>
             </ul>
        </div>


        <div className='ps-2 d-flex flex-column mt-3'>
            <span className='' style={spanStyel}>Qualifications</span>
            <span className='mt-3'>Required</span>
            <ul className=''>
                <li>Software Skills</li>
                <li>Technical Skils</li>
                <li>soft skills</li>
                <li>other</li>
             </ul>
             <span className='mt-3'>Bonus</span>
            <ul className=''>
                <li>education</li>
                <li>license and certifications</li>
                <li>experience needed</li>
                <li>other</li>
             </ul>
        </div>

        <div className='ps-2 d-flex flex-column mt-3'>
            <span className='' style={spanStyel}>Rate</span>
            <ul className='mt-3'>
                <li>if available</li>
              </ul>
        </div>

        <div className='ps-2 d-flex flex-column mt-3'>
            <span className='' style={spanStyel}>Time Estimate</span>
            <ul className='mt-3'>
                <li>if available</li>
              </ul>
        </div>

        <div className='ps-2 d-flex flex-column mt-3'>
            <span className='' style={spanStyel}>Work Authorization</span>
            <ul className='mt-3'>
                <li>tbd</li>
              </ul>
        </div>

        <div className='ps-2 d-flex flex-column'>
            <span className='' style={spanStyel}>About Company</span>
            <span className='mt-3' style={{fontWeight:"500"}}>Description of company with any uniform info or disclaimers-equal hiring<br></br>
            opportunity,etc.
            </span>
        </div>

        <div className='ps-2 d-flex mt-5 mb-3'>
        <button type="button" className="apply align-self-end me-4"><span style={{fontWeight:"510",fontSize:"20px"}}>Apply on Archslate</span></button>
        <button type="button" className="smbtn  px-4 py-1 me-3 d-flex align-items-center" style={{fontWeight:"510",fontSize:"20px",backgroundColor:"rgb(15,20,32)",color:"white"}} ><StarBorderOutlinedIcon className='me-1'/>Save</button>
        <button type="button" className="smbtn  px-4 py-1 me-3  d-flex align-items-center" style={{fontWeight:"510",fontSize:"20px",backgroundColor:"rgb(15,20,32)",color:"white"}} ><ShareOutlinedIcon className='me-1'/>Share & Refer</button>
           
        </div>

    </div>
  )
}

export default MainContent