import React from 'react'
import './Privacy.css'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import AlternateEmailOutlinedIcon from '@material-ui/icons/AlternateEmailOutlined';
import BlockOutlinedIcon from '@material-ui/icons/BlockOutlined';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import { Icon } from '@material-ui/core';

function PrivacyPage() {
    return (
        <div className="privacy">
             <h1 className="title-one">Account Privacy</h1>
            <div className="privacy-section">
                
                    <table>
                        <tbody>
                            
                     <Icon><LockOutlinedIcon/></Icon>       
                    <label className="priv-tag">Private account</label>
                               
                   <input className="input-one" name="private" type="radio"/>
                    <label>Enable</label>
                    
                  
                    <input className="input-two"  name="private" type="radio"/>
                    <label>Disable</label>
            
                    
                
                    </tbody>
                    </table>
        
                
            </div>
            <hr className="lin-PE"/>
            <div>
                <h2 className="title-one">Interactions</h2>
                
                    
                    <label className="sub-title"><ModeCommentOutlinedIcon/>    Comments</label>
                    <div>
                        <table>
                            <tbody>
                                <tr>
                        <label className="allow-pri">Allow comments from</label>
                        <td><select className="privacy-title">
                            <option className="option" value="">Everyone</option>
                            <option className="option" value="">Onlyfriends</option>
                        </select></td>
                        </tr>
                        <tr>
                        <label className="allow-pri">Block comments from</label>
                        <td><select className="privacy-title">
                            <option className="option" value="">0 person</option>
                        </select></td>
                        </tr>

                        </tbody>
                        </table>
                    </div>
                    <div>
                    <label className="sub-title"><LocalOfferOutlinedIcon/>    Tags</label>
                        <table>
                            <tbody>
                               <tr>
                        <label className="allow-pri2">Allow tags from </label>
                        <td><select className="privacy-title">
                            <option className="option" value="">Everyone</option>
                            <option className="option" value="">Onlyfriends</option>
                        </select></td>
                        </tr>
                        <tr>
                            
                        <td><label className="allow-pri2">Manually approve tags</label></td>
                        <td>
                        <input className="input-3" placeholder="private" type="radio"/>
                             <label>yes</label>
                             <input className="input-two"  placeholder="private" type="radio"/>
                             <label>Off</label></td>
                             
                        </tr>
                        </tbody>
                        </table>
                        
                         </div>
                         <div>
                    
                         <label className="sub-title"><AlternateEmailOutlinedIcon/> Mentions</label>
                        <table >
                            <tbody>
                                <tr>
                                
                        <td><label className="allow-pri">Allow @mentions from </label></td>
                        <td><select className="privacy-title">
                            <option className="option" value="">Everyone</option>
                            <option className="option" value="">Onlyfriends</option>
                        </select></td>
                        </tr>
                        </tbody>
                        </table>
                    </div>
                
                </div>
                <hr className="line-sec"/>
                <div>
                    <label className="title-one">Connections</label>
                    <div className="con-com">
                        <label className="priv-tag"><BlockOutlinedIcon/> Blocked accounts</label> 
                        <br></br>
                        
                    
                        <label className="priv-tag"><PeopleAltOutlinedIcon/> Accounts you follow</label>
                    </div>
                    </div>
                    <hr className="line-sec"/>
                    <div>
                        <label className="title-one">Privacy Policy</label>
                        <br></br>
                        <a  className="hper-link" href="">Read and learn more about our privacy policy here </a>
                    </div>
                    
                
                
                
        </div>   
            
        
    )
}

export default PrivacyPage
