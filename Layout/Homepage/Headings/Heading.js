import React, { useState } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
  } from 'reactstrap';

const Heading = ({handleSignOut}) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">My Blog</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/new-article">New Blog</NavLink>
            </NavItem>
          </Nav>
            <UncontrolledDropdown >
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>

                <DropdownItem >

                  <Button onClick={handleSignOut}>

                     LogOut
                  </Button>

                </DropdownItem>

              </DropdownMenu>
            </UncontrolledDropdown>


        </Collapse>
      </Navbar>
    </div>
  );
}

export default Heading;
