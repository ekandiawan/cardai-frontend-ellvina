import React from "react";
import axios from "axios";
// import { Col, Row } from "react-bootstrap";

export default class PersonList extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const persons = res.data;
      this.setState({ persons });
    });
  }

  render() {
    return (
      <ul>
        {this.state.persons.map((person) => (
          <li key={person.id}>{person.name}</li>
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
