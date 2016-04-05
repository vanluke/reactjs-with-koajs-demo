import '!style!css!sass!./_form.scss';
import React from 'react';
import ModalHeader from './modal-header';


export default class PaymentCreditCard extends React.Component {
  onSubmit (evt) {
    evt.preventDefault();
    this.props.onSubmit ({
      amount: this.refs.amount.value,
      cardNumber: this.refs.cardNumber.value,
      cvc: this.refs.cvc.value,
      expMonth: this.refs.expMonth.value,
      expYear: this.refs.expYear.value
    });
  }
  render () {
    const {details} = this.props;
    const title = `Payment for a ${details.name}`;
    return <div id="modal" className="modal" ref={this.props.hook}>
      <div className="modal__content">
      <a title="Close" className="modal__anachor--close" onClick={this.props.close.bind(this)}>Close</a>
        <div>
          <ModalHeader title={title} />
          <form onSubmit={this.onSubmit.bind(this)} id="payment-form">
            <div className="modal__content--row">
              <label>
              <span>Amount ($)</span>
              <input type="text" ref="amount" size="20" readOnly data-stripe="number" name="amout" value={details.price}/>
              </label>
            </div>
            <div className="modal__content--row">
              <label>
              <span>Card Number</span>
              <input type="text" size="20" ref="cardNumber" data-stripe="number" name="card-number"/>
              </label>
            </div>
            <div className="modal__content--row">
              <label>
              <span>CVC</span>
              <input type="text" size="4" ref="cvc" data-stripe="cvc" name="cvc"/>
              </label>
            </div>
            <div className="modal__content--row--small">
              <label>
              <span>Expiration (MM/YYYY)</span>
              <input type="text" size="2" ref="expMonth" data-stripe="exp-month" name="exp-month"/>
              </label>
              <span> / </span>
              <input type="text" size="4" ref="expYear" data-stripe="exp-year" name="exp-year" />
            </div>
            <button className="modal__content__button--submit" type="submit">Submit Payment</button>
          </form>
        </div>
      </div>
    </div>
  }

  static propTypes = {
    details: React.PropTypes.object.isRequired
  };
}
