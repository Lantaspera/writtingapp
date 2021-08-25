import React from 'react'
import './DashboardPage.css'
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import AccessTimeOutlinedIcon from '@material-ui/icons/AccessTimeOutlined';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';
import BarChartOutlinedIcon from '@material-ui/icons/BarChartOutlined';

function DashboardPage() {
    return (
        <div className="main-DB">
            
            <div className="boxone-DB">

                <table>
                    <tbody>
                        <tr>
                            <td>
                            <p className="tyt-DB">Pending writings</p>


                            </td>
                            <td>
                            <div className="ic-DB">
                                < LibraryBooksOutlinedIcon style={{fontSize:'2.5 rem' , backgroundImage: 'none',color:'white', margin:'10px'}} />
                         </div>
                         </td>
                        </tr>
                        <tr>
                            <td>
                            <p className="cat-DB">10 wr</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <section className="divtwo-DB">
            <div className="boxone-DB">
                <table>
                    <tbody>
                        <tr>
                            <td>
                            <p className="tyt-DB">Magazine </p>
                            </td>
                            <td>
                            <div className="ictwo-DB">
                                <p className="mg-DB">MG</p>

                         </div>
                         </td>
                        </tr>
                        <tr>
                            <td>
                            <p className="cat-DB">10 wr</p>
                            </td>
                            <td>
                                <div>
                                <p className="per-DB">+5%</p>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>  
            </div> 
            </section>
            <div>

            <div className="boxfyv-DB">
                <p className="ca-DB">Work with the rockets </p>
                <p className="ta-DB">Wealth creation is an evolutionarily recent positive-sum<br/> game. It is all about who take the opportunity first.</p>
            </div>
        </div>

        <div>

            <div className="divthree-DB">
                <div className="boxthree-DB">
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <p className="head-DB">Your Achievement</p>
                                </td>
                                <td>
                                    <div className="badgeon-DB">
                                <LoyaltyIcon style={{ width: '180px', height: '174px', color: "#880E4F"}} />
                                </div>
                                </td>

                            </tr>
                            <tr>
                                <div className="descp-DB">
                                <p className="lineon-DB">Total writings</p>
                                <p className="lineto-DB">< CreateOutlinedIcon style={{fontSize:'2.5rem' , backgroundImage: 'none'}}/>  10 wr</p>
                                <p className="linetre-DB">This is the writtings you have successfully<br/> published </p>
                                </div>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>


                <section className="divfor-DB">
                <div className="boxfor-DB">
                <table>
                        <tbody>
                            <tr>
                                <td>
                                    <p className="head-DB">Your Achievement</p>
                                </td>
                                <td>
                                    <div className="badge-DB">
                                <LoyaltyIcon style={{ width: '180px', height: '174px', color: "#880E4F"}} />
                                </div>
                                </td>

                            </tr>
                            <tr>
                                <div className="descp-DB">
                                <p className="lineon-DB">Total Reading</p>

                                <p className="lineto-DB">< AccessTimeOutlinedIcon style={{fontSize:'2.5rem' , backgroundImage: 'none'}} />   600 hr</p>
                                <p className="linetre-DB">This is the time you have spending for <br/> reading in hours   </p>
                                </div>
                            </tr>
                         </tbody>
                    </table>
                </div>
            </section>


        </div>
        <div className="boxsix-DB">
        <p className="lynon-DB">On going levels status</p>
            <table>
                <tbody>
                    <tr>
                       
          
           <td> <p className="lynto-DB"><ArrowUpwardOutlinedIcon style={{fontSize:'1.5 rem' , color:'#82D616'}}/>  24% </p></td>
            <td><p className="lyntre-DB">this month</p></td>
            </tr>
            </tbody>
            </table>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <div className="br-DB">
                                <BarChartOutlinedIcon style={{fontSize:'2.5 rem' , backgroundColor: '#FF0055',color:'white', margin:'15px',marginTop:'-20px', paddingTop:'-17px',borderRadius:'4px'}}/>

                                </div>
                            </td>
                            <td>
                                <p className="lvl-DB">Level two writting  </p>
                                <p className="lel-DB">8 task completed out of 10</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <div className="br-DB">
                                <BarChartOutlinedIcon style={{fontSize:'2.5 rem' , backgroundColor: '#8A2BE2',color:'white', margin:'15px',marginTop:'-20px', paddingTop:'-17px',borderRadius:'4px'}}/>

                                </div>
                            </td>
                            <td>
                                <p className="lvl-DB">Level two Reading   </p>
                                <p  className="lel-DB">5 task completed out of 6 </p>
                            </td>
                        </tr>
                    </tbody>
                </table>


            </div>

        </div>
        <div>
     <div className="tb-DB"> 
     <p className="tbtyt-DB">posts</p>
     <div className="set-DB">
         <table>
             <tbody>
                 <tr>
                     <td> <p className="capt-DB">done this month</p></td>
                      <td>  <p className="sics-DB">6</p></td>
                      </tr>
             </tbody>
         </table>
    
     </div>
     <div className="tbl-DB">
         <table>
             <tbody>
                 <tr>
                     <td className="rowone-DB">
                         <div className="colone-DB" style={{ color: '#8392AB'}}>title</div> </td>
                     <td className="rowone-DB">
                        <div className="coltoo-DB"> likes</div></td>
                     <td className="rowone-DB">
                         <div className="coltre-DB">view</div></td>
                     <td className="rowone-DB">
                         <div className="colfor-DB">most reach</div></td>
                 </tr>
                 <tr>
                     <td><div className="colone-DB">
                         into the wilding
                         </div>
                         </td >
                         <td className="rowone-DB"><div className="coltoo-DB">
                         14,000
                         </div>
                         </td>
                         <td className="rowone-DB"><div className="coltre-DB">
                         20,000
                         </div>
                         </td>
                         <td className="rowone-DB">
                             <div className="colfor-DB">
                         90%
                         <div class="container-DB">
                         
                        <div class="progress-bar" style={{background: '#52C41A', width: '90%'}}></div>
                        </div>
                     
                     </div>
                         
                         </td>

                 </tr>
                 <tr>
                     <td><div className="colone-DB">
                     Hope is Track
                         </div>
                         </td >
                         <td className="rowone-DB"><div className="coltoo-DB">
                         1,000
                         </div>
                         </td>
                         <td className="rowone-DB"><div className="coltre-DB">
                         3,000
                         </div>
                         </td>
                         <td className="rowone-DB">
                             <div className="colfor-DB">
                             10%
                             <div class="container-DB">
                         
                         <div class="progress-bar" style={{background: '#F5222D', width: '10%'}}></div>
                         </div>
                        
                     </div>

                         
                         </td>

                 </tr>
                 <tr>
                     <td><div className="colone-DB">
                     Fix your problmes
                         </div>
                         </td >
                         <td className="rowone-DB"><div className="coltoo-DB">
                         4,000
                         </div>
                         </td>
                         <td className="rowone-DB"><div className="coltre-DB">
                         5,000
                         </div>
                         </td>
                         <td className="rowone-DB">
                             <div className="colfor-DB">
                             60%
                         
                             <div class="container-DB">
                         
                         <div class="progress-bar" style={{background: 'linear-gradient(135deg, #21D4FD 0%, #2152FF 100%)', width: '60%'}}></div>
                         </div>
                     </div>

                         
                         </td>

                 </tr>
                 <tr>
                     <td><div className="colone-DB">
                     U.S Launching new missile
                         </div>
                         </td >
                         <td className="rowone-DB"><div className="coltoo-DB">
                         15,000
                         </div>
                         </td>
                         <td className="rowone-DB"><div className="coltre-DB">
                         30,000
                         </div>
                         </td>
                         <td className="rowone-DB">
                             <div className="colfor-DB">
                             100%
                         
                             <div class="container-DB">
                         
                         <div class="progress-bar" style={{background: '#52C41A', width: '100%'}}></div>
                         </div>
                     </div>

                         
                         </td>

                 </tr>
                 <tr>
                     <td><div className="colone-DB">
                     dracula villa
                         </div>
                         </td >
                         <td className="rowone-DB"><div className="coltoo-DB">
                         900
                         </div>
                         </td>
                         <td className="rowone-DB"><div className="coltre-DB">
                         1,010
                         </div>
                         </td>
                         <td className="rowone-DB">
                             <div className="colfor-DB">
                             80%
                             <div class="container-DB">
                         
                         <div class="progress-bar" style={{background: '#1890FF', width: '80%',}}></div>
                         </div>
                        
                     </div>

                         
                         </td>

                 </tr>
                 <tr>
                     <td><div className="colone-DB">
                     stupid politics
                         </div>
                         </td >
                         <td className="rowone-DB"><div className="coltoo-DB">
                         800
                         </div>
                         </td>
                         <td className="rowone-DB"><div className="coltre-DB">
                         1,000
                         </div>
                         </td>
                         <td className="rowone-DB">
                             <div className="colfor-DB">
                             10%  
                             <div class="container-DB">
                         
                         <div class="progress-bar" style={{background: '#F5222D', width: '10%',}}></div>
                         </div>     

                     </div>

                         
                         </td>

                 </tr>
             </tbody>
         </table>
     </div>

     </div>
     </div>
     </div>
     <div className="boxsvn-DB">
         <p className="l-DB">Active time</p>
         <div className="t-DB">
             <table>
                 <tbody>
                     <tr>
                         <td>
                         <p className="lon-DB">(+23%)</p>
                         </td>
                         <td>
                             <p className="lto-DB">than last month</p>
                         </td>
                     </tr>
                 </tbody>
         
         </table>
         </div>
         <div>
             <table>
                 <tbody>
                     <tr>
                         <td >
                             <div className="colm-DB">viewers</div>

                         </td>
                         <td >
                             <div className="colm-DB">likes</div>

                         </td>
                         <td >
                             <div className="colt-DB">post</div>

                         </td>
                         <td >
                             <div className="colf-DB">followers</div>

                         </td>
                     </tr>
                     <tr>
                         <td>
                             <div className="rw-DB">3,6K</div>
                         </td>
                         <td>
                             <div className="rwto-DB">2 k</div>
                             </td>
                             <td>
                                 <div className="rwtr-DB">
                                 10 
                                 </div>
                             </td>
                             <td>
                                 <div className="rwfr-DB">82 <ArrowUpwardOutlinedIcon style={{fontSize:'1.5 rem' , color:'#82D616',marginTop:'-3px'}}/></div>
                             </td>
                             <td>
                                 <div></div>
                             </td>

                     </tr>
                 </tbody>
             </table>
         </div>


     </div>


        </div>
    )
}

export default DashboardPage
