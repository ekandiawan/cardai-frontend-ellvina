import React from 'react';

const Rewards = () => (
  <div className="next-steps my-5">
    <h2 className="my-5 text-center">Rewards</h2>
    <ul>
      <li>
        Minimum Spending = <h3>$800</h3>
      </li>
      <li>
        Total spend on this month cycle : <b>$250</b>{' '}
      </li>
      <li>Category:</li>
      <ul>
        <li>
          Dining = <b>$100</b>
        </li>
        <li>
          Entertainment = <b>$40</b>
        </li>
        <li>
          Groceries = <b>$110</b>
        </li>
      </ul>
      <li>
        Spending needed before the cycle end = <b>$550</b>
      </li>
      <li>
        Projected Rewards to gain <b>$0.75</b>{' '}
        <i>(maximum rewards caps at $80)</i>
      </li>
    </ul>
  </div>
);

export default Rewards;
