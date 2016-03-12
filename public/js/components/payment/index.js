import React from 'react';
import '!style!css!sass!./_form.scss';
import '!style!css!sass!toastr/toastr.scss';
import toastr from 'toastr';

const close = () => {
    const el = document.getElementById('modal');
    el.classList.toggle('show');
};

const modalHeader = (title) => {
  return  <header className="modal__content__header">{title}</header>
};

const onSubmit = (self, evt) => {
  evt.preventDefault();
  toastr.success(`Successfly charged with $ ${self.refs.amout.value}`);
  close();
  return false;
};

export default class PaymentCreditCard extends React.Component {
  render () {
    const {details} = this.props;
    const headerElement = modalHeader('Payment for a dog');
    return <div id="modal" className="modal">
      <div className="modal__content">
      <a title="Close" className="modal__anachor--close" onClick={close.bind(this)}>Close</a>
        <div>
          {headerElement}
          <form onSubmit={onSubmit.bind(this, this)} id="payment-form">
            <div className="modal__content--row">
              <label>
              <span>Amount ($)</span>
              <input type="text" ref="amout" size="20" readOnly data-stripe="number" name="amout" value={details.price}/>
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
}
