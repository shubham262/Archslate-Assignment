import React from 'react'
import LanguageIcon from '@mui/icons-material/Language';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Arch from "../Archslate.png"
import Blue from "../Blue 4 (1).png"
const Navbar = () => {
    
  return (
    <div className='containerFluid pt-3 pb-2 ps-4 pe-4 navparent'>
        <div className=' d-flex justify-content-between'>
            <div className='d-flex align-items-center'>
                <img height={50} src={Blue}alt="blue" className='me-3'/>
                <img height={32} src={Arch}alt="ss"/>
            </div>
            <div className='d-flex '>
                <div className='d-flex flex-column align-items-center me-4'>
                <span><StarBorderOutlinedIcon/></span>
                <span style={{textAlign:"center",fontWeight:"650"}}>Candidates</span>
                </div>

                <div className='d-flex flex-column align-items-center me-4'>
                <span><LanguageIcon/></span>
                <span style={{textAlign:"center",fontWeight:"650"}}>Companies</span>
                </div>

                <div className='d-flex flex-column align-items-center me-4'>
                <span><WorkOutlineOutlinedIcon/></span>
                <span style={{textAlign:"center",fontWeight:"650"}}>Jobs</span>
                </div>

                <div className='d-flex flex-column align-items-center me-4 '>
                <span><EmailOutlinedIcon/></span>
                <span style={{textAlign:"center",fontWeight:"650"}}>Notifications</span>
                </div>

                <div className='d-flex flex-column align-items-center '>
                <span><PersonOutlineOutlinedIcon/></span>
                <span style={{textAlign:"center",fontWeight:"650"}}>User Name</span>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Navbar