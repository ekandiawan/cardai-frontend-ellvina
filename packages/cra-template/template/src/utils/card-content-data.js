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

// import { useState, useEffect } from "react";

// export default function cardContentData() {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//   fetch(`https://calm-lowlands-56636.herokuapp.com/card`)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(
//           `This is an HTTP error: The status is ${response.status}`
//         );
//       }
//       return response.json();
//     })
//     .then((actualData) => {
//       setData(actualData);
//       setError(null);
//     })
//     .catch((err) => {
//       setError(err.message);
//       setData(null);
//     })
//     .finally(() => {
//       setLoading(false);
//     });
// }, []);

//    return <div className="cardContentData">cardContentData</div>;
//   }

// export default cardContentData;

// import { useEffect } from "react";

// export default function cardContentData() {
//   useEffect(() => {
//     const url = "https://calm-lowlands-56636.herokuapp.com/card";

//     const fetchData = async () => {
//       try {
//         const response = await fetch(url);
//         const json = await response.json();
//         console.log(json);
//       } catch (error) {
//         console.log("error", error);
//       }
//     };

//     fetchData();
//   }, []);
// }

import React from "react";
import axios from "axios";

export default class cardContentData extends React.Component {
  state = {
    cards: [],
  };

  componentDidMount() {
    axios.get(`https://calm-lowlands-56636.herokuapp.com/card`).then((res) => {
      const cards = res.data;
      this.setState({ cards });
    });
  }

  render() {
    return (
      <ul>
        {this.state.cards.map(
          (card) => (
            <li key={card.id}>{card.cardName}</li>
          ),
          <li key={card.id}>{card.cardImage}</li>,
          <li key={card.id}>{card.cardDescription}</li>
        )}
      </ul>
    );
  }
}
