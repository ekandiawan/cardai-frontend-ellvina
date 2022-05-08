import React from "react";
import axios from "axios";
import { Col, Row } from "react-bootstrap";

export default class CardContent extends React.Component {
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
      <div className="next-steps my-5">
        <h2 className="my-5 text-center">This is CardAI Card page</h2>
        <Row className="d-flex justify-content-between">
          {cards.map((col, id) => (
            <Col key={id} md={5} className="mb-4">
              <h6 className="mb-3">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={col.cardImage}
                >
                  {col.cardName}
                </a>
              </h6>
              <img src={col.cardImage} class="card__image" />
              <p>{col.cardDescription}</p>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}
