import React from "react";
import axios from "axios";
// import { Col, Row } from "react-bootstrap";

export default class PersonList extends React.Component {
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
        {this.state.cards.map((card) => (
          <li key={card.id}>{card.cardName}</li>
        ))}
      </ul>
    );
  }
  // <>
  //   <div className="next-steps my-5">
  //     <Row className="d-flex justify-content-between">
  //       {this.state.cards.map((card) => (
  //         <Col key={card.id} md={5} className="mb-4">
  //           <h6 className="mb-3">
  //             <a
  //               target="_blank"
  //               rel="noopener noreferrer"
  //               href={card.cardImage}
  //             >
  //               {card.cardName}
  //             </a>
  //           </h6>
  //           <img src={card.cardImage} class="card__image" />
  //           <p>{card.cardDescription}</p>
  //         </Col>
  //       ))}
  //     </Row>
  //   </div>
  // </>
  //   );
  // }
}
