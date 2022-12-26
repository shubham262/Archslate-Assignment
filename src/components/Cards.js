import React from 'react'
import ElectricBoltOutlinedIcon from '@mui/icons-material/ElectricBoltOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import logo from "../2CCCA2E6-BCB7-47BE-8DF3-073347686B17 1.png"
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Cards = (props) => {

    // const ctyle={
    //     backgroundColor:"red",
    //     width:"14rem",
    //     height:"11rem",
    //     padding:"10px",
    //     marginRight:"20px"
        
    // }
    
  // var text=props.topic
  var booltype={
    Software:false,
    Experience:false,
    Rate:false,
    Location:false,
    JobPoster:false
  }
    const total={
       Software:{
        backgroundColor:"white",
        width:"15rem",
        height:"13rem",
        padding:"10px",
        marginRight:"25px"
      },
       Experience:{
        backgroundColor:"white",
        width:"15rem",
        height:"13rem",
        padding:"10px",
        marginRight:"25px"
      },
       Rate:{
        backgroundColor:"white",
        width:"15rem",
        height:"13rem",
        padding:"10px",
        marginRight:"25px"
      },
      
       Location:{
        backgroundColor:"white",
        width:"15rem",
        height:"13rem",
        padding:"10px",
        
      },
      JobPoster:{
        backgroundColor:"white",
        width:"15rem",
        height:"13rem",
        padding:"10px",
      }
     
    }

    var a=total[props.topic]
    booltype[props.topic]=true
    
    console.log(props.topic)
  return (
    <div className='px-3' style={a}>
      {booltype['Software']?<><div className='d-flex align-items-center '>
      <ElectricBoltOutlinedIcon className='me-3'/>
      <span style={{fontWeight:"600",fontSize:"20px"}}>Software Skills</span>
      </div>
      <div className='d-flex flex-wrap justify-content-center mt-3'>
      <button type="button" className="smbtn  px-3 py-1 me-2 d-flex align-content-center" style={{backgroundColor:"rgb(15,20,32)",color:"white"}} ><ElectricBoltOutlinedIcon fontSize="small"/>Rhino</button>
      <button type="button" className="smbtn  px-3 py-1 " style={{backgroundColor:"rgb(15,20,32)",color:"white"}} >Sketchup</button>
      <button type="button" className="smbtn mt-3 px-3 py-1 " style={{backgroundColor:"rgb(15,20,32)",color:"white"}} >Vectorworks</button>


      </div>
      
      </>
      :""}

      {booltype['Experience']?<><div className='d-flex align-items-center '>
      <StarBorderOutlinedIcon className='me-3'/>
      <span style={{fontWeight:"600",fontSize:"20px"}}>Experience</span>
       </div>
       <div className='d-flex flex-column align-items-center mt-2'>
        <span style={{fontSize:"28px",fontWeight:"350"}}>Associate</span>
        <span style={{fontSize:"28px",fontWeight:"350"}}>3+ years</span>
        </div>
        </>:""}

      {booltype['Rate']?<><div className='d-flex align-items-center'>
      <AttachMoneyOutlinedIcon className='me-3'/>
      <span style={{fontWeight:"600",fontSize:"20px"}}>Rate</span>
      </div>
      <div className='mt-4 ms-4'>
      <span style={{fontWeight:"350",fontSize:"28px"}} className=''>$55-$65/hour</span>

      </div>
      </>
      :""}

      {booltype['Location']?<><div className='d-flex align-items-center '>
      <LocationOnOutlinedIcon className='me-3'/>
      <span style={{fontWeight:"600",fontSize:"20px"}}>Location</span>
        
      </div>
      <div className=' d-flex flex-column mt-2 ms-4'>
      <span style={{fontWeight:"350",fontSize:"28px"}} className=''>Bozeman,MT</span>
      <span style={{fontWeight:"350",fontSize:"28px"}} className=''>USA</span>
      <button type="button" className="smbtn py-1 mt-3" style={{backgroundColor:"rgb(252,205,237)",color:"black",width:"8vw"}}><b>On-site</b></button>

      </div>
      </>:""}
      

      {booltype['JobPoster']?<><div className='d-flex align-items-center '>
      
      <span className='ms-4' style={{fontWeight:"600",fontSize:"20px"}}>Job Poster</span>
        
      </div>
      <div className=' d-flex ms-3 mt-4 align-items-center'>
      <img  className='me-2' src={logo} alt="job poster"/>
      <div className='d-flex flex-column'>
      <span style={{fontSize:"25px",fontWeight:"100"}}>John Carlos</span>
      <span style={{fontWeight:"600"}}>Project Manager</span>
      </div>
      </div>
      <div className='d-flex justify-content-center mt-3'>
      <button type="button" className="smbtn  px-4 py-1 me-3  d-flex align-items-center" style={{fontWeight:"510",fontSize:"20px",backgroundColor:"rgb(15,20,32)",color:"white"}} ><EmailOutlinedIcon className=''/>Message</button>

      </div>
      </>:""}

    </div>
  )
}

export default Cards