import React from "react";
import {  Routes, Route } from "react-router-dom";
import Error from "./Component/Error";
import Home from "./Component/Home";
import SinglePage from "./Component/SinglePage";


const App = () => {
  return (
     <>

   
     <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="movie/:id" element={<SinglePage/>}/> 
      <Route path="*" element={<Error/>}/> 

     </Routes>
    

     
    
    </>
  )
};

export default App;
