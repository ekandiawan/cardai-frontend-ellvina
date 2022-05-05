import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './logout-button';
import LoginButton from './login-button';
import logo from '../assets/CardAI_1.png';

const MainNav = () => (
  <Nav className="mr-auto">
    <Nav.Link
      as={RouterNavLink}
      to="/"
      exact
      activeClassName="router-link-exact-active"
    >
      <b>Home</b>
    </Nav.Link>
    <Nav.Link
      as={RouterNavLink}
      to="/feature"
      exact
      activeClassName="router-link-exact-active"
    >
      <b>Feature</b>
    </Nav.Link>
    <Nav.Link
      as={RouterNavLink}
      to="/card"
      exact
      activeClassName="router-link-exact-active"
    >
      <b>Card</b>
    </Nav.Link>

    <Nav.Link
      as={RouterNavLink}
      to="/search"
      exact
      activeClassName="router-link-exact-active"
    >
      <b>Search</b>
    </Nav.Link>
    <Nav.Link
      as={RouterNavLink}
      to="/explore"
      exact
      activeClassName="router-link-exact-active"
    >
      <b>Explore</b>
    </Nav.Link>
    <Nav.Link
      as={RouterNavLink}
      to="/token"
      exact
      activeClassName="router-link-exact-active"
    >
      <i>Token (U/C)</i>
    </Nav.Link>
    <Nav.Link
      as={RouterNavLink}
      to="/about-us"
      exact
      activeClassName="router-link-exact-active"
    >
      <b>About us</b>
    </Nav.Link>
  </Nav>
);

const AuthNav = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Nav classname="justify-content-end">
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </Nav>
  );
};

const NavBar = () => {
  return (
    <Navbar bg="light" expand="md">
      <Container>
        {/* <Navbar.Brand as={RouterNavLink} className="logo" to="/" /> */}
        <Navbar.Brand href="/">
          <img
            className="mb-3 app-logo"
            src={logo}
            alt="React logo"
            width="80"
          />
        </Navbar.Brand>
        <MainNav />
        <AuthNav />
      </Container>
    </Navbar>
  );
};

export default NavBar;
