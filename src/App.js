import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from 'react-router-dom';
import "./App.css"
import Navibar from './Components/Navibar';

import SignupForm from './Components/signup/SignupForm'
import Footer from './Pages/Footer';



function App() {
  return (
    <div className="App">

       <Navibar/>
       <Footer/>
     {/* <SignupForm/>      */}
    </div>
    

  )

  }
  

export default App;
