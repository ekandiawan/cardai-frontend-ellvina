import React from "react";
import axios from "axios";

export default class cardContentData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      cards: [],
    };
  }

  componentDidMount() {
    // axios.get(`https://calm-lowlands-56636.herokuapp.com/card`).then((res) => {
    //   const cards = res.data;
    //   this.setState({ cards });
    // });
    fetch("https://calm-lowlands-56636.herokuapp.com/card")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            cards: result.cards,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, cards } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {cards.map((card) => (
            <li key={i}>
              {card.cardName} {card.cardImage} {card.cardDescription}
            </li>
          ))}
        </ul>
      );
    }
  }
}
