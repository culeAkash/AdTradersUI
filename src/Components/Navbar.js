import React, { useState } from 'react'
import { Button, Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink, Navbar, NavbarBrand, NavbarText, NavbarToggler, UncontrolledDropdown } from 'reactstrap'
import style from '../Static/Styles/Navbar.module.css'
import { Icon } from 'semantic-ui-react'
import { Link, useNavigate } from 'react-router-dom';

export default function NavigationBar() {

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();


  const toggle = () => setIsOpen(!isOpen);




  return (
    <div className={style.header}>
      <Navbar expand="md" className={style.navbar}>
        <NavbarBrand><Link style={{ color: 'inherit' }} to="/">A.D. TRADERS</Link></NavbarBrand>
        <NavbarToggler onClick={toggle} className={style.navbar_collapse} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink>
                <Link style={{ color: 'inherit' }} to="/home">Home</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link style={{ color: 'inherit' }} to="/products">Products</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link style={{ color: 'inherit' }} to="/contact">Contact Us</Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <div className={style.login_button} onClick={() => navigate('/login')}>
        <Icon name='sign-in alternate' size='big' color='primary' />
        <Button className={style.btn} color='primary' onClick={() => navigate('/login')}>
          Login
        </Button>
      </div>
    </div>

  )
}
