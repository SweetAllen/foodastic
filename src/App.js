import React from "react";
import "./App.css";
import {  Route, Routes } from "react-router-dom";
 import Sign from "./Signup";
import Login from "./Login";
import Home from "./Home";
import { UserAuthContextProvider } from "./context/AuthContext";
import { Container, Row, Col } from "react-bootstrap";
import SidebarLayout from "./SidebarLayout";
import Test from "./Test";
const App = () => {
  return (


     
          <UserAuthContextProvider>
            <Routes>
            <Route element={<SidebarLayout/>}>
              <Route path="/Dashboard" element={<Home />} />
              <Route path="/Test" element={<Test />} />
              <Route path="/Accounts" element={<Test />} />
              <Route path="/Orders" element={<Test />} />
              <Route path="/Search" element={<Test />} />
              <Route path="/Setting" element={<Test />} />
            </Route>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Sign />} />
            </Routes>
          </UserAuthContextProvider>
   

//    <AuthProvider>
//  <Routes>
//     <Route path="/" element={<Signup/>}></Route>
  

//   </Routes>
//    </AuthProvider>
  
 
  );
};

export default App;



