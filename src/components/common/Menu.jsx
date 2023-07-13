import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Menu = ({usuarioLogueado, setUsuarioLogueado}) => {
  const navigate = useNavigate();
  const logout = () => 
  {
    sessionStorage.removeItem('user');
    setUsuarioLogueado({});
    navigate('/');
  }


  return (
    <Navbar bg="info" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to={'/'}>El rincón del sazón</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink end className='nav-item nav-link' to={'/'}>Inicio</NavLink>
            <NavLink end className='nav-item nav-link' to={'*'}>Contacto</NavLink>
            {
              usuarioLogueado.email?(
                <>
                  <NavLink end className='nav-item nav-link' to={'/administrador'}>Administrador</NavLink>
                  <Button variant="dark" onClick={logout}>Logout</Button>
                </>
              ):<NavLink end className='nav-item nav-link' to={'/login'}>Login</NavLink>
            }          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;