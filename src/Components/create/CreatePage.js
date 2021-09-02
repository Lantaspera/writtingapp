import React from 'react'
import './create.css'
import { useState } from 'react';

function CreatePage() {
      const [input,setInput] = useState('');
            console.log({input})
    return (
        <div className="Create"> 
            
            
          <form >
             
     
              <label className="Title-c">Title</label>
              <br/>
           

              <div>

              < input className="un-C" type="text" placeholder="title"/>

              </div>
              
              <div>
              <label className="Title-c">Category</label> <br>
              </br>
            
              <select className="untitle">
                  <option className="option" value=""> Select Category </option>
                  <option className="option" value="Auto Biography "> Auto biography </option>
                  <option className="option" value="Biography"> Biography </option>
                  <option className="option" value="Drama "> Drama </option>
                  <option className="option" value="Essay "> Essay </option>
                  <option className="option" value="Fable "> Fable </option>
                  <option className="option" value="Fiction"> Fiction </option>
                  <option className="option" value="Journal">Journal  </option>
                  <option className="option" value="Memoir "> Memoir </option>
                  <option className="option" value="Novel "> Novel </option>
                  <option className="option" value="Poetry "> Poetry </option>
                  <option className="option" value="Prose"> Prose </option>
                  <option className="option" value="Short Story "> Short Story </option> 
                  <option className="option" value="Tavelougs "> Travelougs </option>
              </select>
              </div>
             
              <label className="Title-Lan">Language</label><br>
              </br>
              
              <div>
              <select className="untitle">
                  <option className="option" value=""> Select Language </option>
                  
                  <option className="option" value="Bengali "> Bengali </option>
                  <option className="option" value="English"> English </option>
                  <option className="option" value="Gujarathi "> Gujarathi </option>
                  <option className="option" value="Hindi"> Hindi </option>
                  <option className="option" value="Malayalam"> Malayalam </option>
                  <option className="option" value="Marathi"> Marathi </option>
                  <option className="option" value="Odia "> Odia </option>
                  <option className="option" value="Tamil"> Tamil</option>
                  <option className="option" value="Telugu "> Telugu </option>
                  <option className="option" value="Urdu "> Urdu </option>
                  
                  

              </select>
              </div>
              <label className="Title-Lan">Tagline</label>

              <div >

              <input className="un-C" type="text" placeholder="Enter Tagline" /> 
              </div>
              <label className="Title-Lan">Upload Image</label>
              <div >
                  
                     <input type="file"  style={{display: 'block', marginTop: '10px', Height: '40px', border: '0.5px solid' , borderColor:'#56B280', marginLeft: '11.3%', boxSizing: 'border-box',border: '1px solid #c4c4c4',
    borderRadius: '0px', padding: '.5em',fontSize: '0.875rem', width:'445px'  }} />
                    </div>
            
                
          </form>
           <div>
           
   
    <div>
    <label className="Title-Lan">Compose Here</label><br/>
    <textarea className="draftarea" placeholder="type here" value={input} onInput={e => setInput(e.target.value)}/><br/>
    <input class="submit-D"  value="Submit" type="submit" />
    </div>
  

           </div>
      
        
        </div>
    )
}

export default CreatePage 
