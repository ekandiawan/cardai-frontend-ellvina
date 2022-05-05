// const cardContentData = [
//   {
//     title: 'DBS Live Fresh',
//     link: 'https://www.dbs.com.sg/iwov-resources/images/cards/credit-cards/live-fresh-dbs-visa-paywave-platinum-card/prod-comparator-220x140-dbs-livefreshplat-new-aug14.png',
//     description: 'This is DBS live Fresh card',
//   },
//   {
//     title: 'Citi Cashback Card',
//     link: '/card/citi cashback.jpg',
//     description: 'This is Citi Cashback card',
//   },
//   {
//     title: 'POSB Everyday Card',
//     link: '/card/posb everyday.jpg',
//     description: 'This is POSB Everyday Card',
//   },
//   {
//     title: 'Amex Krisflyer Card',
//     link: '/card/Amex Krisflyer.jpg',
//     description: 'This is Amex Krisflyer Card',
//   },
// ];

import { useState, useEffect } from "react";

export default function cardContentData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      return response.json();
    })
    .then((actualData) => console.log(actualData))
    .catch((err) => {
      console.log(err.message);
    });
}, []);
  
   return <div className="cardContentData">cardContentData</div>;
  }

// export default cardContentData;
