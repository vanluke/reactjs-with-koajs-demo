import React from 'react';
import '!style!css!sass!./_form.scss';
//TODO: refactoring this all and bind to model;

const basicInformation = (props) => {
  return <div className="name">
      <input type="text" name="name" placeholder="name" />
      <input type="text" name="surname" placeholder="surname" />
      <input type="mail" name="email" placeholder="email"/>
   </div>
};

const radio = (props) => {
  return <div className="radio">
      <label for="radio-choice-1">Choice 1</label>
      <input type="radio" name="radio-choice" id="radio-choice-1" value="choice-1" />
      <label for="radio-choice-2">Choice 2</label>
      <input type="radio" name="radio-choice" id="radio-choice-2" value="choice-2" />
  </div>
};

const dropDown = (props) => {
  return <div className="dropdown">
    <label for="select-choice">Select Dropdown Choice:</label>
      <select name="select-choice" id="select-choice">
        <option value="Choice 1">Choice 1</option>
        <option value="Choice 2">Choice 2</option>
        <option value="Choice 3">Choice 3</option>
      </select>
   </div>
};

const message = (props) => {
    return <div className="message">
        <label for="textarea">Textarea:</label>
        <textarea cols="40" rows="8" name="textarea" id="textarea"></textarea>
      </div>
};


const submit = () => {
  return <div className="submit">
    <input type="submit" value="Submit" />
  </div>
};


export default class Form extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
     const basicInformationSection = basicInformation(this.props);
     const radioSection = radio(this.props);
     const dropDownSection = dropDown(this.props);
     const messageSection = message(this.props);
     const submitButton = submit(this.props);
      return <form>
        <h1>Checkout</h1>
        {basicInformationSection}
        {radioSection}
        {dropDownSection}
        {messageSection}
        {submitButton}
      </form>
  }
}
