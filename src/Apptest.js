import { Link, NavLink, Route, Routes } from "react-router-dom";
import Home from "./views/pages/Home";
import Story from "./views/pages/Story";
import contact from "./views/pages/contact";
import Services from "./views/pages/Services";
import Navbar from "./views/components/Navbar";
const Apptest = props =>{
  return (
    <div>
      <Navbar/>
      {/* <div>
    <ul className="list-group list-group-flush">
        <li className="list-group-item"> <NavLink to="/"  className={({isActive})=> isActive ? "text-danger":null}>Home</NavLink> </li>

        <li className="list-group-item"> <NavLink  to="/story"  className={({isActive})=> isActive ? "text-danger":null}>Story</NavLink></li> 
         <li className="list-group-item"> <NavLink to="/contact"  className={({isActive})=> isActive ? "text-danger":null}>contact</NavLink></li>
        <li className="list-group-item"><NavLink to="/services"  className={({isActive})=> isActive ? "text-danger":null}>services</NavLink>
</li> 
      </ul>
    </div> */}
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="story" element={<Story/>}></Route>
        <Route path="contact" element={<contact/>}></Route>
        <Route path="services" element={<Services/>}></Route>

      </Routes>
    </div>
  )
}
export default Apptest;