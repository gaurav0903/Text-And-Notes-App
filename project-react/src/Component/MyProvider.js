// MyProvider.js
import React, { useEffect, useState } from 'react';
import MyContext from './MyContext';

const MyProvider = ({ children }) => {
   const [checked, setChecked] = useState(true);
   const [theme,setTheme]=React.useState("boddark");
   React.useEffect(()=>{
    
     document.body.className=theme;
     
   },[theme]);

   React.useEffect(()=>{
    if(!checked){
      setTheme("bodlight");
    }
    else{
      setTheme("boddark");
    }
   },[checked])
  const handleChange = () => {

    setChecked(!checked);
 
  };

  return (
    <MyContext.Provider value={{ checked, handleChange }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
