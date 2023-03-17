import { Outlet } from 'react-router-dom';
import Sidenavbar from './Navbar/Sidenavbar';
import { Container } from 'react-bootstrap';
const SidebarLayout = () => (
  <>
    <Sidenavbar />

    <Outlet />
  </>
);

export default SidebarLayout;