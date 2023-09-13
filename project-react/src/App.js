import "./App.css";
import Navbar from "./Component/Navbar";
import Textbox from "./Component/Textbox";
import CustomizedSwitches from "./Component/CustomizedSwitches";
import Footer from "./Component/Footer";
// import { useState } from "react";
import MyProvider from "./Component/MyProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
// import Yapp from './Yash/Yapp'

function App() {
  return (
    <BrowserRouter>

    <div className="bod"> <MyProvider>
      <Navbar />
      <div className="Changemode">
        {" "}
        {/* Changed 'class' to 'className' */}
        {/* <UserContext.Provider value={{ checked, handleChange }}> */}
        
          <CustomizedSwitches />
    
        {/* </UserContext.Provider> */}
      </div>
      <Routes>
      <Route path="/" element={<Textbox />}></Route>
      <Route path="/about" element={<Home />}></Route>
      </Routes>
      <Footer />
      </MyProvider>
    </div>
    
    </BrowserRouter>
  );
}

export default App;
