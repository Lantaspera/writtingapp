import React from 'react'
import "./SecurityPage.css"
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import GetAppOutlinedIcon from '@material-ui/icons/GetAppOutlined';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import PolicyOutlinedIcon from '@material-ui/icons/PolicyOutlined';
import DevicesOutlinedIcon from '@material-ui/icons/DevicesOutlined';
import DeviceUnknownOutlinedIcon from '@material-ui/icons/DeviceUnknownOutlined';


function SecurityPage() {
    return (
        <div className="main-SE">
            <div className="sub-SE">
            <section className="tb-SE">
                <p className="title-SE">Login Security</p>
                
                    
                            <div className="icon-SE">
                                
                            
                                <p className="cnt-SE" ><VpnKeyOutlinedIcon/>    Change Password</p>
                                < p className="subcnt-SE">You can change your password here for making your account more secure</p>

                            </div>
                       
                            <div className="icon-SE" >
                                

                            
                                <p className="cnt-SE"><DevicesOutlinedIcon/>   Login Activity</p>
                                <p className="subcnt-SE">You can see the devices and location where you’re logged in</p>

                            </div>
                        
                            <div className="icon-SE" >
                                
                            
                                <p className="cnt-SE"><DeviceUnknownOutlinedIcon/>   Two-factor authentication</p>
                                <p className="subcnt-SE">Add extra secutity to your account</p>
                           </div>
                           
                        </section>
                        <hr className="lin-SE"/>
            </div>
            <div className="sub-SE">
            <section className="tb-SE">
                <p className="title-SE">Data and history</p>
                
                    
                            <div className="icon-SE">
                                
                            
                                <p className="cnt-SE"> <GetAppOutlinedIcon/>    Download data</p>
                                < p className="subcnt-SE">Get a copy of what you’ve shared on LOGONAME</p>

                            </div>
                       
                            <div className="icon-SE" >
                                

                            
                                <p className="cnt-SE"> <SearchRoundedIcon/>   Clear search history</p>
                                <p className="subcnt-SE">Clear your recent search history deatis</p>

                            </div>
                        
                            
                           
                        </section>
                        <hr className="line-SE"/>
            </div>
            <div className="sub-SE">
            <section className="tb-SE">
                
                
                    
                            <div className="icon-SE">
                                
                            
                                <p className="cnt-SE"> <PolicyOutlinedIcon/>   Security Policy</p>
                                < p className="subcnt-SE">Read and learn more about our security policies here</p>

                            </div>
                       
                            
                        </section>
                       
            </div>
            
            
        </div>
    )
}

export default SecurityPage
