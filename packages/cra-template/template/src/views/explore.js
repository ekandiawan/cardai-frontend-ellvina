import React, { useState } from 'react';
import { NavBar, Demo1 } from '../components';
import data from '../merchant.js';

const Explore = () => {
  const [filter, setFilter] = useState('');

  const ExploreText = event => {
    setFilter(event.target.value);
  };
  let dataSearch1 = data.MerchantData.filter(item => {
    return Object.keys(item).some(key =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });
  return (
    <section className="py-4 container">
      <NavBar />
      <div className="row justify-content-center">
        <div className="col-12 mb-5">
          <div className="mb-3 col-4 mx-auto text-center">
            <label className="form-label h4">
              OCBC card holder promotion <p></p>
            </label>
            <input
              type="text"
              className="from-control"
              value={filter}
              onChange={ExploreText.bind(this)}
            />
          </div>
        </div>

        <div style={{ position: 'relative', width: '100%', height: '400px' }}>
          <Demo1 />
        </div>
        {dataSearch1.map(item => {
          return (
            <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
              <div className="card p-0 overflow-hidden h-100 shadow">
                <img src={item.img} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Explore;
