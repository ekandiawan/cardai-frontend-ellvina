import React from 'react';

import logo from '../assets/Cardai.png';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './logout-button';
import LoginButton from './login-button';
import { Container, Nav } from 'react-bootstrap';

const AuthNav = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Nav classname="justify-content-end">
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </Nav>
  );
};

const Hero = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={logo} alt="CardAI logo" width="120" />
    <h1 className="mb-4">Welcome to CardAI</h1>

    <p className="lead">
      This is homepage of CardAI
      <br />
      Join our{' '}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://t0923532.wixsite.com/card-ai/forum"
      >
        Card.AI Community
      </a>
    </p>
    <Container>
      <AuthNav />
    </Container>
  </div>
);
export default Hero;
