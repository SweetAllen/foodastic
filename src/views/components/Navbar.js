import { NavLink } from "react-router-dom";
const Navbar= props =>{
    return(
        <div >

          <nav class="navbar navbar-expand-lg bg-light">
  <div class="container">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="btn border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Menu</button>

  
        
      
  </div>
</nav>








<div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasTopLabel">Repo Hub</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
    <ul className="list-group list-group-flush">
        <li className="list-group-item"> <NavLink to="/"  className={({isActive})=> isActive ? "text-danger":null}>Home</NavLink> </li>

        <li className="list-group-item"> <NavLink  to="/story"  className={({isActive})=> isActive ? "text-danger":null}>Story</NavLink></li> 
         <li className="list-group-item"> <NavLink to="/contact"  className={({isActive})=> isActive ? "text-danger":null}>contact</NavLink></li>
        <li className="list-group-item"><NavLink to="/services"  className={({isActive})=> isActive ? "text-danger":null}>services</NavLink>
</li> 
      </ul>
    
     {/* <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
       <li className="nav-item">
        <NavLink to="/"  className={({isActive})=> isActive ? "text-danger":null}>About</NavLink>
        <li className="nav-item">
        <NavLink  to="/story"  className={({isActive})=> isActive ? "text-danger":null}>Education</NavLink>
       </li>
        
       <li className="nav-item">
       <NavLink to="/contact"  className={({isActive})=> isActive ? "text-danger":null}>Work History</NavLink>
         </li>
        <li className="nav-item">
    <NavLink to="/services"  className={({isActive})=> isActive ? "text-danger":null}>Contact</NavLink>          </li>
        </li>
     </ul> */}
   </div>
  </div>
</div>

        </div>
    )
}
export default Navbar;





