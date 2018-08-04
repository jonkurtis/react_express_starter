import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap';


class AppNavbar extends Component {
  state = {
    isOpen: false
  }
  
  toggle = () => {
    this.setState({
      isOpen: !this.setState.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md" className="mb-5">
          <Container>
            <NavbarBrand href="/">React App</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen="this.state.isOpen" navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="https://www.github.com/jonkurtis">GitHub</NavLink>
                </NavItem>  
              </Nav>
            </Collapse>
          </Container>
        </Navbar>  
      </div>
    )
  }
}

export default AppNavbar;