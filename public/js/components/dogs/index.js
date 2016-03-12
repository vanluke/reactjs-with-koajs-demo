import React, {Component} from 'react';
import _fetch from 'whatwg-fetch';
import Payment from './../payment';
import '!style!css!sass!./_dogs.scss';
import { getDogs } from './dogsApi';

export default class Dog extends Component {
  componentDidMount () {
        getDogs().then((dogs) => {
          this.setState ({dogs});
        });
  }
  mapDogs (dogs) {
    if (!dogs || dogs.length === 0) {
      return;
    }
    return dogs.map((dog, i)=> {
      const imgSrc = dog['photo-large'];
      return <div className="card" key={i}>
             <div className="card__header">
              <img src={imgSrc} width="226" height="180" />
            </div>
            <div>
            <div className="card__content">
              <h3 className="card__content__header">{dog.name}</h3>
              <h4 className="card__content__header--small">{dog.breed}</h4>
              <p className="card__content__paragraph">{dog.price}</p>
            </div>
            <div className="card__footer">
              <button onClick={this.handleBuy.bind(this, dog)} className="card__button">Buy</button>
            </div>
          </div>
        </div>
    });
  }
  handleBuy (dog, event) {
    const el = document.getElementById('modal');
    el.classList.add('show');
    this.setState({dog});

  }
  render () {
    const {dogs, dog} = this.state;
    const domDogs = this.mapDogs(dogs);
    return <div><div className="dogs">{domDogs} </div><Payment details={dog} /></div>
  }

  state = {
    dogs: [],
    dog: {},
    amount: 0
  }
}
