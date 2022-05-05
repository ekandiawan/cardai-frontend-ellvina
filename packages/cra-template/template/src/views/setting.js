import React from 'react';
// import data from '../data.js';
import { NavBar, Reminder, Rewards, Transaction } from '../components';

const Setting = () => (
  <div id="app" className="d-flex flex-column h-100">
    <NavBar />
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        padding: '5px',
      }}
    >
      <a href="/search">
        <button className="btn btn-primary btn-block">Done</button>
      </a>
    </div>
    <h1 className="my-5 text-center">Setting</h1>
    <Rewards />
    <Reminder />
    <Transaction />
    {/* <CategoryBar /> */}
  </div>
);

export default Setting;
