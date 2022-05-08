import React from "react";
import axios from "axios";
import { Col, Row } from "react-bootstrap";

export default class PersonList extends React.Component {
  state = {
    cards: [],
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const cards = res.data;
      this.setState({ cards });
    });
  }

  render() {
    return (
      // <ul>
      //   {this.state.persons.map(
      //     (person) => (
      //       (
      //         <ul key={person.id}>
      //           {person.name} {person.email}
      //         </ul>
      //       ),
      //       (<ul key={person.id}>{person.email}</ul>)
      //     )
      //   )}
      // </ul>
      <>
        <div className="next-steps my-5">
          <Row className="d-flex justify-content-between">
            {cards.map((card, id) => (
              <Col key={card.id} md={5} className="mb-4">
                <h6 className="mb-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={card.cardImage}
                  >
                    {card.PersonListcardName}
                  </a>
                </h6>
                <img src={card.cardImage} class="card__image" />
                <p>{card.cardDescription}</p>
              </Col>
            ))}
          </Row>
        </div>
      </>
    );
  }
}
