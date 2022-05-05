import React from 'react';

const Footer = () => (
  <footer className="bg-light p-3 text-center">
    <div className="logo" />
    <div class="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
      <h5 className="text-right">Connect with us</h5>
      <div class="text-right">
        <a href="http://www.facebook.com/profile.php?id=">
          <i className="fa fa-facebook fa-lg"></i>
        </a>
        <a href="http://www.linkedin.com/in/">
          <i className="fa fa-linkedin fa-lg"></i>
        </a>
        <a href="https://twitter.com/CardAI_Official/">
          <i className="fa fa-twitter fa-lg"></i>
        </a>
        <a href="http://youtube.com/">
          <i className="fa fa-youtube fa-lg"></i>
        </a>
      </div>
    </div>
    <p>
      Copyright by{' '}
      <a target="_blank" rel="noopener noreferrer" href="/home">
        CardAI
      </a>
    </p>
  </footer>
);

export default Footer;
