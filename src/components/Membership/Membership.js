// import React from 'react';
//
// function submitForm(e) {
//   e.preventDefault();
// }
// function CreditCard() {
//   return (
//     <form className="" onSubmit={(e) => submitForm(e)}>
//       <textarea></textarea>
//     </form>
//   );
// }
//
// function Membership() {
//   return (
//     <div className="">
//       <h1>Membership</h1>
//       <CreditCard></CreditCard>
//     </div>
//   );
// }
//
// export default Membership;

import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { createArticle, updateArticle } from '../../reducers/article';
import { useNavigate, useParams } from 'react-router';

export default class PaymentForm extends React.Component {
  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.number.length);
    if (
      !(
        this.state.number.length > 0 &&
        this.state.cvc.length > 0 &&
        this.state.name.length > 0 &&
        this.state.expiry.length > 0
      )
    ) {
      alert('Invalid');
    } else {
      if (this.state.number === '2222111199996666') {
        alert(atob('Q1RGezJfbXVjaF8xbmYwX1hwMHNlRH0'));
      } else {
        alert('Card declined, try again!');
      }
    }
  }

  isString(x) {
    return /^[a-zA-Z_ ]*$/.test(x);
  }

  isNumeric(number) {
    return +number === +number;
  }

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChangeString = (e) => {
    const { name, value } = e.target;
    if (this.isString(value)) {
      this.setState({ [name]: value });
    }
  };
  handleInputChangeNumber = (e) => {
    const { name, value } = e.target;
    if (this.isNumeric(value)) {
      this.setState({ [name]: value });
    }
  };

  render() {
    return (
      <div className="editor-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-10 offset-md-1 col-xs-12">
              <div id="PaymentForm">
                <Cards
                  cvc={this.state.cvc}
                  expiry={this.state.expiry}
                  focused={this.state.focus}
                  name={this.state.name}
                  number={this.state.number}
                />
                <br />
                <form onSubmit={this.handleSubmit}>
                  <input
                    value={this.state.name}
                    className="form-control form-control-lg"
                    type="text"
                    name="name"
                    maxLength="22"
                    placeholder="Name"
                    onChange={this.handleInputChangeString}
                    onFocus={this.handleInputFocus}
                  />
                  <input
                    value={this.state.number}
                    className="form-control form-control-lg"
                    type="tel"
                    name="number"
                    maxLength="16"
                    placeholder="Card Number"
                    onChange={this.handleInputChangeNumber}
                    onFocus={this.handleInputFocus}
                  />
                  <input
                    value={this.state.cvc}
                    className="form-control form-control-lg"
                    type="tel"
                    name="cvc"
                    maxLength="3"
                    placeholder="cvc"
                    onChange={this.handleInputChangeNumber}
                    onFocus={this.handleInputFocus}
                  />
                  <input
                    value={this.state.expiry}
                    className="form-control form-control-lg"
                    type="tel"
                    name="expiry"
                    maxLength="4"
                    placeholder="expiry"
                    onChange={this.handleInputChangeNumber}
                    onFocus={this.handleInputFocus}
                  />
                  <input
                    className="btn btn-lg pull-xs-right btn-primary"
                    type="submit"
                    value="Submit"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
