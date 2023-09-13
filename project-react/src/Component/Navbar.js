import React, { useEffect, useState } from 'react'
import MyContext from './MyContext';
import {Link} from "react-router-dom";


export default function Navbar() {
  const checked = React.useContext(MyContext);
  const [show,handleShow]=useState(false);
  useEffect(()=>{
    
      window.addEventListener("scroll",()=>{
          if(window.scrollY>100)
          {
              handleShow(true);
          }
          else{
              handleShow(false);
          }
      });
      console.log(checked.checked);  
      },[checked]);
  return (
    <div style={{marginTop:'0px'}}>
        <nav className={`${show && checked.checked ? "black": "bulll"} ${!checked.checked ? "lightnav": "nav"}`} style={{marginTop:"10px"}}>
         <ul className="list">
          <li className='item'>
          <b className={`logo ${!checked.checked && "lightlogo"}`}>GoGo Byte-Benders</b>
          </li>      
              <li className='item'>
               <Link  className={`a ${!checked.checked && "lighta"}`}  to="/">Text Editor</Link>
               </li>
                <li className="item">
                  <a  className={`a ${!checked.checked && "lighta"}`} href="http://localhost:3001/Notepad" target='_blank'>MarkDown Notes App</a>
                </li >
                <li className='item'>
                <Link  className={`a ${!checked.checked && "lighta"}`}  to="/about">About</Link>
                    </li>
                
           </ul>
          
          
         </nav>
      
    </div>
  )
}
