import React from 'react'
import "./LeftNavbarmain.css"
import {Container }  from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import PhotoFilterOutlinedIcon from '@material-ui/icons/PhotoFilterOutlined';
import TextsmsOutlinedIcon from '@material-ui/icons/TextsmsOutlined';
import GroupWorkOutlinedIcon from '@material-ui/icons/GroupWorkOutlined';
import ChromeReaderModeOutlinedIcon from '@material-ui/icons/ChromeReaderModeOutlined';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';
import LocalLibraryOutlinedIcon from '@material-ui/icons/LocalLibraryOutlined';
import { Link } from 'react-router-dom';
  

{/*left navi bar for Profilepage*/}

const useStyles = makeStyles({
    btn:{
      textTransform: "none",
      fontSize:14,
      backgroundColor: 'white',
      '&:hover':{
      backgroundColor:"#F4F9C5"
      
           
      }
    }
})


function LeftNavbarprofile() {
   

    const classes= useStyles()
    return (
        <div className="full-box" >
            <div className="leftnavsetti" >
                <div className="void-area"></div>
                <Container>
             <Button
                         className={classes.btn}
                       
                         startIcon={<PhotoFilterOutlinedIcon  style={{ fontSize: 18 }}/>}
                         ><Link to ="/dashboard" style={{textDecoration: 'none', color: 'black'  }}>Dashboard</Link></Button><br/>
                        
                        <Button
                         className={classes.btn}
                         href="#"
                         startIcon={<TextsmsOutlinedIcon style={{ fontSize: 18 }}/>}
                         >Message</Button><br/>

                        <Button
                         className={classes.btn}
                         href="#"
                         startIcon={<GroupWorkOutlinedIcon style={{ fontSize: 18 }}/>}
                         >Magazine</Button><br/>
                        
                        <Button
                         className={classes.btn}
                         
                         startIcon={<LocalLibraryOutlinedIcon style={{ fontSize: 18 }}/>}
                         ><Link to ="/readlist" style={{textDecoration: 'none', color: 'black'  }}>Readlist</Link></Button><br/>

                        <Button
                         className={classes.btn}
                         href="#"
                         startIcon={<ChromeReaderModeOutlinedIcon style={{ fontSize: 18 }}/>}
                        >Guide</Button><br/>

                        <Button
                         className={classes.btn}
                        
                         startIcon={<EventOutlinedIcon style={{ fontSize: 18 }}/>}
                         ><Link to ="/events" style={{textDecoration: 'none', color: 'black'  }}>Events</Link></Button><br/>
               </Container>




</div>

</div>
)
}

export default LeftNavbarprofile

