import React from 'react';
// import Transaction from '../transactionhistory';
// import { Col, Row } from 'react-bootstrap';

const Reminder = () => (
  <div className="next-steps my-5">
    <h2 className="my-5 text-center">Reminder</h2>
    <ul>
      <li>
        Your statement cycle date <h3>10th of the month</h3>
      </li>
      <li>
        Your next cycle : <b>10 May 2022</b>
      </li>
      <ul>
        <li>
          Reminder <b>ON</b>
        </li>
      </ul>

      <li>
        Your Payment due date <b>25 April 2022</b>
      </li>
      <ul>
        <li>
          Reminder <b>3</b> days before the due date <b>OFF</b>
        </li>
      </ul>
    </ul>
  </div>
);

export default Reminder;
