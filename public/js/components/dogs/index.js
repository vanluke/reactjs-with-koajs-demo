import '!style!css!sass!./_dogs.scss';
import '!style!css!sass!toastr/toastr.scss';
import React, {Component} from 'react';
import Payment from './../payment';
import { getDogs } from './dogsApi';
import Dog from './dog';

import toastr from 'toastr';

const onSubmit = (dog) => {
  toastr.success(`Successfly charged with $ ${dog.amount}`);
  close();
  return false;
};

const close = () => {
    const el = document.getElementById('modal');
    el.classList.toggle('show');
};

export default class Dogs extends Component {
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
      return <Dog dog={dog} key={i} handleBuy={this.showPayment.bind(this)} />
    });
  }
  showPayment (dog, event) {
    const el = document.getElementById('modal');
    el && el.classList ? el.classList.add('show') : '';
    this.setState({dog});

  }
  render () {
    const {dogs, dog} = this.state;
    const domDogs = this.mapDogs(dogs);
    return <div><div className="dogs">{domDogs} </div>
      <Payment hook="payment" onSubmit={onSubmit.bind(this)} details={dog} close={close.bind(this)} />
    </div>
  }

  state = {
    dogs: [],
    dog: {},
    amount: 0
  }
}
