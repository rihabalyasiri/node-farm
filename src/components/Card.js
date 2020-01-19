import React from 'react';

const Card = props => {
  let organic = <div></div>;
  if (props.organic) {
    organic = (
      <div className="card__detail-box">
        <h6 className="card__detail card__detail--organic">Organic!</h6>
      </div>
    );
  }
  return (
    <figure className="card ">
      <div className="card__emoji">{props.image}</div>
      <div className="card__title-box">
        <h2 className="card__title">{props.productName}</h2>
      </div>

      <div className="card__details">
        {organic}
        <div className="card__detail-box">
          <h6 className="card__detail">{props.quantity} per <span role="img" aria-label="box">📦</span></h6>
        </div>
        <div className="card__detail-box ">
          <h6 className="card__detail card__detail--price">{props.price}€</h6>
        </div>
      </div>

      <a className="card__link" href="/">
        <span>
          Detail <i className="emoji-right"><span role="img" aria-label="hand">👉</span></i>
        </span>
      </a>
    </figure>
  );
};

export default Card;
