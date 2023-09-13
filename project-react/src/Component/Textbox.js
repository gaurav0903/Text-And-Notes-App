import React, { useState } from 'react'
// import { useEffect } from 'react';
import copy from './copy.png'
import Tooltip from '@mui/material/Tooltip';
import MyContext from './MyContext';

export default function Textbox() {
const[Text,setText]=useState(" ");
  function Changetext(text){
    setText(text);
   }
  
//    function ConvertUpper(){
//     setText(Text.toUpperCase());
//    }
function Toggle(str){
    
       let a= str.toUpperCase().split(' ').map(function(word) {
          return (word.charAt(0).toLowerCase() + word.slice(1));
        }).join(' ');
        Changetext(a);
}
function Capitalize(str){
  let a= str.toLowerCase().split(' ').map(function(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
  Changetext(a);
}
function alternatingCaps(s) {
  // let alternate = str.charAt(0).toUpperCase();
  // for(let i = 1; i < str.length; i++) {
  //     let previousChar = str.charAt(i - 1);
  //     if(previousChar === previousChar.toUpperCase())
  //         alternate += str.charAt(i).toLowerCase();
  //     else if(previousChar === previousChar.toLowerCase())
  //         alternate += str.charAt(i).toUpperCase();
  // }
 
let ul = false;
s = s.split('').map(letter => letter.match(/[a-zA-Z]/) != null ? (ul = ! ul, ul ? letter.toUpperCase() : letter.toLowerCase()) : letter).join('');
console.log( s );
  Changetext(s);
}
const { checked, handleChange } = React.useContext(MyContext);

  return (<>
  <h1 className={` ${!checked?"text-container":"text-containerlight"} `} style={{marginTop:"150px"}}>
  Text Editor App</h1>
  {/* <p className='typing-animation'>GoGoByte Binders is a handy web application that enables you to change the text case of any given text.</p> */}
  {checked && <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=16&pause=1000&color=F5F7F6&center=true&width=860&lines=GoGoByte+Benders+is+a+handy+web+application+that+enables+you+to+Play+with+Text.;Simply+copy+and+paste+the+text+into+the+text+area+below+and+click+the+required+text+case." alt="Typing SVG" /></a>}
  {!checked && <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=16&pause=1000&color=000&center=true&width=860&lines=GoGoByte+Benders+is+a+handy+web+application+that+enables+you+to+Play+with+Text.;Simply+copy+and+paste+the+text+into+the+text+area+below+and+click+the+required+text+case." alt="Typing SVG" /></a>}
    <div className='textboxset'>
    <div className='textbox'>
      <textarea className="editor" placeholder="Start typing here..." onChange={e=>{Changetext(e.target.value)}}></textarea><div>
        <Tooltip title="Copy To Clipboard">
      <button className='bu'onClick={()=>{navigator.clipboard.writeText(Text)}}><img class="copy" src={copy} alt='Image' /></button>
      </Tooltip>
      </div>
      </div>
      <textarea className="editor2" style={{opacity:0.6}}placeholder="Your Text" value={Text}></textarea>
    </div>
    <div className="textboxset">
    <Tooltip title="Convert into UpperCase">
    <button className='bus'onClick={()=>{Changetext(Text.toUpperCase())}}>UpperCase</button>
    </Tooltip>
    <Tooltip title="Convert into LowerCase">
    <button className='bus'onClick={()=>{Changetext(Text.toLowerCase())}}>LowerCase</button>
    </Tooltip>
    <Tooltip title="Convert into tOGGLE cASE">
    <button className='bus'onClick={()=>{Toggle(Text)}}>tOGGLE cASE</button>
    </Tooltip>
    <Tooltip title="Capitalize Word">

    <button className='bus'onClick={()=>{Capitalize(Text)}}>Capitalize Word</button>
    </Tooltip>
    <Tooltip title="aLtErNaTe cAsE">
    <button className='bus'onClick={()=>{alternatingCaps(Text)}}>aLtErNaTe cAsE</button>
    </Tooltip>
    </div>
 
    </>
  )
}


