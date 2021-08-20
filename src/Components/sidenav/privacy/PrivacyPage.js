import React from 'react'
import './Privacy.css'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import AlternateEmailOutlinedIcon from '@material-ui/icons/AlternateEmailOutlined';
import BlockOutlinedIcon from '@material-ui/icons/BlockOutlined';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';

function PrivacyPage() {
    return (
        <div className="privacy">
             <h1 className="title">Account Privacy</h1>
            <div className="acc-section">
                <form>
                    <table>
                        <tbody>
                            <tr>
                            
                    <label className="priv-tag"><LockOutlinedIcon/>Private account</label>
                               
                    <td><input  className="priv-tags" name="private" type="radio"/>Enable</td>
                  
                    <td><input name="private" type="radio"/>Disable</td>
                    
                    </tr>
                    </tbody>
                    </table>
                </form>
                
            </div>
        
        
            <hr className="line-sec"/>
            <div className="int-section">
                <h2 className="title">Interactions</h2>
                <form>
                    <h3 className="sub-title"><ModeCommentOutlinedIcon/> Comments</h3>
                    <div>
                        <table className="allow">
                            <tbody>
                                <tr>
                        <td><label className="allow">Allow comments from</label></td>
                        <td><select className="untitle">
                            <option className="option" value="">Everyone</option>
                            <option className="option" value="">Onlyfriends</option>
                        </select></td>
                        </tr>
                        <tr>
                        <td><label className="allow">Block comments from</label></td>
                        <td><select className="untitle">
                            <option className="option" value="">0 person</option>
                        </select></td>
                        </tr>

                        </tbody>
                        </table>
                    </div>
                    
                    <h4 className="sub-title"><LocalOfferOutlinedIcon/> Tags</h4>
                    <div>
                        <table className="allow">
                            <tbody>
                                <tr>
                        <td><label className="allow">Allow tags from</label></td>
                        <td><select className="untitle">
                            <option className="option" value="">Everyone</option>
                            <option className="option" value="">Onlyfriends</option>
                        </select></td>
                        </tr>
                        <label className="prv">Manually approve tages</label>
                        <td><input name="allow-rad" type="radio"/></td>
                        <td><input name="allow-rad" type="radio"/></td>
                        </tbody>
                        </table>
                    </div>
                    
                    <h5 className="sub-title"><AlternateEmailOutlinedIcon/> Mentions</h5>
                    <div>
                        <table className="allow">
                            <tbody>
                                <tr>
                        <td><label className="allow">Allow @mentions from </label></td>
                        <td><select className="untitle">
                            <option className="option" value="">Everyone</option>
                            <option className="option" value="">Onlyfriends</option>
                        </select></td>
                        </tr>
                        </tbody>
                        </table>
                    </div>
                </form>
                </div>
                <hr className="line-sec"/>
                <div>
                    <h6 className="title">Connections</h6>
                    <div>
                        <label className="allow"><BlockOutlinedIcon/> Blocked accounts</label>
                        
                    </div>
                    <div>
                        <label className="allow"><PeopleAltOutlinedIcon/> Accounts you follow</label>
                    </div>
                    </div>
                    <hr className="line-sec"/>
                    <div className="pol">
                        <h7 className="title">Privacy Policy</h7><br>
                        </br>
                        <a href="" className="allow">Read and learn more about our privacy policy here </a>
                    </div>
                    
                
                
                
        </div>   
            
        
    )
}

export default PrivacyPage
