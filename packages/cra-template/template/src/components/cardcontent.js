// import React from "react";

// import cardContentData from "../utils/card-content-data";
// import { Col, Row } from "react-bootstrap";

// const CardContent = () => (
//   <div className="next-steps my-5">
//     <h2 className="my-5 text-center">This is CardAI Card page</h2>
//     <Row className="d-flex justify-content-between">
//       {cardContentData.map((col, i) => (
//         <Col key={i} md={5} className="mb-4">
//           <h6 className="mb-3">
//             <a target="_blank" rel="noopener noreferrer" href={col.cardImage}>
//               {col.cardName}
//             </a>
//           </h6>
//           <img src={col.cardImage} class="card__image" />
//           <p>{col.cardDescription}</p>
//         </Col>
//       ))}
//     </Row>
//   </div>
// );

// export default CardContent;

// import React from "react";
// import $ from "jquery";

// export default class cardContent extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       cardName: "",
//       cardImage: "",
//       cardDescription: "",
//     };
//   }

//   componentDidMount() {
//     this.fetch();
//   }

//   fetch() {
//     var context = this;

//     $.ajax({
//       url: "https://calm-lowlands-56636.herokuapp.com/card",
//       method: "GET",
//       success: function (response) {
//         context.setState({
//           cardName: response.cardName,
//           cardImage: response.cardImage,
//           cardDescription: response.cardDescription,
//         });
//       },
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>
//           {this.state.cardName}
//           {this.state.cardImage}
//           {this.state.cardDescription}
//         </h1>
//       </div>
//     );
//   }
// }

import React from "react";
import axios from "axios";

export default class cardContent extends React.Component {
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
            (<li key={card.id}>{card.cardName}</li>),
            (<li key={card.id}>{card.cardImage}</li>),
            (<li key={card.id}>{card.cardDescription}</li>)
          )
        )}
      </ul>
    );
  }
}
