import './style.css'
import logo from '../../assests/images/LOGO_SVG.svg'

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';

                /* --   ICONS -- */
import {BsInstagram, BsGithub, BsLinkedin, BsWhatsapp} from 'react-icons/bs'
import {MdOutlineEmail} from 'react-icons/md'

export default function Header () {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return(
        <nav>

        {/* -- HEADER -- */}
      <Navbar color='none' dark='true' expand='lg' container='fluid' className='navbar-header'>

        {/* -- LOGO -- */}
        <NavbarBrand href="/"><img src={logo} alt='1' className='img-logo'/></NavbarBrand>


        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto"navbar>
            
            <NavItem>
              <NavLink href="/">
                <span>&lt;</span>
                HOME
                <span>&gt;</span>
            </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/sobre-mim">
                <span>&lt;</span>
                SOBRE MIM
                <span>&gt;</span>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/projetos">
                <span>&lt;</span>
                PROJETOS
                <span>&gt;</span>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/contato">
                <span>&lt;</span>
                CONTATO
                <span>&gt;</span>
              </NavLink>
            </NavItem>

          </Nav>



          <NavbarText>
          <div className='socials'>
            <Link to='https://www.instagram.com/_yurerafael/' target='_blank'><BsInstagram/></Link>
            <Link to='https://github.com/yure07' target='_blank'><BsGithub/></Link>
            <Link to='https://www.linkedin.com/in/yure-rafael/' target='_blank'><BsLinkedin/></Link>
            <Link to='mailto:rafaelyure53@gmail.com' target='_blank'><MdOutlineEmail/></Link>
            <Link to='https://wa.link/eeecik' target='_blank'><BsWhatsapp/></Link>
         </div>
          </NavbarText>
        </Collapse>
      </Navbar>
      </nav>
    )
}