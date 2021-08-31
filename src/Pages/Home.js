import React from 'react'
import Feeds from '../Components/FeedFolder/Feeds'

import LeftNavbarmain from '../Components/LeftNavibar/LeftNavbarmain'


function Home() {
    return (
        
        <div className="home-main">
            
            <LeftNavbarmain/>
           
        <div className="feedss">

            <Feeds/>
            
           
        </div>
            
        </div>

       
    )
}

export default Home
