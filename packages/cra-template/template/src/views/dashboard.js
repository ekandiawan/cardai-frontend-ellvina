import React from 'react';
import { NavBar, Content } from '../components';

const Dashboard = () => (
  <div id="app" className="d-flex flex-column h-100">
    <NavBar />
    <Content />
  </div>
);

export default Dashboard;
