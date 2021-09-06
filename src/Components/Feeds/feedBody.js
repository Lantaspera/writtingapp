import React from 'react'
import LeftNavbarmain from '../LeftNavibar/LeftNavbarmain'
import './feedBody.css'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import NearMeOutlinedIcon from '@material-ui/icons/NearMeOutlined';
function feedBody() {
    return (
        <div >
            <LeftNavbarmain/>
            <div className="main-FB">
                    <div >
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                    <div className="divon-FB">
                                        <img className="img-FB" src="Assets/profile/image 10.jpg" alt=""   />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="sy-FB">
                                            <p className="lon-FB">Andy William</p>
                                            <p className="lto-FB">@andy_william</p>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                   
                   
                        <div className="container-FB">

                    <label className="label-FB">Cheap Photography Setup .</label>
                    <div>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="date-FB">
                                        5. 12 . 2020
                                        </div>
                                    </td>
                                    <td>
                                        <div className="viw-FB">Total viewers  </div>
                                        
                                    </td>
                                    <td>
                                        <div className="viwer-FB">53K views</div>
                                    
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <p className="para-FB">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi volutpat eros nec<br/> aliquam placerat. Curabitur at augue gravida leo iaculis interdum. Interdum et<br/> malesuada fames ac ante ipsum primis in faucibus. In sodales metus eget nisl<br/> iaculis, gravida sagittis diam molestie. Donec eu leo quis elit tempor mollis<br/> Curabitur ut nulla vitae sem volutpat varius id aliquam nibh. Aliquam varius eget <br/>libero nec malesuada. Aliquam ultricies dui velit, vitae tincidunt tellus tempor <br/>congue. Vestibulum vel dui ipsum. Nunc tempus ipsum a dolor placerat, in mollis<br/> justo mattis. Sed lobortis nunc non feugiat rhoncus.Curabitur ut nulla vitae sem .
                        </p>
                    </div>
                   
                    </div>
                    
                    </div> 
                    <div className="right-FB">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                     <ThumbUpAltIcon style={{color:'red'}}/> <span className="like-FB">Like</span>
                                    </td>
                                    <td>
                                       <span className="likes-FB">23 k</span> 
                                    </td>

                                    <td className="icon-FB">
                                    <NearMeOutlinedIcon style={{color:'#1890FF',marginLeft:'70px'}} /> <span className="share-FB">Share  </span> 
                                    
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                        <div className="box-FB">
                            
                            <p className="cmt-FB">comment here</p>

                        </div>
                        <div>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="pr-FB">
                                            <img className="prfl-FB" src="Assets/profile/image 12.jpg" alt=""   />
                                            </div>
                                        </td>
                                        <td>
                                           <div className="side-FB">
                                           <p className="aut-FB">@johny_wise</p>
                                           <p className="auth-FB">kollam mamaa .. pwoli sanam</p>

                                           </div>

                                        </td>
                                        <td>
                                            <p className="time-FB">10:10 am</p>
                                            </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="pr-FB">
                                            <img className="prfl-FB" src="Assets/profile/image 12.jpg" alt=""   />
                                            </div>
                                        </td>
                                        <td>
                                           <div className="side-FB">
                                           <p className="aut-FB">@johny_wise</p>
                                           <p className="auth-FB">kollam </p>

                                           </div>

                                        </td>
                                        <td>
                                            <p className="time-FB">11:10 am</p>
                                            </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>

        </div>
    )
}

export default feedBody
