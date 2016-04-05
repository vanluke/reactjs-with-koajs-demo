import React from 'react';

const Dog = (props) => {
  const imgSrc = props.dog['photo-large'];
  return  <div className="card">
    <div className="card__header">
      <img src={imgSrc} width="226" height="180" />
      </div>
      <div>
        <div className="card__content">
          <h3 className="card__content__header">{props.dog.name}</h3>
          <h4 className="card__content__header--small">{props.dog.breed}</h4>
          <p className="card__content__paragraph">{props.dog.price}</p>
        </div>
        <div className="card__footer">
          <button onClick={props.handleBuy.bind(this, props.dog)} className="card__button">Buy</button>
        </div>
      </div>
  </div>
};

Dog.propTypes = {
    dog: React.PropTypes.object.isRequired,
    handleBuy: React.PropTypes.func.isRequired
};

export default Dog;
