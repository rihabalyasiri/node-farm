import React from 'react';
import Api from '../data/Api';
import Card from './Card';

const CardListe = () => {
  const Cards = Api.map(card => {
    return (
      <Card
        key={card.id}
        productName={card.productName}
        image={card.image}
        nutrients={card.nutrients}
        quantity={card.quantity}
        price={card.price}
        organic={card.organic}
        description={card.description}
        {...card}
      />
    );
  });
  return (
    <div className="container">
      <h1>
        <span role="img" aria-label="corn">🌽</span> Node Farm <span role="img" aria-label="brokely">🥦</span>
      </h1>

      <div className="cards-container">{Cards}</div>
    </div>
  );
};

export default CardListe;
