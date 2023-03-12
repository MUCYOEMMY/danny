import React from 'react'
import '../css/teacherinfo.css';
const Teacherinfo = () => {
  return (
    
         <div className='body'>
        
        <div className='container5'>
           <h1>Information details for teacher Profile</h1>
           
            <input type="text" placeholder='Name'/>
            <input type="file" placeholder='Profile'/><br />
            <input type="text" placeholder='Email'/>
            <select name="user" >
               <option value="red" className='placeholder' >TimeAvailable</option>
               <option value="red">8:00-12:00</option>
                <option value="blue">14:00-16:00</option>
            </select><br />  
           
            <input type="text" placeholder='Address'/>
            <select name="user" >
               <option value="red" className='placeholder' >PaymentMethod</option>
               <option value="red">Bank Account</option>
                <option value="blue">Mobile Number</option>
                
            </select><br />
            <select name="user" >
               <option value="red" className='placeholder' >TeachingStyle</option>
               <option value="red">Online</option>
                <option value="blue">Face to Face</option>
            </select>
            <input type="textarea" placeholder='Address'/>
            <br />  
           
           <br />
           
           <select name="user" >
               <option value="red" className='placeholder' >Gender</option>
               <option value="red">Female</option>
                <option value="blue">Male</option>
            </select>
           <select name="user" >
               <option value="red" className='placeholder' >Course</option>
               <option value="red">Chemistry</option>
                <option value="blue">Biology</option>
                <option value="red">Math</option>
                <option value="blue">Geography</option>
            </select><br />
             <input type="submit" value="SUBMIT"/>
            </div>
    </div>
  )
}

export default Teacherinfo