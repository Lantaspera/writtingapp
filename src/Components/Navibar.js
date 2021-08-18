import React from 'react'
import Navbar from './topNavbar/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from '../Pages/Home';
import Profile from '../Pages/Profile';
import Notifications from '../Pages/Notifications';
import Settings from '../Pages/Settings';
import Create from '../Pages/Create';
import ReadList from '../Pages/ReadList';
import Help from '../Pages/Help';
import Booming from '../Pages/Booming';
import Events from '../Pages/Events';
import Security from '../Pages/Security';



function Navibar() {
    return (
        <div className="navigation">
          <Router>
             <Navbar/> 
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route path ='/notifications' component={Notifications}></Route>
                <Route path ='/profile' component={Profile}></Route>
                <Route path ='/create' component={Create}></Route>
                <Route path ='/settings' component={Settings}></Route>
                <Route path = '/readlist' component={ReadList}></Route>
                <Route path ='/accountsettings' component={Settings}></Route>
                <Route path = '/help' component={Help}></Route>
                <Route path = '/booming' component={Booming}></Route>
                <Route path = '/security' component={Security}></Route>
                <Route path = '/events' component={Events}></Route>
            </Switch>
          </Router>
        </div>
    )
}

export default Navibar;
