import React, {Component} from 'react';
import api from './currencyApi';

export default class Currency extends Component {
  constructor (props){
    super(props);
  }
  componentDidMount() {
    console.log('compoennt did mount');
    api().then (response => {
      console.log(response);
    });
  }
  render() {
    return <div></div>;
  }
}
