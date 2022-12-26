import React from 'react'
import logo from "../image 1.png"
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

const ArchitectDesign = () => {
  return (
    <div className='ArchitectDesign mt-3 pb-3'>
        <div className='row1 d-flex p-3 '>
            <div className='me-3'>
                <img  height={140} alt="arct" src={logo}/>
            </div>
            <div className='d-flex container-fluid  justify-content-between ' >
            <div className='d-flex flex-column align-items-start'>
                <h2 className='mb-3' style={{fontWeight:"700"}}>Architectural Designer</h2>
                <h5 className='mb-3' style={{fontWeight:"410"}}>Black Mountain Architecture</h5>
                <span style={{fontWeight:"510",fontSize:"20px"}}>Posted 07/27/2022</span>
            </div>
            <div className='d-flex flex-column' >
            
                    <div className='d-flex justify-content-end mb-3'>
                    <button className='me-3' type="button" style={{border:"none",backgroundColor:"white"}}><ShareOutlinedIcon/></button>
                    <button type="button" style={{border:"none",backgroundColor:"white"}}><BookmarkBorderOutlinedIcon/></button>
                    </div>

                    <button type="button" className="accept px-3 py-1  mb-3"><span style={{fontWeight:"510",fontSize:"22px"}}>Status: Accepting Applications</span></button>
                    <button type="button" className="apply align-self-end"><span style={{fontWeight:"510",fontSize:"20px"}}>Apply on Archslate</span></button>

            </div>
            </div>

        </div>
        <div className='row3 d-flex p-3'>
        <button type="button" className="smbtn  px-4 py-1 me-3" style={{backgroundColor:"rgb(15,20,32)",color:"white"}} >Architecture</button>
        <button type="button" className="smbtn px-4 py-1 me-3" style={{backgroundColor:"rgb(231,255,205)"}} >Freelance</button>
        <button type="button" className="smbtn px-4 py-1 me-3" style={{backgroundColor:"rgb(204,230,255)"}} >Long-Term</button>
     
        </div>

    </div>
  )
}

export default ArchitectDesign