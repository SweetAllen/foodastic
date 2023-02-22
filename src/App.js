import React from "react";
import "./App.css";
import {  Route, Routes } from "react-router-dom";
 import Sign from "./Signup";
import Login from "./Login";
import Home from "./Home";
import { UserAuthContextProvider } from "./context/AuthContext";
import { Container, Row, Col } from "react-bootstrap";

// import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
<Container style={{ width: "400px" }}>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Sign />} />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row >
    </Container >
//    <AuthProvider>
//  <Routes>
//     <Route path="/" element={<Signup/>}></Route>
  

//   </Routes>
//    </AuthProvider>
  
 
  );
};

export default App;



