import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    cards: [],
  };
  //http://localhost:5000/card
  //https://jsonplaceholder.typicode.com/users
  componentDidMount() {
    axios.get('https://calm-lowlands-56636.herokuapp.com/card').then(res => {
      const cards = res.data;
      this.setState({ cards });
    });
  }

  render() {
    return (
      <ul>
        {this.state.cards.map(card => (
          <li key={card.id}>{card.cardName}</li>
        ))}
      </ul>
    );
  }
}
